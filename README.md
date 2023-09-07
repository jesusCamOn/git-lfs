# 8thwall React App

This is a [React](https://reactjs.org/) app built with [Vite](https://vitejs.dev/).

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

## Getting Started

1. Clone this repository.
2. Install dependencies by running `npm i` in the project root directory.
3. Start the development server by running `npm run dev`.
4. Open your browser and navigate to `http://localhost:5173`.

## Building for Production

To create an optimized production build, run `npm build`. The built files will be in the `dist` directory.

## Deploy experience

This repository uses `github actions` to deploy it in AWS S3 
To trigger it, you need set `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` github action's secrets. This take `package.json` name field to set url path. `main` and `dev` are the connected branchs.

## License

This project is licensed under the MIT License.