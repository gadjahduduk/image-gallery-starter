// Mock image data for gallery
const mockImageData = {
  resources: Array.from({ length: 50 }, (_, i) => ({
    id: i,
    height: "480",
    width: "720", 
    public_id: `image-${i}`,
    format: 'jpg'
  }))
};

export default function getResults() {
  return Promise.resolve(mockImageData);
}
