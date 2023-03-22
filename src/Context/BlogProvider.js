import React, { useEffect, useState } from "react";
import blogContext from "./BlogContext";
const BlogProvider = ({ children }) => {
  const [categories, setCategories] = useState(null);
  const [latestBlogs, setLatestBlogs] = useState(null);

  return (
    <blogContext.Provider
      value={{ categories, setCategories, latestBlogs, setLatestBlogs }}
    >
      {children}
    </blogContext.Provider>
  );
};

export default BlogProvider;
