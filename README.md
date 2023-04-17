# Food Ordering App

## Description

This food delivery app was created using the MERN stack and allows users to easily order fresh food items. Users can log in and add items to their cart. The app is built using Vite and uses an .env file to store environment variables such as API keys.

## Live Link

[https://jeff-food-delivery-app.vercel.app/](https://jeff-food-delivery-app.vercel.app/)

## How to Run the Project

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies by running `npm install`.
4. Create a `.env` file in the root directory of the project and add the following environment variables:

````
MONGODB_URL=<your-mongodb-url>
VITE_API_BASE_URL=http://127.0.0.1:3000
````

Note that you'll need to replace <your-mongodb-url> with the URL for your MongoDB database. Also, make sure to update the VITE_API_BASE_URL value to match the URL for your API server.

5. Run `npm run dev` to start the development server.
6. Open your browser and navigate to `http://localhost:5173` to view the app.

## Features

### User authentication: Users can create accounts and log in to the app.

<img width="700" alt="User authentication demo" src="./client/src/assets/demo1.gif">

### Add to Cart: Users can add food items to their cart 

<img width="700" alt="Add to Cart demo" src="./client/src/assets/demo2.gif">

### Responsive design: The app is designed to be used on desktop and mobile devices.

<img width="700" alt="Responsive design demo" src="./client/src/assets/demo3.gif">

## Technologies Used

- React
- NodeJS
- ExpressJS
- MongoDB
- TailwindCSS
- REST API
