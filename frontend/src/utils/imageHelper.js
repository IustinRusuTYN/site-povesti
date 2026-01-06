// src/utils/imageHelper.js
import story1 from "../assets/images/story1.png";
import story2 from "../assets/images/story2.png";
import story3 from "../assets/images/story3.png";
import story4 from "../assets/images/story4.png";
import story5 from "../assets/images/story5.png";
import story6 from "../assets/images/story6.png";
import story7 from "../assets/images/story7.png";
import story8 from "../assets/images/story8.png";
import story9 from "../assets/images/story9.png";
import story10 from "../assets/images/story10.png";
import story11 from "../assets/images/story11.png";
import story12 from "../assets/images/story12.png";
import story13 from "../assets/images/story13.png";
import story14 from "../assets/images/story14.png";

// Map-ul de imagini bazat pe numele fișierului
const imageMap = {
  "story1.png": story1,
  "story2.png": story2,
  "story3.png": story3,
  "story4.png": story4,
  "story5.png": story5,
  "story6.png": story6,
  "story7.png": story7,
  "story8.png": story8,
  "story9.png": story9,
  "story10.png": story10,
  "story11.png": story11,
  "story12.png": story12,
  "story13.png": story13,
  "story14.png": story14,
};

/**
 * Obține imaginea locală bazat pe URL-ul din Supabase
 * @param {string} imageUrl - URL din baza de date (ex: "/images/story1.png")
 * @returns {string} - Import-ul real al imaginii
 */
export function getStoryImage(imageUrl) {
  if (!imageUrl) return null;

  // Extrage numele fișierului din path
  const filename = imageUrl.split("/").pop();

  // Returnează imaginea din map sau null
  return imageMap[filename] || null;
}
