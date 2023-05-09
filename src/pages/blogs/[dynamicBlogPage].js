import ShareBar from "@/Components/MasterTemplets/ShareBar";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { getBlogUsingSlug } from "@/Api_Services/apiServices";
import HTMLDataParser from "@/Components/MasterTemplets/HTMLDataParser";
import BlogCategories from "@/Components/BlogsComponent/BlogCategories";
import HeroCard from "@/Components/MasterTemplets/HeroCard";
import LatestBlog from "@/Components/BlogsComponent/LatestBlog";

export default function DynamicBlogPage({ blog }) {

  const [htmlContent, setHtmlContent] = useState(null);

  useEffect(() => {
    setHtmlContent("<div>" + blog.content + "</div>");
  }, [blog.content]);

  return (
    <>
      <Head>
        <title>{`${ blog.title + " | Learn Code With Durgesh"}`}</title>
        <meta name="keywords" content={blog.keywords} />
        <meta name="description" content={blog.short_description} />
        <meta name="author" content="Learn Code With Durgesh" />
      </Head>

      <main>


















        <HeroCard
          showLogo={false}
          backgroundCss={"bg-singleBlogBannerImg p-5"}
          blogTitle={blog.title}
          showSocialMedia={false}
        />
        {/* Place for Dynamic Blog Content */}
        <div className={"mx-2 md:mx-0  grid grid-cols-1 lg:grid-cols-12"}>
          <BlogCategories />

          <div className="lg:col-start-4 xl:col-start-3 lg:col-span-8 lg:pl-2 xl:pl-8 2xl:pl-0 mt-4">

            {htmlContent ? <HTMLDataParser htmlData={htmlContent} /> : ""}

            <div className={"mx-auto w-[90%] bg-stone-50 drop-shadow-xl lg:hidden"}>
              <div>

                {/* Add Ad. Here  */}
                <div>ad.. here</div>

              </div>
            </div>

            {/* latest blogs   */}
            <LatestBlog />

          </div>

          <div className={"hidden lg:block ml-8 bg-stone-50 drop-shadow-xl col-span-2 relative"}>
            <div className={"sticky top-28"}>

              {/* Add Ad. Here  */}
              <div></div>

            </div>
          </div>



        </div>

        {/* Share Panel */}
        <ShareBar
          postTitle={blog.title}
          postLink={`https://learncodewithdurgesh.com/blogs/${blog.slug}`}
        />












      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const { dynamicBlogPage } = context.params;
  const data = await getBlogUsingSlug(dynamicBlogPage);

  return {
    props: { blog: data }, // will be passed to the page component as props
  };
}
