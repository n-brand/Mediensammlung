import { movies } from "./movies.js"

const grid = document.getElementById("moviesGrid");

movies.forEach(movie => {
    const card = document.createElement("article");

    card.className = "movie-card";

    card.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <div class="movie-content">
            <h2 class="movie-title">${movie.title}</h2>

            <div class="movie-meta">
                Erscheinungsjahr: ${movie.year}
            </div>

            <p class="movie-description">
                ${movie.description}
            </p>

            <a
                href="${movie.netflixUrl}"
                target="_blank"
                rel="noopener noreferrer"
                class="netflix-btn"
            >
                Auf IMDb ansehen
            </a>
        </div>
    `;

    grid.appendChild(card);
});