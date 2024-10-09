import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = 'f5b1b719'; 
  private baseUrl = 'https://www.omdbapi.com/';
  

  constructor() {}

  // Search movies using fetch
  async searchMovies(title: string, year?: string, genre?: string, language?: string): Promise<any> {
    let query = `${this.baseUrl}?s=${title}&apikey=${this.apiKey}`;
  
    if (year) {
      query += `&y=${year}`;
    }
    if (genre) {
      query += `&genre=${genre}`;
    }
    if (language) {
      query += `&language=${language}`;
    }
  
    try {
      const response = await fetch(query);
      if (!response.ok) {
        throw new Error('Error fetching movies');
      }
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }  

  // Get movie details using fetch
  async getMovieDetails(id: string): Promise<any> {
    try {
      const response = await fetch(`${this.baseUrl}?i=${id}&apikey=${this.apiKey}`);
      if (!response.ok) {
        throw new Error('Error fetching movie details');
      }
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
}
