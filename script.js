const apiKey = '16e242a904137ff97ea90fc0bd09b0b4'; // Replace with your actual API Read Access Token
const apiUrl = 'https://api.themoviedb.org/3';
const discoverEndpoint = `${apiUrl}/discover/movie?api_key=${apiKey}`;


const movieContainer = document.getElementById('movie-container');

async function fetchMovies(url, container) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const movieList = data.results || []; // Ensure movieList is defined

    container.innerHTML = '';

    movieList.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');

      const moviePoster = document.createElement('img');
      moviePoster.classList.add('movie-poster');
      moviePoster.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
      moviePoster.alt = movie.title + ' Poster';

      const movieTitle = document.createElement('h3');
      movieTitle.classList.add('movie-title');
      movieTitle.textContent = movie.title;

      movieCard.appendChild(moviePoster);
      movieCard.appendChild(movieTitle);

      container.appendChild(movieCard);
    });
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fetchMovies(discoverEndpoint, movieContainer);
});
