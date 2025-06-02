import type { ImageProps } from "./types";

export default function getBase64ImageUrl(image: ImageProps): string {
  // Simple gray SVG blur placeholder
  const svg = `
    <svg width="720" height="480" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
    </svg>
  `;
  
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}
