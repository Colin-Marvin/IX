import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import BlogList from "../../components/BlogList";
import Footer from "../../components/Footer";
import CategoriesList from "../../components/CategoryList";

import "./index.css";

import blogService from "../../services/blogService";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [categoryId, setCategoryId] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch blogs based on category
  useEffect(() => {
    setLoading(true);
    const fetchBlogs = async () => {
      try {
        // Adjust the URL or function according to your API structure
        // This assumes your API can filter blogs by category ID
        const result = await blogService.getBlogsByCategory(categoryId);
        setBlogs(result);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
        setError("Failed to fetch blogs");
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [categoryId]); // Re-run this effect when categoryId changes

  // Handler to change category ID
  const handleCategoryChange = (id) => {
    setCategoryId(id);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <Heading />
        <div className="scroll-menu">
          {/* Passing down the handler to change category */}
          <CategoriesList
            categoryId={categoryId}
            onCategoryChange={handleCategoryChange}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="page-subtitle">Blog Posts</p>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && <BlogList blogPosts={blogs} />}
      </div>
      <Footer />
    </div>
  );
}
