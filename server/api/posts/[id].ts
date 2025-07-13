export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id');
    
    if (!id || isNaN(Number(id))) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid post ID'
      });
    }

    const response = await $fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    
    // Set cache headers for performance
    setHeader(event, 'Cache-Control', 'public, max-age=3600, s-maxage=86400');
    setHeader(event, 'Content-Type', 'application/json');
    
    return response;
  } catch (error: any) {
    if (error.statusCode === 404) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Post not found'
      });
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch post',
      data: error
    });
  }
}); 