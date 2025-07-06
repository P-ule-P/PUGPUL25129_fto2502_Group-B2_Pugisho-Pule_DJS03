import React from "react";
import { formatTimeAgo } from "../utils/time";
import { mapGenreIdsToNames } from "../utils/genreUtils";

/**
 * @component PodcastCard
 * @param {Object} props
 * @param {Object} props.data - Podcast data
 * @param {Array} props.genres - Full genre list
 * @param {Function} props.onClick - Click handler
 */
export function PodcastCard({ data, genres, onClick }) {
  const genreNames = mapGenreIdsToNames(data.genres, genres);

  return (
    <div className="card" onClick={onClick}>
      <img src={data.image} alt={data.title} className="cover" />
      <h3>{data.title}</h3>
      <p>
        {data.seasons} season{data.seasons !== 1 ? "s" : ""}
      </p>
      <div className="tags">
        {genreNames.map((name) => (
          <span key={name} className="tag">
            {name}
          </span>
        ))}
      </div>
      <p className="meta">{formatTimeAgo(data.updated)}</p>
    </div>
  );
}
