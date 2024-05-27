const getBlogs = async () => {
  try {
    const res = await fetch(
      "https://ix-blog-app-2d5c689132cd.herokuapp.com/api/blogs",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const blogAPIdata = await res.json();
    return blogAPIdata.data;
  } catch (err) {
    console.log(err);
  }
};

/* getCategories from the same api endpoint */
const getCategories = async () => {
  try {
    const res = await fetch(
      "https://ix-blog-app-2d5c689132cd.herokuapp.com/api/categories",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const categoryAPIdata = await res.json();
    return categoryAPIdata.data;
  } catch (err) {
    console.log(err);
  }
};

const getBlogsByCategory = async (categoryId) => {
  try {
    // Construct the URL with the category ID as a URL segment
    const url = `https://ix-blog-app-2d5c689132cd.herokuapp.com/api/blogs/category/${categoryId}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const blogAPIdata = await response.json();
    return blogAPIdata.data;
  } catch (err) {
    console.error("Error fetching blogs by category:", err);
    console.error("Category ID:", categoryId);
    console.error("Error output:", err);
    throw err;
  }
};

const blogService = {
  getBlogs,
  getCategories,
  getBlogsByCategory,
};

export default blogService;
