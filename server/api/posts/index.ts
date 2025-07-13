export default defineEventHandler(async (event) => {
  try {
    const response = await $fetch('https://jsonplaceholder.typicode.com/posts');
    
    // Set cache headers for performance
    setHeader(event, 'Cache-Control', 'public, max-age=3600, s-maxage=86400');
    setHeader(event, 'Content-Type', 'application/json');
    
    return response;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch posts',
      data: error
    });
  }
}); 