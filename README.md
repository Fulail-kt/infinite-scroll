# Infinite Scroll Task with YouTube API

This project implements an infinite scroll feature using the YouTube API to display videos based on a search query.

## Table of Contents

- [Infinite Scroll Task with YouTube API](#infinite-scroll-task-with-youtube-api)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)

## Description

This project is a React application that fetches videos from YouTube based on a search query. It implements an infinite scroll feature, allowing users to load more videos as they scroll down the page. The application utilizes the YouTube Data API v3 for fetching videos and Axios for making HTTP requests.

## Features

- Displays videos from YouTube based on a search query.
- Implements infinite scroll to load more videos as the user scrolls down.
- Utilizes Nextjs for frontend development.
- Uses Axios for making HTTP requests.
- Uses React Spinners for loading animation.

## Technologies Used

- Next.js
- Axios
- React Spinners

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Fulail-kt/infinite-scroll

   cd inifinite-scroll

2. Install Deppendencies

   npm install

3. Set .env.local

  NEXT_PUBLIC_API_KEY="Your Project Youtube API Secret Key"

3. Start the development server
  
   npm run dev

## Usage

Enter a search query in the search input field and press the "Search" button to fetch related videos.
Scroll down to load more videos automatically with the infinite scroll feature.
Videos are displayed with their thumbnails and titles.
