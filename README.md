
# Subscription Manager

A simple and extensible Node.js app for managing user subscriptions. Built with Express and powered by modern tools like `dotenv`, `nodemon`, and ESLint for streamlined development and maintainability.

## Features

- User-friendly structure with Express.js
- Logging with `morgan` and debugging via `debug`
- Environment-based configuration using `dotenv`
- Auto-reload during development with `nodemon`
- Linting using ESLint for consistent code quality

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express
- **Logging:** Morgan
- **Debugging:** Debug
- **Env Management:** Dotenv
- **Dev Tools:** Nodemon, ESLint

## Project Structure

subscription-manager/
│
├── app.js # Main application file
├── .env # Environment variables (not committed)
├── package.json # Project metadata and scripts
├── /routes # Route handlers (if applicable)
└── /middlewares # Custom middleware (if applicable)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/111morris/subscription-manager.git
   cd subscription-manager
   ```

Install dependencies:

```
npm install

```

Create a .env file:

```PORT=3000
PORT=5000
```

 Development
To run the app in development mode with automatic restarts:

```
npm run dev
```

Production
To run the app in production mode:

```
npm start
```

Linting
Check your code for issues with ESLint:

```
npx eslint .
```


 Scripts
Command	Description
npm start	Run app with Node
npm run dev	Run app with Nodemon
npx eslint .	Run ESLint on all files

 Contributing
Feel free to fork the repo and submit PRs. Contributions are welcome!

 License
This project is open-source and available under the MIT License.
