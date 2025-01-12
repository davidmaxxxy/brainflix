# BrainFlix Sprint 3

## Project Overview

BrainFlix is a video streaming platform that allows users to watch, upload, and interact with videos. In this Sprint, the goal was to build a **RESTful API** that handles the video data and to update the frontend to use this API instead of the previous mock API.

### Key Features

- **Video List**: Displays a list of all available videos.
- **Video Detail**: Allows users to view the details of a specific video.
- **Video Upload**: Users can upload a new video with a title, description, and an image (hardcoded URL).
- **API Integration**: Replaced the mock API with a real API that stores video data in a JSON file for persistence.

## Frontend Repository

- **GitHub Link (Frontend)**: [BrainFlix Frontend](https://github.com/davidmaxy1994/brainflix.git)

## Backend Repository

- **GitHub Link (Backend)**: [BrainFlix API](https://github.com/davidmaxy1994/david-maksymiuk-brainflix-api.git)

## Tools & Technologies

- **React**: Used for building the user interface and managing state.
- **React Router**: Provides multi-page functionality.
- **SASS**: For styling the application.
- **Axios**: For making API requests.
- **Node.js**: Used to build the API server.
- **JSON**: A simple file used to store video data for persistence.

## Functional Requirements

### API Server

The API server must handle the following endpoints:

1. **GET /videos**: Returns an array of all videos.
2. **GET /videos/:id**: Returns the details of a specific video by `id`.
3. **POST /videos**: Adds a new video with a title, description, and a hardcoded image URL. The video data should persist across server restarts and be stored in a JSON file.

#### API Details

- **Videos Data**: Videos are stored in a `data/videos.json` file.
- **Static Assets**: Images for the videos are served as static assets from the server.

### Video Upload Page

- **Functionality**: Users can upload a new video, which gets saved in the backend API.
- **Form Fields**: The form includes fields for the title and description. A hardcoded image URL will be used for the video thumbnail.
- **Persistence**: Data for videos must persist even if the server is restarted.

### API Persistence

- The API uses a JSON file (`data/videos.json`) to store the video data.
- The video data must persist even after the Node server is restarted.

## Visual Design Requirements

- The app should be **responsive** and resemble the design mockups.
- Feedback from previous sprints should be incorporated into the final design.
- **CSS Styling**: The app uses SASS with BEM principles, Flexbox for layout control, and includes SASS variables.

### Implementation Requirements

1. **React Components**: Multiple functional components were created to represent various parts of the app.
2. **React Router**: Used to handle routing across different pages.
3. **SASS**: Applied for styling and consistent design across the app.
4. **API Integration**: Integrated the new API with the frontend to manage video data.
5. **Static Assets**: Used provided assets for video thumbnails.

## Running the Project Locally

### Frontend (React Application)

1. Clone the frontend repository:

   ```bash
   git clone https://github.com/davidmaxy1994/brainflix.git

   ```

2. Navigate to the frontend directory:

``bash
Copy code
cd brainflix
Install the dependencies:

bash
Copy code
npm install

3. Run the application:

bash
Copy code
npm start
This will start the frontend server on http://localhost:3000.

### Backend (Node.js API)

1. Clone the backend repository:

Copy code
git clone https://github.com/davidmaxy1994/david-maksymiuk-brainflix-api.git

2. Navigate to the backend directory:

cd david-maksymiuk-brainflix-api

3. Install the dependencies:
   npm install

4. Start the backend server:

npm start
This will start the API server on http://localhost:8080.
