/** @type {import('next').NextConfig} */
export default {
  // Access environment variables from process.env
  env: {
    apiKey: process.env.API_KEY,
    baseUrl: process.env.BASE_URL
  }
};