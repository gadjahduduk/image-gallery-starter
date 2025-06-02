// Mock Cloudinary functionality for development with placeholders
export default {
  v2: {
    search: {
      expression: (folder: string) => ({
        sort_by: (field: string, order: string) => ({
          max_results: (limit: number) => ({
            execute: async () => {
              // Generate mock image data
              const mockImages = Array.from({ length: 50 }, (_, i) => ({
                id: i,
                height: "480",
                width: "720",
                public_id: `mock-image-${i}`,
                format: 'jpg',
                secure_url: `https://placehold.co/720x480`
              }));
              
              return {
                resources: mockImages
              };
            }
          })
        })
      })
    }
  }
};
