// src/utils/imageHelper.js

/**
 * Pentru imagini puse în CRA public folder:
 * public/images/story1.png -> "/images/story1.png"
 */

export function publicImage(path) {
  // acceptă "story1.png", "/images/story1.png", "images/story1.png"
  if (!path) return null;

  const p = String(path);

  if (p.startsWith("http://") || p.startsWith("https://")) return p;

  if (p.startsWith("/images/")) return p;
  if (p.startsWith("images/")) return "/" + p;

  // dacă e doar numele fișierului
  if (!p.includes("/")) return `/images/${p}`;

  // fallback
  return p.startsWith("/") ? p : `/${p}`;
}

/**
 * Dacă ai povești care vin cu image_url din DB,
 * această funcție îți dă un src sigur pentru <img>.
 */
export function getStoryImageSrc(story) {
  const candidate =
    story?.image || story?.image_url || story?.imageUrl || story?.cover_url;

  return publicImage(candidate) || "/images/placeholder.png";
}
