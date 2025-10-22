# Rate Your Landlord

This is a web application that allows tenants to rate their landlords. It is built with the MERN stack (MongoDB, Express, React, Node.js).

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

You will need to have the following software installed on your machine:

*   [Node.js](https://nodejs.org/) (which includes npm)
*   [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username_/Project-Name.git
    ```
2.  Install backend dependencies
    ```sh
    npm install --prefix server
    ```
3.  Install frontend dependencies
    ```sh
    npm install --prefix client
    ```

### Running the Application

1.  **Start the backend server**
    ```sh
    npm start --prefix server
    ```
    The server will start on `http://localhost:5000`.

2.  **Start the frontend server**
    ```sh
    npm start --prefix client
    ```
    The application will open in your browser at `http://localhost:3000`.

### Running Tests

1.  **Run backend tests**
    ```sh
    NODE_ENV=test npm test --prefix server
    ```

2.  **Run frontend tests**
    ```sh
    CI=true npm test --prefix client
    ```
