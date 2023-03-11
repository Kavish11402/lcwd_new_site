import {useRouter} from "next/router";
import ShareBar from "@/Components/MasterTemplets/ShareBar";
import React from "react";
import Head from "next/head";

export default function DynamicBlogPage ()
{
  const router = useRouter()
  const urlPath = router.query.dynamicBlogPage

  return(

      <>
          <Head>
              <title>{"blog.title"} | Learn Code With Durgesh</title>
              <meta name="keywords" content={"blog.keywords"}/>
              <meta name="description" content={"blog.short_description"}/>
              <meta name="author" content="Learn Code With Durgesh"/>

          </Head>

          <main className={""}>

              {/* Place for Dynamic Blog Content */}
              <div className={"border-2 border-black"}></div>

              {/* Share Panel */}
              <ShareBar postLink={"https://learncodewithdurgesh.com/blogs/what-is-ansible"}/>

          </main>
      </>
  );
}

