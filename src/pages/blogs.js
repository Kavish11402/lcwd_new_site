import Head from "next/head";
import BlogsHub from "@/Components/BlogsComponent/BlogsHub";

export default function blogs()
{
  return(
      <>
          <Head>
              <title>Blogs | Learn Code With Durgesh</title>
              <meta name='keywords' content="blogs, lcwd blogs page, articles, technology"/>
              <meta name="description"
                    content="Blogs related to Trending topics. This page provides list of blogs and article of different technology"/>
          </Head>
          <BlogsHub/>
      </>
  );
}