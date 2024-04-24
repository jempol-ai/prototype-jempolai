const { VertexAI } = require('@google-cloud/vertexai');
import { GoogleAuth } from 'google-auth-library';
require('dotenv').config();
import { NextResponse } from "next/server";

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
const auth = new GoogleAuth({
  keyFile: SERVICE_ACCOUNT_KEY_PATH as string,
  scopes: 'https://www.googleapis.com/auth/cloud-platform'
});

// Initialize Vertex AI with the necessary project and location information once.
const vertexAiOptions = { project: PROJECT_ID, location: LOCATION, auth: auth };
const vertex_ai = new VertexAI(vertexAiOptions);

// Define model names as constants to avoid magic strings and improve readability.
const GEMINI_PRO_MODEL_NAME = 'gemini-1.0-pro';

// Async function to handle POST requests, similar to the structure in Next.js API endpoint.
export async function POST(req: Request) {
  try {
    if (!PROJECT_ID || !LOCATION) {
      return new NextResponse("Vertex AI configuration is missing.", { status: 500 });
    }

    const body = await req.json();
    const { contents, max_output_tokens } = body;

    if (!contents) {
      return new NextResponse("Contents are required", { status: 400 });
    }

    // Instantiate the model with dynamic configuration based on the request.
    const generativeModelOptions = {
      model: GEMINI_PRO_MODEL_NAME,
      generationConfig: { max_output_tokens: max_output_tokens || 256, temperature: 0.7 }, // default to 256 if not provided
    };
    const generativeModel = vertex_ai.preview.getGenerativeModel(generativeModelOptions);

    const streamingResp = await generativeModel.generateContentStream({ contents });
    let message = '';

    for await (const item of streamingResp.stream) {
      message += item.candidates[0].content.parts[0].text;
    }

    return new NextResponse(JSON.stringify({ message }), { status: 200 });
  } catch (error) {
    console.error("[CONVERSATION_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
