import React, { useEffect, useState } from "react";

import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import BlogGrid from "../../components/BlogGrid";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import CategoryList from "../../components/CategoryList";

import blogService from "../../services/blogService";

export default function HomePage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogAPIdata = await blogService.getBlogs();
        setBlogs(blogAPIdata);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBlogs();
  }, []);

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const categoryAPIdata = await blogService.getCategories();
        setCategories(categoryAPIdata);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch categories");
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <SubHeading subHeading={"Recent Blog Posts"} />
        <BlogGrid blogPosts={blogs}></BlogGrid>
        <SubHeading subHeading={"Categories"} />
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <CategoryList categories={categories} />
        <Footer />
      </div>
    </>
  );
}
