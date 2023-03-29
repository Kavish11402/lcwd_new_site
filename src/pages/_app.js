import "@/styles/globals.css";

import NavBar from "@/Components/NavigationBar/NavBar";
import Footer from "@/Components/FooterComponents/Footer";
import Head from "next/head";
import MasterContext from "@/Context/MasterContext";
import BlogProvider from "@/Context/BlogProvider";
import NextNProgress from "nextjs-progressbar";
import "prismjs/themes/prism-tomorrow.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Master Code | Learn Code With Durgesh</title>

        <meta
          name="keywords"
          content="learn code with durgesh, learncodewithdurgesh,coding in hindi,Coding courses,Programming courses,Learn to code,Free coding courses,Online coding classes,Programming languages,Java programming course,Python programming course,Web development courses,Mobile app development courses,Front-end development courses,Back-end development courses,Coding bootcamp,Code tutorials,Online learning platform,Hindi programming courses"
        />

        <meta
          name="description"
          content="Welcome to Learn Code With Durgesh, where we offer free programming and coding courses in Hindi! Whether you're a beginner or an experienced coder, our courses are designed to help you learn and improve your coding skills without any cost. Our expert instructors will guide you through each step, providing you with hands-on coding projects and real-world examples to help you understand the concepts thoroughly. Plus, all of our courses are available in Hindi, so you can learn in a language that's comfortable for you. So why wait? Start learning today and take your coding skills to the next level without spending a dime!"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/Assets/Favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/Assets/Favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/Assets/Favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/Assets/Favicon/site.webmanifest" />
      </Head>

      <main
        className={
          "w-screen lg:w-auto overflow-x-clip lg:overflow-x-visible mt-[4rem] lg:mt-[4.5rem] select-none"
        }
      >
        <MasterContext>
          <BlogProvider>
            <NextNProgress
              color="#EC4899"
              options={{ showSpinner: false, easing: "ease" }}
            />
            <NavBar />

            <Component {...pageProps} />
            <Footer />
          </BlogProvider>
        </MasterContext>
      </main>
    </>
  );
}
