// Configuration for gallery images
export interface GalleryImage {
  id: number;
  src: string;
  alt?: string;
  title?: string;
}

// Method 1: Manual configuration (easy to control)
export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 0, src: "/img/xx1.jpg", alt: "Photo 1", title: "Lorem ipsum dolor sit 1" },
  { id: 1, src: "/img/xx2.png", alt: "Photo 2", title: "Lorem ipsum dolor sit 2" },
  { id: 2, src: "/img/xx3.png", alt: "Photo 3", title: "Lorem ipsum dolor sit 3" },
  { id: 3, src: "/img/xx4.png", alt: "Photo 4", title: "Lorem ipsum dolor sit 4" },
  { id: 4, src: "/img/photo5.png", alt: "Photo 5", title: "Lorem ipsum dolor sit 5" },
  { id: 5, src: "/img/photo6.png", alt: "Photo 6", title: "Ocean Waves and Seashells" },
  { id: 6, src: "/img/photo7.png", alt: "Photo 7", title: "Snowy Mountain Peak" },
  // Add as many as you need...
];

// Method 2: Auto-generate based on count (if your files follow a pattern)
export const generateGalleryImages = (count: number): GalleryImage[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    src: `/img/photo${i + 1}.png`,
    alt: `Photo ${i + 1}`,
    title: `Gallery Image ${i + 1}`
  }));
};

// Method 3: Mixed approach - some custom, some auto-generated
export const createGalleryConfig = () => {
  const customImages: GalleryImage[] = [
    { id: 0, src: "/img/hero-image.jpg", alt: "Hero Image", title: "Welcome to Our Gallery" },
    { id: 1, src: "/img/special-photo.png", alt: "Special Photo", title: "Featured Artwork Collection" },
    // Add your specific images here
  ];
  
  // Then add auto-generated ones starting from id 2
  const autoImages = Array.from({ length: 20 }, (_, i) => ({
    id: i + 2,
    src: `/img/photo${i + 1}.png`,
    alt: `Photo ${i + 1}`,
    title: `Gallery Photo ${i + 1}`
  }));
  
  return [...customImages, ...autoImages];
};

// Helper functions
export const getImageSource = (id: number): string => {
  const image = GALLERY_IMAGES.find(img => img.id === id);
  return image?.src || `https://placehold.co/720x480`;
};

export const getImageSourceLarge = (id: number): string => {
  const image = GALLERY_IMAGES.find(img => img.id === id);
  return image?.src || `https://placehold.co/1920x1280`;
};

export const getImageTitle = (id: number): string => {
  const image = GALLERY_IMAGES.find(img => img.id === id);
  return image?.title || `Image ${id + 1}`;
};

export const getImageAlt = (id: number): string => {
  const image = GALLERY_IMAGES.find(img => img.id === id);
  return image?.alt || `Gallery image ${id + 1}`;
};

export const getTotalImages = (): number => {
  return GALLERY_IMAGES.length;
}; 