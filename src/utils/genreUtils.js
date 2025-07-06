/**
 * Maps genre IDs to names using the local genre list
 * @param {number[]} genreIds
 * @param {Array} allGenres
 * @returns {string[]}
 */
export function mapGenreIdsToNames(genreIds, allGenres) {
  return genreIds.map((id) => {
    const match = allGenres.find((g) => g.id === id);
    return match ? match.title : "Unknown";
  });
}
