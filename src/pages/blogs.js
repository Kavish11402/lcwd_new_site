import Head from "next/head";
import BlogsHub from "@/Components/BlogsComponent/BlogsHub";
import {getBlogs} from "@/Api_Services/apiServices";

export default function blogs({allBlogs})
{
  return(
      <>
          <Head>
              <title>{"Blogs | Learn Code With Durgesh"}</title>
              <meta name='keywords' content="blogs, lcwd blogs page, articles, technology"/>
              <meta name="description"
                    content="Blogs related to Trending topics. This page provides list of blogs and article of different technology"/>
          </Head>
          <BlogsHub allBlogs={allBlogs}/>
      </>
  );
}

export async function getServerSideProps(context)
{
    const data = await getBlogs();

    return {
        props: { allBlogs : data }, // will be passed to the page component as props
    };
}