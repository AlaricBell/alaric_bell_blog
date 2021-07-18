export async function getPosts() {
  return await fetch(`${process.env.BLOG_URL}/ghost/api/v3/content/posts/?key=${process.env.CONTENT_API_KEY}&include=tags&fields=title,slug,custom_excerpt,reading_time,feature_image,published_at`)
                          .then(res => res.json())
                          .then(res => res.posts);
}

export async function getTopPosts() {
  return await fetch(`${process.env.BLOG_URL}/ghost/api/v3/content/posts/?key=${process.env.CONTENT_API_KEY}&include=tags,authors&fields=title,slug,custom_excerpt,reading_time,feature_image,published_at&limit=3`)
                          .then(res => res.json())
                          .then(res => res.posts);
}

export async function getPostsBySlug(slug) {
  return await fetch(`${process.env.BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}/?key=${process.env.CONTENT_API_KEY}&fields=title,slug,custom_excerpt,reading_time,feature_image,published_at,html`)
                          .then(res => res.json())
                          .then(res => res.posts);
}

export async function getSlugs() {
  const slugs = await fetch(`${process.env.BLOG_URL}/ghost/api/v3/content/posts/?key=${process.env.CONTENT_API_KEY}&fields=slug`)
                          .then(res => res.json())
                          .then(res => res.posts);
  return slugs.map(slug => `/post/${slug.slug}`);
}

export async function getTags() {
  return await fetch(`${process.env.BLOG_URL}/ghost/api/v3/content/tags/?key=${process.env.CONTENT_API_KEY}&include=count.posts`)
                          .then(res => res.json())
}