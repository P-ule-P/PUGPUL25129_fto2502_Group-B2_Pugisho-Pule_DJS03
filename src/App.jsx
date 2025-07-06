import React, { useEffect, useState } from "react";
import { PodcastCard } from "./components/PodcastCard";
import { Modal } from "./components/Modal";
import { genres } from "./data/genres";
import "./App.css";

/**
 * Root application component that displays a list of podcasts,
 * supports loading state, error handling, modal preview, and filters.
 *
 * @component
 * @returns {JSX.Element}
 */
export default function App() {
  const [podcasts, setPodcasts] = useState([]); // List of all enriched podcasts
  const [loading, setLoading] = useState(true); // Loading state for async fetch
  const [error, setError] = useState(false); // Error state if fetching fails
  const [selected, setSelected] = useState(null); // Podcast selected for modal

  // Fetch podcast list and their full details on mount
  useEffect(() => {
    /**
     * Fetches base podcast list, then fetches each podcast's full data,
     * combining both into an enriched podcast object.
     */
    async function fetchAll() {
      try {
        const baseRes = await fetch("https://podcast-api.netlify.app/");
        const baseData = await baseRes.json();

        const enriched = await Promise.all(
          baseData.map(async (podcast) => {
            try {
              const res = await fetch(
                `https://podcast-api.netlify.app/id/${podcast.id}`
              );
              const full = await res.json();
              return {
                ...podcast,
                description: full.description || "",
                genres: full.genres || podcast.genres || [],
                seasonDetails: full.seasons || [],
              };
            } catch (err) {
              console.warn("Detail fetch failed for ID", podcast.id);
              return {
                ...podcast,
                description: "",
                genres: podcast.genres || [],
                seasonDetails: [],
              };
            }
          })
        );

        setPodcasts(enriched);
      } catch (err) {
        setError(true);
        console.error("Fetching failed", err);
      } finally {
        setLoading(false);
      }
    }

    fetchAll();
  }, []);

  // Render various app states
  if (loading) return <div className="state">Loading podcasts...</div>;
  if (error) return <div className="state error">Failed to load podcasts.</div>;
  if (!podcasts.length) return <div className="state">No podcasts found.</div>;

  return (
    <main className="app">
      <header className="app-header">
        <div className="logo-title">
          <img
            src="/assets/logo.png"
            alt="Podcast Logo"
            className="logo-icon"
          />
          <h1>PodcastApp</h1>
        </div>
        <div className="header-controls">
          <img
            src="/assets/search.png"
            alt="Search"
            className="icon search-icon"
          />
          <img src="/assets/user.png" alt="User" className="icon user-icon" />
        </div>
      </header>

      <div className="filters">
        <label htmlFor="genreFilter" className="filter-label">
          Filter by:
        </label>
        <select id="genreFilter" className="filter-select">
          <option value="all">All Genres</option>
          {genres.map((g) => (
            <option key={g.id} value={g.id}>
              {g.title}
            </option>
          ))}
        </select>

        <select id="sortFilter" className="filter-select">
          <option value="recent">Recently Updated</option>
          <option value="popular">Most Popular</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      <div className="grid">
        {podcasts.map((podcast) => (
          <PodcastCard
            key={podcast.id}
            data={podcast}
            genres={genres}
            onClick={() => setSelected(podcast)}
          />
        ))}
      </div>

      {selected && (
        <Modal podcast={selected} onClose={() => setSelected(null)} />
      )}
    </main>
  );
}
