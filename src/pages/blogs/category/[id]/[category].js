import { getCategoryWiseBlogs } from "@/Api_Services/apiServices";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import BlogsHub from "@/Components/BlogsComponent/BlogsHub";
import blogContext from "@/Context/BlogContext";

const CategoryBlogs = ({ blogs }) => {
  const router = useRouter();
  const { categories } = useContext(blogContext);
  const [currentCatgory, setCurrentCategory] = useState(null);
  const { id, category } = router.query;
  useEffect(() => {
    if (categories) {
      const cat = categories.find((cat) => cat.id == id);
      setCurrentCategory(cat);
    }
  }, [categories, id, category]);
  return (
    <>
      <Head>
        <title>{`${ category + " | Learn Code With Durgesh"}`}</title>
        <meta
          name="keywords"
          content="blogs, lcwd blogs page, articles, technology"
        />
        <meta
          name="description"
          content="Blogs related to Trending topics. This page provides list of blogs and article of different technology"
        />
      </Head>
      <BlogsHub
        allBlogs={blogs}
        showSocialMedia={false}
        title={`${category} Blogs`}
        subtitle={currentCatgory ? currentCatgory.description : ""}
      />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  let blogs = await getCategoryWiseBlogs(id);
  if (!blogs) return { props: { blogs: [] } };
  return {
    props: { blogs },
  };
};

export default CategoryBlogs;
