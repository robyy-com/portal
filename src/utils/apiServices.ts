export const apiUrl =
  process.env.API_BASE_URL || "https://api.robyy.com/v1.1.0";

// Fetch Products
export const fetchProducts = async () => {
  const response = await fetch(`${apiUrl}/products`, {
    cache: "no-cache",
  });
  if (!response.ok) {
    return [];
  }
  return await response.json();
};

// Fetch Single Product
export const fetchSingleProducts = async (productSlug: string) => {
  try {
    const response = await fetch(`${apiUrl}/product/${productSlug}`, {
      cache: "no-cache",
    });
    return await response.json();
  } catch (error: any) {
    throw new Error(`Error: ${error.message}`);
  }
};

// Fetch Categories
export const fetchCategories = async () => {
  try {
    const response = await fetch(`${apiUrl}/categories`, {
      cache: "no-cache",
    });
    return await response.json();
  } catch (error: any) {
    console.error("Error fetching categories:", error);
    return []; // return fallback
  }
};

// Fetch Products By Category
export const productsByCategory = async (categorySlug: string) => {
  const response = await fetch(`${apiUrl}/category/${categorySlug}`, {
    cache: "no-cache",
  });
  if (!response.ok) {
    return [];
  }
  return await response.json();
};

export const productsByBrand = async (brandSlug: string) => {
  const response = await fetch(`${apiUrl}/brand/${brandSlug}`, {
    cache: "no-cache",
  });
  if (!response.ok) {
    return [];
  }
  return await response.json();
};

export const fetchCarts = async (data: any) => {
  const response = await fetch(`${apiUrl}/viewcart`, {
    cache: "no-cache",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    return [];
  }

  return await response.json();
};

// top brand =================
export const fatchTopBrand = async () => {
  const response = await fetch(`${apiUrl}/brands`, {
    cache: "no-cache",
  });
  if (!response.ok) {
    return [];
  }
  return await response.json();
};
// single brand =================
export const singleBrandItem = async (brandName: string) => {
  const response = await fetch(`${apiUrl}/brand/${brandName}`, {
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return await response.json();
};
// All Blogs =================
export const fetchBlogs = async () => {
  const response = await fetch(`${apiUrl}/blog-posts`, {
    cache: "no-cache",
  });

  if (!response.ok) {
    return [];
  }
  return await response.json();
};
export const fetchBlogsCategory = async () => {
  const response = await fetch(`${apiUrl}/all-post-category`, {
    cache: "no-cache",
  });

  if (!response.ok) {
    return [];
  }
  return await response.json();
};
export const fetchBlogSingleCategory = async (categoryName: string) => {
  const response = await fetch(`${apiUrl}/post-category/${categoryName}`, {
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return await response.json();
};
// single Blogs =================https://api.robyy.com/v1.1.0/aricle/
export const fetchSingleBlog = async (blogTitle: string) => {
  const response = await fetch(`${apiUrl}/aricle/${blogTitle}`, {
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return await response.json();
};
// Newarrival =================https://api.robyy.com/v1.1.0/new-arrival

export const fetchNewArrivalProducts = async () => {
  const response = await fetch(`${apiUrl}/new-arrival`, {
    cache: "no-cache",
  });

  if (!response.ok) {
    return [];
  }
  return await response.json();
};

export const fetchBestDeals = async () => {
  const response = await fetch(`${apiUrl}/bestdeals?limit=12`, {
    cache: "no-cache",
  });

  if (!response.ok) {
    return [];
  }
  return await response.json();
};
