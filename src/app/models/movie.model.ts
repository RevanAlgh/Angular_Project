export interface Movie {
    Title: string;        // The title of the movie
    Year: string;         // The year the movie was released
    Rated: string;        // The movie's rating (e.g., PG, R)
    Released: string;     // Release date of the movie
    Runtime: string;      // Duration of the movie
    Genre: string;        // Genre of the movie (e.g., Action, Comedy)
    Director: string;     // Director of the movie
    Writer: string;       // Writer of the movie
    Actors: string;       // Main actors in the movie
    Plot: string;         // Brief summary of the movie
    Language: string;     // Language of the movie
    Country: string;      // Country of production
    Awards: string;       // Awards received by the movie
    Poster: string;       // URL to the movie poster
    Ratings: Rating[];    // Array of rating objects
    Metascore: string;    // Metascore rating
    imdbRating: string;   // IMDb rating
    imdbVotes: string;    // Number of votes on IMDb
    imdbID: string;       // Unique ID for IMDb
    Type: string;         // Type of media (e.g., movie, series)
    totalSeasons?: string; // Total seasons if it is a series
  }
  
  // Rating interface for the Ratings array
  export interface Rating {
    Source: string;       // Source of the rating (e.g., IMDb, Rotten Tomatoes)
    Value: string;        // The rating value
  }
  