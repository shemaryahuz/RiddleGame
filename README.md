# Riddle Game

A Node.js/JavaScript application for playing and managing riddles, designed with modularity and clean separation of concerns in mind.  
**Note:** This repository is a work in progress and its structure, features, and logic may change or update in the future.

---

## Table of Contents

- [Directory Structure](#directory-structure)
- [Application Architecture](#application-architecture)
- [Application Flow](#application-flow)
- [Author](#author)

---

## Directory Structure

```
.
├── server/
│   ├── server.js
│   ├── data/
│   │   ├── riddles.txt
│   │   └── players.txt
│   └── src/
│       ├── routes/
│       │   ├── routesConfig.js
│       │   ├── riddleRouter.js
│       │   └── playerRouter.js (not implemented yet)
│       ├── controllers/
│       │   ├── riddleControllers.js
│       │   └── playerControllers.js (not implemented yet)
│       ├── services/
│       │   ├── riddleService.js
│       │   └── playerService.js (not implemented yet)
│       ├── utils/
│       │   └── riddleUtils.js
│       └── dal/
│           ├── riddleDAL.js
│           └── playerDAL.js (not implemented yet)
└── client/
    ├── app.js
    ├── ui/
    │   ├── mainManu.js
    │   ├── riddleDashboard.js
    │   └── playerDashboard.js (not implemented yet)
    ├── controllers/
    │   ├── gameController.js
    │   ├── riddleController.js
    │   └── playerController.js (not implemented yet)
    ├── models/
    │   ├── Riddle.js
    │   ├── ChioceRiddle.js
    │   └── Player.js
    └── services/
        ├── riddleService.js
        └── playerService.js
```

---

## Application Architecture

### Server Side (`server/`)

- **server.js**  
  Entry point of the backend server, built using the `express` framework.

- **data/**
  - `riddles.txt` – Stores an array of JSON string objects representing riddles.
  - `players.txt` – Placeholder for player data (feature not yet implemented).

- **src/routes/**
  - `routesConfig.js` – Registers and configures all API routes.
  - `riddleRouter.js` – Defines endpoints under `/riddles` for riddle operations.
  - `playerRouter.js` – Placeholder for player endpoints (not yet implemented).

- **src/controllers/**
  - `riddleControllers.js` – Handles the logic for incoming riddle-related requests and responses.
  - `playerControllers.js` – Placeholder for player-related logic (not yet implemented).

- **src/services/**
  - `riddleService.js` – Contains business logic for riddles CRUD operations.
  - `playerService.js` – Placeholder for player-related logic (not yet implemented).

- **src/utils/**
  - `riddleUtils.js` – Utility functions for riddles, such as unique ID generation.

- **src/dal/**
  - `riddleDAL.js` – Handles data access logic for reading/writing riddles from/to `riddles.txt`.
  - `playerDAL.js` – Placeholder for player data access (not yet implemented).

---

### Client Side (`client/`)

- **app.js**  
  Entry point for the riddle game application.

- **ui/**
  - `mainManu.js` – Implements the main loop and menu for navigating the app.
  - `riddleDashboard.js` – Menu and UI logic for managing riddles (CRUD operations).
  - `playerDashboard.js` – Placeholder for player management UI (not yet implemented).

- **controllers/**
  - `gameController.js` – Manages game flow, including level selection and session timing.
  - `riddleController.js` – Handles client-side logic for riddles CRUD.
  - `playerController.js` – Placeholder for player management logic (not yet implemented).

- **models/**
  - `Riddle.js` – Class representing a riddle entity.
  - `ChioceRiddle.js` – Class for multiple choice riddles, extends `Riddle`.
  - `Player.js` – Class representing a player, with details and stats.

- **services/**
  - `riddleService.js` – Handles API requests for riddles CRUD.
  - `playerService.js` – Methods for managing player data.

---

## Application Flow

1. **Server Startup**  
   The server runs locally (localhost), serving endpoints for riddles (and, in the future, players).

2. **Main Menu Loop**  
   The client application presents the user with a main menu:
   ```
   0. Exit
   1. Play the game
   2. View riddles dashboard
   3. View players dashboard (not yet implemented)
   ```
   The menu repeats after each action until the user chooses to exit.

3. **Game Play**
   - The application fetches all riddles from the server.
   - The user selects a difficulty level; riddles are filtered accordingly.
   - The game is played in a loop, tracking time and user stats.

4. **Riddle Dashboard**
   - The user can perform CRUD operations on riddles via a dedicated dashboard menu.

5. **Players Dashboard**
   - Feature planned, not yet implemented.

---

## Work in Progress

> **This project is currently in progress.**  
> Features and directory structure may change or expand as development continues.

---

## Author

[Shemaryahu Zalmanov](https://github.com/shemaryahuz)
