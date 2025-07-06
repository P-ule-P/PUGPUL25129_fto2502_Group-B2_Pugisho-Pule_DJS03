/**
 * Maps an array of genre IDs or titles to their corresponding genre names.
 * - Ignores the placeholder value "All"
 * - Supports both numeric IDs and string genre titles
 *
 * @param {(number|string)[]} genreIds - List of genre IDs or genre titles from podcast data
 * @param {{ id: number, title: string }[]} allGenres - Array of available genre objects to map from
 * @returns {string[]} Array of genre names matched from the provided genre data
 */
export function mapGenreIdsToNames(genreIds, allGenres) {
  return genreIds
    .filter((idOrTitle) => idOrTitle !== "All") // 🧹 Remove "All"
    .map((idOrTitle) => {
      if (typeof idOrTitle === "number") {
        const match = allGenres.find((g) => g.id === idOrTitle);
        return match?.title || "Unknown";
      } else if (typeof idOrTitle === "string") {
        const match = allGenres.find(
          (g) => g.title.toLowerCase() === idOrTitle.toLowerCase()
        );
        return match?.title || idOrTitle;
      }
      return "Unknown";
    })
    .filter(Boolean);
}
