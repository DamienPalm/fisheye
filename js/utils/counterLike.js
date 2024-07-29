export function counterLikes(element) {
  return element.reduce((total, media) => total + (media.likes || 0), 0);
}
