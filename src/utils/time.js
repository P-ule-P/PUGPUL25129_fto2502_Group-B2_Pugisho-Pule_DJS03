/**
 * Converts ISO timestamp to "Updated X time ago"
 * @param {string} isoDate
 * @returns {string}
 */
export function formatTimeAgo(isoDate) {
  const now = new Date();
  const past = new Date(isoDate);
  const diffMs = now - past;

  const sec = Math.floor(diffMs / 1000);
  const min = Math.floor(sec / 60);
  const hr = Math.floor(min / 60);
  const day = Math.floor(hr / 24);
  const wk = Math.floor(day / 7);
  const mo = Math.floor(day / 30);
  const yr = Math.floor(day / 365);

  if (yr) return `Updated ${yr} year${yr > 1 ? "s" : ""} ago`;
  if (mo) return `Updated ${mo} month${mo > 1 ? "s" : ""} ago`;
  if (wk) return `Updated ${wk} week${wk > 1 ? "s" : ""} ago`;
  if (day) return `Updated ${day} day${day > 1 ? "s" : ""} ago`;
  if (hr) return `Updated ${hr} hour${hr > 1 ? "s" : ""} ago`;
  if (min) return `Updated ${min} minute${min > 1 ? "s" : ""} ago`;
  return "Updated just now";
}
