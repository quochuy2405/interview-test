# Interview Test

## Description

This project is a web application built with React, following the **Atomic Design** methodology for organizing the code structure, using **React Router Dom** for routing, **Tailwind CSS** for styling, and **Vite** for fast build and development. **TypeScript** is used for better type safety and clarity in the codebase.

## Solution

The project applies the following principles to ensure optimization and maintainability:

- **Atomic Design**: Organizes the UI components into basic building blocks (atoms, molecules, organisms, templates, and pages), making it easier to maintain and scale the codebase.
- **React Router Dom**: Manages routes in the app, allowing flexible navigation between pages.
- **Tailwind CSS**: A utility-first CSS framework that simplifies the process of building responsive UIs.
- **Vite**: Uses Vite as the build tool to enhance development and build times.
- **TypeScript**: Ensures type safety and reduces the chances of runtime errors.

## Installation & Usage

### Step 1: Install Dependencies

First, install the necessary dependencies by running the following command:

```bash
npm install
```

### Step 2: Run the Project in Development Mode

Once the dependencies are installed, you can start the development server by running:
```bash
npm run dev
```

### Step 3: Build the Project for Production

To build the project for production, use the following command:
```bash
npm run build
```
This will compile the TypeScript code and bundle the application using Vite. The output will be saved in the dist folder.


### Step 4: Preview the Built Project

To preview the production build, run:
```bash
npm run preview
```
This will start a server to preview the production-ready application.

## Dependencies and Development Tools

### Main Dependencies

- **React**: A JavaScript library for building user interfaces.
- **React Router Dom**: A library for managing routing in React applications.
- **Tailwind CSS**: A utility-first CSS framework for building custom designs and responsive UIs.
- **Vite**: A fast and efficient build tool for modern web development, optimized for speed and experience.
- **TypeScript**: A superset of JavaScript that provides type safety, helping prevent errors during development and improving code clarity.

### Development Dependencies

- **ESLint**: A tool for identifying and fixing issues in JavaScript/TypeScript code, ensuring consistent code style and preventing potential bugs.
- **TypeScript ESLint**: ESLint plugins specifically designed for TypeScript code to maintain coding standards and prevent common mistakes.
- **PostCSS and Autoprefixer**: Tools used for processing and optimizing CSS, ensuring compatibility with different browsers.
- **clsx**: A utility for conditionally combining class names, simplifying dynamic class assignment in JSX and React components.

## Reasons for Choosing These Tools

- **Vite**: Known for its fast build times and efficient hot module replacement (HMR), Vite makes development smoother by allowing instant feedback and improving overall developer experience.
- **Tailwind CSS**: A utility-first CSS framework that allows for rapid UI development, making it easier to design responsive and customizable layouts without writing custom CSS. It also promotes reusability and easier maintenance.
- **TypeScript**: By providing static type checking and improved tooling, TypeScript reduces the risk of runtime errors, makes the codebase more predictable, and improves code readability and maintainability.
- **Atomic Design**: Organizing components into small, reusable pieces (atoms, molecules, organisms, templates, and pages) leads to a scalable and maintainable architecture. It helps manage complex UIs in large applications and promotes reusability.
