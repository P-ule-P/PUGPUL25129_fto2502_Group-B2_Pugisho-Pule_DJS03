import React from "react";
import { genres } from "../data/genres";

/**
 * Modal component for displaying detailed podcast information.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {Object} props.podcast - The podcast object containing metadata like title, image, genres, description, and number of seasons.
 * @param {string} props.podcast.title - Title of the podcast.
 * @param {string} props.podcast.image - Image URL for the podcast cover.
 * @param {string} props.podcast.description - Description text for the podcast.
 * @param {Array<number|string>} props.podcast.genres - An array of genre IDs (numbers) or names (strings).
 * @param {string|Date} props.podcast.updated - ISO date string for last updated date.
 * @param {number|string} props.podcast.seasons - Number of seasons in the podcast.
 * @param {Function} props.onClose - Callback function to close the modal.
 * @returns {JSX.Element} Modal element displaying full podcast information.
 */
export function Modal({ podcast, onClose }) {
  /**
   * Maps genre IDs or names to human-readable genre titles.
   * Falls back to "Unknown" if no match is found.
   */
  const genreNames = (podcast.genres || [])
    .map((genre) => {
      if (typeof genre === "number") {
        const match = genres.find((g) => g.id === genre);
        return match?.title || "Unknown";
      }
      if (typeof genre === "string") {
        const match = genres.find(
          (g) => g.title.toLowerCase() === genre.toLowerCase()
        );
        return match?.title || genre;
      }
      return "Unknown";
    })
    .filter(Boolean);

  return (
    <div id="podcastModal" className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" id="closeModal" onClick={onClose}>
          &times;
        </button>
        <h2 id="modalTitle">{podcast.title}</h2>

        <div className="modal-header">
          <img
            id="modalImage"
            src={podcast.image}
            alt="Large Cover"
            className="modal-image"
          />
          <div className="modal-info">
            <section className="modal-section">
              <h3>Description</h3>
              <p id="modalDescription" className="modal-description">
                {podcast.description}
              </p>
            </section>

            <section className="modal-section">
              <h3>Genres</h3>
              <div className="genres" id="modalGenres">
                {genreNames.map((g, i) => (
                  <span className="tag" key={i}>
                    {g}
                  </span>
                ))}
              </div>
            </section>

            <p className="updated-date" id="modalUpdated">
              📅 Last updated:{" "}
              {new Date(podcast.updated).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>

        <section className="modal-section">
          <h3>Seasons</h3>
          <div id="modalSeasons">
            {podcast.seasons &&
              Number(podcast.seasons) > 0 &&
              [...Array(Number(podcast.seasons))].map((_, i) => (
                <div key={i} className="season-row">
                  <strong>Season {i + 1}</strong>
                  <span className="episode-count">
                    {Math.floor(Math.random() * 11) + 6} episodes
                  </span>
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
