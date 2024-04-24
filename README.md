# Jempol AI

Try Jempol AI [here](https://jempolai-nb7upjf7hq-uc.a.run.app)

## Overview
Jempol AI is an innovative suite of AI-powered marketing tools designed specifically for Small and Medium-sized Business (SMB) owners. The aim is to empower businesses by automating and enhancing their marketing efforts, enabling them to grow and thrive in a competitive marketplace. With Jempol AI, complex marketing tasks are simplified, making high-end marketing strategies accessible to businesses of all sizes.

## Features
Jempol AI boasts an array of features tailored to meet the diverse marketing needs of SMBs:

1. **Social Media Content**: Offers tools for generating engaging captions and posts to enhance social media presence.
2. **Campaign Generation**: Employs AI to plan and execute high-performing ad campaigns effortlessly.
3. **AI Product Shots**: Provides the ability to create professional and realistic product images with just a few clicks.
4. **AI Professional Food Shot**: Enables the generation of lifelike food photography, ideal for restaurants and food bloggers.
5. **Image to Captions Generation**: Crafts AI-generated captions for products or dishes, streamlining content creation.
6. **AI SEO Expert Assistant**: Assists in editing SEO templates and formulating SEO strategies to improve search engine rankings.
7. **Prompt Collection for AI Product Shots**: Aids in curating prompts to generate top-quality product images.
8. **Prompt Collection for AI Food Shots**: Supplies curated prompts for generating stunning food photography that can captivate any audience.

With these features, Jempol AI positions itself as a one-stop marketing solution that encapsulates content creation, campaign management, product presentation, and SEO strategy formulation - all powered by artificial intelligence to save time and produce consistent, quality results.

## Aim of the Project
The central objective of Jempol AI is to democratize advanced marketing capabilities, making them straightforward and accessible for SMB owners. By automating complex processes and providing intuitive tools, Jempol AI enables businesses to focus on their growth and customer engagement without getting bogged down by the intricacies of digital marketing.

## Tech Stack

Jempol AI is built on a robust stack of modern technologies, each serving a critical function in the ecosystem of the application:

1. **Next.js 14 (TypeScript)**: Acts as the backbone of Jempol AI, providing a server-side rendering framework for building optimized and scalable web applications. TypeScript is used for type safety and to enhance developer productivity through better tooling.

2. **Tailwind CSS**: Empowers developers to style Jempol AI with a utility-first CSS framework for rapidly building custom designs without leaving the HTML.

3. **Shadcn/UI**: A UI component library built for React, leveraging Tailwind CSS. It's used for creating a consistent and beautiful design system across Jempol AI with minimal effort.

4. **Node.js (Express.js)**: Offers a lightweight and flexible server-side platform. Express.js is a web application framework for Node.js, used to build the API for Jempol AI, handling requests, and routing with efficiency and simplicity.

5. **Google Vertex AI Gemini API**: Utilized for text generation and image captioning features in Jempol AI. This API provides advanced machine learning models that enable the application to generate creative and relevant text content at scale.

6. **Google Vertex AI Imagen 2 API**: A cutting-edge image generation API that allows Jempol AI to produce high-resolution and realistic images from textual prompts, enhancing the visual content creation process.

Each element of our tech stack has been carefully selected to ensure that Jempol AI delivers an intuitive, powerful, and seamless experience for SMB owners looking to take their marketing to the next level.


## Directory Structure

- `app/` - The main directory for Next.js application code.
  - `(dashboard)(routes)` - Contains all the routes related to the dashboard feature.
    - `campaign` - Holds files related to the campaign features within the dashboard.
    - `captions` - Contains files for managing captions within the dashboard.
    - `dashboard` - Includes core components and logic for the dashboard's main view.
    - `food` - Contains components, services, and logic for food-related features.
    - `foodtemplate` - Templates specific to food components or pages.
    - `product` - Holds product-related components and logic.
    - `producttemplate` - Templates specific to product components or pages.
    - `seo` - Search Engine Optimization components or utilities for dashboard routes.
    - `socialmedia` - Components and utilities related to social media features.
    - `layout.tsx` - A TypeScript file that defines the layout for the dashboard section.

  - `(landing)` - Contains all the routes and components for the landing page.
  - `api` - Defines server-side APIs or backend functionality that supports the landing pages. 
    - `caption` - Manages API for image captioning (Google Vertex AI Gemini Pro Vision).
    - `images` - Manages API for image generation (Google Vertex AI Imagen 2).
    - `text` - Manage API API for text generation (Google Vertex AI Gemini Pro).

## Deployment

### Continuous Integration and Continuous Deployment (CI/CD)

Jempol AI employs a CI/CD pipeline that leverages GitHub for version control and collaboration, along with Google Cloud Platform's (GCP) Cloud Build and Cloud Run services for automated build, test, and deployment processes.

**GitHub Repository**: Our codebase resides on GitHub, where we use Git for source control management. Every push to the repository triggers automated workflows that initiate the CI/CD pipeline.

**GCP Cloud Build**: Once changes are pushed to the GitHub repository, GCP Cloud Build automatically picks up these changes and executes defined build steps. This includes installing dependencies, running tests, and building the production-ready application.

**GCP Cloud Run**: Upon a successful build, the latest version of the application is automatically deployed to GCP Cloud Run. Cloud Run is a fully managed compute platform that automatically scales the application in response to incoming requests, and scales down when the requests stop.

#### Deployment Flow:

1. **Push Code**: Developers push their code updates to the GitHub repository.
2. **Trigger Build**: The push triggers a Cloud Build process that runs the configured build steps and tests.
3. **Deploy to Cloud Run**: If the build and tests are successful, the new build is automatically deployed to Cloud Run, which handles the serving of the application to users.

This automated pipeline ensures that Jempol AI is always running the most stable and up-to-date version of the application, with minimal manual intervention, allowing the team to focus on feature development and enhancements.

### Getting Your Deployment Set Up

To set up your own instance of the Jempol AI CI/CD pipeline:

1. Fork the Jempol AI GitHub repository to your GitHub account.
2. Connect your GitHub repository to GCP Cloud Build, granting it permission to access the repository.
3. Configure build triggers in GCP Cloud Build to execute upon code pushes to specific branches or tags in your GitHub repository.
4. Set up a GCP Cloud Run service to receive the built images and deploy them.

For detailed instructions on how to configure each step, refer to the GCP documentation on Cloud Build and Cloud Run, and the GitHub documentation for repository setup and push events.



## Reference

To learn more about tech stack and documentation, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Vertex AI SDK for Node.js quickstart](https://cloud.google.com/nodejs/docs/reference/vertexai/latest) - The Vertex AI SDK for Node.js lets you use the Vertex AI Gemini API to build AI-powered features and applications.
- [Imagen on Vertex AI | AI Image Generator ](https://cloud.google.com/vertex-ai/generative-ai/docs/image/overview) - Imagen on Vertex AI brings Google's state of the art image generative AI capabilities to application developers
- [Shadcn/UI](https://ui.shadcn.com/docs) - Design components that you can copy and paste into your apps
- [Tailwind CSS](https://tailwindcss.com/docs/guides/nextjs) - Setting up Tailwind CSS in a Next.js project.



