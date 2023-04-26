import Head from "next/head";
import BlogsHub from "@/Components/BlogsComponent/BlogsHub";
import {getBlogs} from "@/Api_Services/apiServices";
import {useContext} from "react";
import courseHomeContext from "@/Context/CourseHomeContext";

export default function blogs({allBlogs})
{
    const { allGlobalBlogs , setAllGlobalBlogs } = useContext(courseHomeContext)
    setAllGlobalBlogs(allBlogs)
    console.log("blogs =>", allGlobalBlogs )
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