import { JWT } from "google-auth-library";

require('dotenv').config();

// Set up the JWT client for Google authentication
const client = new JWT({
  keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS as string,
  scopes: ["https://www.googleapis.com/auth/cloud-platform"],
});

/**
 * Retrieves the ID token from the Google authentication client.
 *
 * @return {Promise<string>} The access token retrieved from the client.
 */
export default async function getIdToken() {
  const token  = await client.authorize();
  return token.access_token;
}