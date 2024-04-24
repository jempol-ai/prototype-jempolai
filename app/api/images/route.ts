// Import necessary modules and initialize environment variables
import { NextResponse } from "next/server";
import { JWT } from "google-auth-library";
import fetch from 'node-fetch';
import getIdToken from "../../../lib/token"
require('dotenv').config();

// Define the expected structure of the API response
interface ImageApiResponse {
    predictions: {
      bytesBase64Encoded: string;
    }[];
  }
  

// Set up the JWT client for Google authentication
const client = new JWT({
  keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS as string,
  scopes: ["https://www.googleapis.com/auth/cloud-platform"],
});


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt, aspect_ratio, num_images } = body;

    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 });
    }

    const IMAGEN_URL = `https://${process.env.API_ENDPOINT}/v1/projects/${process.env.PROJECT_ID}/locations/us-central1/publishers/google/models/imagegeneration@006:predict`;

    const headers = {
      Authorization: `Bearer ${await getIdToken()}`,
      "Content-Type": "application/json",
    };

    const data = {
      instances: [
        { prompt },
      ],
      parameters: {
        sampleCount: num_images || 1,
        aspectRatio: aspect_ratio || "1:1"
      },
    };

    const response = await fetch(IMAGEN_URL, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json() as ImageApiResponse;

    if (result.predictions && result.predictions.length > 0) {
        
  
        return new NextResponse(JSON.stringify(result), { status: 200 });
      } else {
        return new NextResponse("No image generated", { status: 404 });
      }
  } catch (error) {
    console.error("[IMAGE_GENERATION_ERROR]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
