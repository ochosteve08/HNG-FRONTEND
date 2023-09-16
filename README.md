
---

# MovieBox Web Application

## Objective

MovieBox is a movie discovery web application that allows users to search for movies, view their details, and save their favorite movies. It consumes data from the TMDB API.

## Features

### User Interface:

- Create a responsive and visually appealing user interface.
- Follow the design from this [Figma link](https://www.figma.com/file/tVfgoNfhYkQaUkh8LGqRab/MovieBox-(Community)?type=design&node-id=1220-324&mode=design&t=6998DWtjQrxz8mOf-0).
- List the top 10 movies on the homepage in a grid layout displaying their posters.
- Card component should display:
  - Movie Title
  - Release Date

### Movie Search:

- Implement a search feature allowing users to find movies by title.
- Display search results with movie posters, titles, and release dates.
- Show a loading indicator while fetching results.

### Movie Details:

- Navigate to `/movies/:id` (where `:id` is the `imdb_id`) to view the movie details page.
- The details page  display:
  - Title
  - Release Date (in UTC)
  - Runtime (in minutes)
  - Overview

### API Integration:

- Fetch movie data from the [TMDB API](https://www.themoviedb.org/).
- Specifically in this project, following API endpoint for fetching movie details: [Fetch movie details by ID](https://api.themoviedb.org/3/movie/{movie_id}).

### Error Handling:

- Display meaningful error messages to users in case of API failures or other issues.

Getting Started Locally

1. Clone the repository:

   ```
   git clone [https://github.com/ochosteve08/HNG-FRONTEND.git]
   ```
2. Navigate to the project directory:

   ```
   cd moviebox
   ```
3. Install the dependencies:

   ```
   npm install
   ```
4. Run the development server:

   ```
   npm run dev
   ```

Visit `http://localhost:5173` in your browser to see the application running.
