# Riddle Game

A full-stack Node.js application for playing and managing a riddle game, featuring a server-side API connected to MongoDB and Supabase, and a command-line interface (CLI) client.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Directory Structure](#directory-structure)
- [Application Architecture](#application-architecture)
  - [Server Side (`server/`)](#server-side-server)
  - [Client Side (`client/`)](#client-side-client)
- [API Documentation](#api-documentation)
  - [Riddles API](#riddles-api)
  - [Players API](#players-api)
- [Application Flow](#application-flow)
- [Author](#author)

---

## Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

-   [Node.js](https://nodejs.org/) installed
-   Access to a [MongoDB](https://www.mongodb.com/) database
-   Access to a [Supabase](https://supabase.com/) project for player data

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/shemaryahuz/RiddleGame.git
    cd RiddleGame
    ```

2.  **Set up the server:**
    -   Navigate to the server directory:
        ```sh
        cd server
        ```
    -   Install dependencies:
        ```sh
        npm install
        ```
    -   Create a `.env` file in the `server` directory and add your database connection details:
        ```env
        MONGODB_URI=<YOUR_MONGODB_CONNECTION_STRING>
        PUBLIC_SUPABASE_URL=<YOUR_SUPABASE_PROJECT_URL>
        SECRET_SUPABASE_ANON_KEY=<YOUR_SUPABASE_ANON_KEY>
        ```

3.  **Set up the client:**
    -   Navigate to the client directory from the root:
        ```sh
        cd client
        ```
    -   Install dependencies:
        ```sh
        npm install
        ```

4.  **Run the application:**
    -   First, start the server. In the `server` directory, run:
        ```sh
        node server.js
        ```
        The server will be running on `http://localhost:3000`.
    -   Then, run the client. In a new terminal, from the `client` directory, run:
        ```sh
        node app.js
        ```

---

## Directory Structure

```
RiddleGame/
├── server/
│   ├── database/
│   │   ├── riddleDB.js
│   │   └── playerDB.js
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── riddleControllers.js
│   │   │   └── playerControllers.js
│   │   ├── dal/
│   │   │   ├── riddleDAL.js
│   │   │   └── playerDAL.js
│   │   ├── middlewares/
│   │   │   ├── riddleMiddlewares.js
│   │   │   └── playerMiddlewares.js
│   │   └── routes/
│   │       ├── configRoutes.js
│   │       ├── riddleRouter.js
│   │       └── playerRouter.js
│   ├── package.json
│   └── server.js
└── client/
    ├── handlers/
    │   ├── gameHandler.js
    │   ├── playerHandler.js
    │   └── riddleHandler.js
    ├── models/
    │   ├── Riddle.js
    │   ├── ChoiceRiddle.js
    │   └── Player.js
    ├── services/
    │   ├── riddleService.js
    │   └── playerService.js
    ├── ui/
    │   ├── mainMenu.js
    │   ├── riddleDashboard.js
    │   └── playerDashboard.js
    ├── app.js
    └── package.json
```

---

## Application Architecture

### Server Side (`server/`)

-   **server.js**: The entry point for the backend server, built using the `express` framework. It initializes the server and configures the API routes.
-   **database/**:
    -   `riddleDB.js`: Establishes the connection to the MongoDB database for riddles.
    -   `playerDB.js`: Configures the connection to the Supabase database for players.
-   **src/routes/**:
    -   `configRoutes.js`: Central configuration file that registers and maps all API routes.
    -   `riddleRouter.js`: Defines all API endpoints under the `/riddles` route.
    -   `playerRouter.js`: Defines all API endpoints under the `/players` route.
-   **src/controllers/**:
    -   `riddleControllers.js`: Handles the logic for incoming riddle-related requests and constructs responses.
    -   `playerControllers.js`: Manages the logic for incoming player-related requests and responses.
-   **src/middlewares/**:
    -   `riddleMiddlewares.js`: Contains middleware functions for validating and handling errors in riddle-related requests.
    -   `playerMiddlewares.js`: Contains middleware functions for player route request validation and error handling.
-   **src/dal/** (Data Access Layer):
    -   `riddleDAL.js`: Implements the CRUD (Create, Read, Update, Delete) operations for riddle data in the MongoDB database.
    -   `playerDAL.js`: Implements the CRUD operations for player data in the Supabase database.

---

### Client Side (`client/`)

-   **app.js**: The main entry point for the client-side command-line application. It starts the main menu.
-   **ui/**:
    -   `mainMenu.js`: Implements the main application loop and menu for navigating the app.
    -   `riddleDashboard.js`: Provides the menu and UI logic for managing riddles (CRUD operations).
    -   `playerDashboard.js`: Provides the menu and UI logic for managing players.
-   **handlers/**:
    -   `gameHandler.js`: Manages the core game flow, including level selection, displaying riddles, and updating player scores.
    -   `riddleHandler.js`: Contains functions for displaying and performing CRUD operations on riddles from the UI.
    -   `playerHandler.js`: Contains functions for displaying and performing CRUD operations on players from the UI.
-   **models/**:
    -   `Riddle.js`: A class representing a standard riddle entity.
    -   `ChoiceRiddle.js`: A class for multiple-choice riddles, which extends the base `Riddle` class.
    -   `Player.js`: A class representing a player, containing their details and game statistics.
-   **services/**:
    -   `riddleService.js`: Handles all API requests to the server's `/riddles` endpoints.
    -   `playerService.js`: Handles all API requests to the server's `/players` endpoints.

---

## API Documentation

### Riddles API

-   `GET /riddles`: Fetches all riddles from the database.
-   `GET /riddles/:riddleId`: Fetches a single riddle by its unique ID.
-   `POST /riddles/addRiddle`: Adds a new riddle to the database.
-   `PUT /riddles/:riddleId`: Updates an existing riddle by its ID.
-   `DELETE /riddles/:riddleId`: Deletes a riddle by its ID.

### Players API

-   `GET /players`: Fetches all players from the database.
-   `GET /players/:username`: Fetches a single player by their username.
-   `POST /players/addPlayer`: Adds a new player to the database.
-   `PUT /players/updateScores`: Updates a player's score and best time.
-   `PUT /players/updateUsername/:oldName`: Updates a player's username.
-   `DELETE /players/deletePlayer/:username`: Deletes a player by their username.

---

## Application Flow

1.  **Server Startup**: The server runs locally on `localhost:3000`, serving API endpoints for riddle and player data management.

2.  **Main Menu Loop**: The client application presents the user with the main menu:
    ```
    0. Exit
    1. Play the game
    2. View riddles dashboard
    3. View players dashboard
    ```
    The menu is displayed repeatedly after each action is completed until the user chooses to exit.

3.  **Game Play**:
    -   The game prompts for a player's username. It fetches the player from the database or creates a new one if they don't exist.
    -   The user selects a difficulty level, and the application fetches and filters the riddles accordingly.
    -   The game proceeds in a timed loop, tracking the user's score.
    -   At the end of a level, the player's scores are updated in the database.

4.  **Riddle Dashboard**: The user can perform all CRUD operations (Create, Read, Update, Delete) on riddles through a dedicated dashboard menu.

5.  **Players Dashboard**: The user can view player data and manage players through its dedicated menu.

---

## Author

[Shemaryahu Zalmanov](https://github.com/shemaryahuz)