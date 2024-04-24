import { NextResponse} from "next/server";
const { VertexAI } = require('@google-cloud/vertexai');
import { GoogleAuth } from 'google-auth-library';
require('dotenv').config();

// Vertex AI setup
// Constants for project and location should be defined at the top level.
const PROJECT_ID = process.env.PROJECT_ID;
const LOCATION = process.env.PROJECT_LOCATION;
const SERVICE_ACCOUNT_KEY_PATH = process.env.GOOGLE_APPLICATION_CREDENTIALS;

// Ensure the service account key path is set
if (!SERVICE_ACCOUNT_KEY_PATH) {
  console.error('Service account key path must be set in the environment variables.');
  process.exit(1);
}

// Set up the credentials for your GCP service account
// const auth = new GoogleAuth({
//   keyFilename: SERVICE_ACCOUNT_KEY_PATH,
//   scopes: 'https://www.googleapis.com/auth/cloud-platform'
// });
// Parse JSON from the environment variable
// const serviceAccount = JSON.parse(SERVICE_ACCOUNT_KEY_PATH);

// Set up the credentials for your GCP service account
const auth = new GoogleAuth({
  keyFile: SERVICE_ACCOUNT_KEY_PATH as string,
  scopes: 'https://www.googleapis.com/auth/cloud-platform'
});

// Initialize Vertex AI with the necessary project and location information once.
const vertexAiOptions = { project: PROJECT_ID, location: LOCATION, auth: auth };
const vertex_ai = new VertexAI(vertexAiOptions);

const visionModel = 'gemini-1.0-pro-vision';


export const POST = async (req: any, res: any) => {
  const formData = await req.formData();

  // extract the file, prompt, and max_output_tokens from the form data (json body)
  const file = formData.get("file");
  const prompt = formData.get("prompt");  
  const max_output_tokens = formData.get("max_output_tokens");


  if (!file) {
    return NextResponse.json({ error: "No file received." }, { status: 400 });
  }

  // Check if the file is a JPEG
  if (file.type !== "image/jpeg" && file.type !== "image/jpg") {
    return NextResponse.json({ error: "File is not a JPEG image." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const base64 = buffer.toString('base64');

  const filePart = { inline_data: { data: base64, mimeType: 'image/jpeg' } };
  const textPart = { text: prompt || 'What is the image about?. Use format of "image title: <text>", image description: <long text>"' };
  const request = {
    contents: [{ role: 'user', parts: [textPart, filePart] }],
  };

  const generativeVisionModel = vertex_ai.getGenerativeModel({
    model: visionModel,
    generationConfig: { maxOutputTokens: Number(max_output_tokens) || 256, temperature: 0.7 }
  });

  const streamingResult = await generativeVisionModel.generateContentStream(request);
  const contentResponse = await streamingResult.response;
  
  try {
    // Respond with the base64 string of the image
    return NextResponse.json({ message: "Success", caption: contentResponse.candidates[0].content.parts[0].text, status: 200 });
  } catch (error) {
    console.log("Error occurred", error);
    return NextResponse.json({ message: "Failed", status: 500 });
  }
};

