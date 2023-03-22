import {useRouter} from "next/router";
import ShareBar from "@/Components/MasterTemplets/ShareBar";
import React, {useEffect, useState} from "react";
import Head from "next/head";
import {getBlogUsingSlug} from "@/Api_Services/apiServices";
import HTMLDataParser from "@/Components/BlogsComponent/HTMLDataParser";

export default function DynamicBlogPage ({blog})
{


    let router = useRouter();

    const [currentUrl, setCurrentUrl] = useState('')
    const [htmlContent, setHtmlContent] = useState(null);
    useEffect(() => {

        setCurrentUrl(`${window.location.host.startsWith("localhost") ? 'http://' : 'https://'}` + window.location.host + router.asPath)
        setHtmlContent('<div>' + blog.content + '</div>')

    }, [blog.content],);

    console.log(htmlContent)
  return(

      <>
          <Head>
              <title>{blog.title} | Learn Code With Durgesh</title>
              <meta name="keywords" content={blog.keywords}/>
              <meta name="description" content={blog.short_description}/>
              <meta name="author" content="Learn Code With Durgesh"/>

          </Head>

          <main className={""}>

              {/* Place for Dynamic Blog Content */}
              <div className={" mx-2 md:mx-5 grid grid-cols-1 lg:grid-cols-12"}>
              
                <div className="lg:col-start-3 lg:col-span-8">  {htmlContent ? <HTMLDataParser htmlData={htmlContent}/> : ''}</div>
               
              </div>

              {/* Share Panel */}
              <ShareBar postTitle={blog.title} postLink={`https://learncodewithdurgesh.com/blogs/${blog.slug}`}/>

          </main>
      </>
  );
}

export async function getServerSideProps(context)
{
    const {dynamicBlogPage} = context.params;
    const data = await getBlogUsingSlug(dynamicBlogPage);

    return {
        props: { blog : data }, // will be passed to the page component as props
    };
}