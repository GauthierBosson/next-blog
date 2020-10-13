import client from "./sanityClient";

export async function getAllPosts() {
  const data = await client.fetch(
    `*[_type == "post"] {
      _id,
      title,
      'slug': slug.current,
    }`
  );

  return data;
}

export async function getPostBySlug(slug) {
  const data = await client.fetch(
    `
    *[_type == "post" && slug.current == $slug] {
      _id,
      title,
      body,
      isPremium,
      'slug': slug.current,
      'author': author->name
    }[0]
  `,
    { slug }
  );

  return data;
}

export async function getLastPremiumPosts() {
  const data = await client.fetch(
    `
    *[_type == "post" && isPremium == true] {
      _id,
      title,
      body,
      isPremium,
      'slug': slug.current,
      'authorName': author->name,
      'authorImg': author->image.asset->url,
      'categories': categories[]->title,
      'imageUrl': mainImage.asset->url
    }
    `
  );

  return data
}

export async function getLastFreePosts() {
  const data = await client.fetch(
    `
    *[_type == "post" && isPremium == false] {
      _id,
      title,
      body,
      isPremium,
      'slug': slug.current,
      'authorName': author->name,
      'authorImg': author->image.asset->url,
      'categories': categories[]->title,
      'imageUrl': mainImage.asset->url
    }
    `
  );

  return data
}

