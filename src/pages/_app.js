import "@/Assets/Style/Global.css"
import '@/styles/globals.css'
import NavBar from "@/Components/NavigationBar/NavBar";
import Footer from "@/Components/FooterComponents/Footer";
import Head from "next/head";
import MasterContext from "@/Context/MasterContext";

export default function App({ Component, pageProps })
{
  return (
      <>
          <Head>

              <title>Master Programming in Hindi | Learn Code With Durgesh</title>

              <meta
                  name="keywords"
                  content = "lcwd, learn code with durgesh, learn code with durgesh, best hindi courses, free hindi programing courses, java programming in hindi,  python programming hindi, c programming hindi, django in hindi, spring boot in hindi, learn spring boot in hindi"
              />

              <meta
                  name="description"
                  content = "learn code with Durgesh is online platform which provide free video courses on different type of technologies like , c programming language , java programming language , python programming language , android development"
              />

              <meta name="viewport" content="width=device-width, initial-scale=1" />

              <link rel="apple-touch-icon" sizes="180x180" href="/Assets/Favicon/apple-touch-icon.png"/>
              <link rel="icon" type="image/png" sizes="32x32" href="/Assets/Favicon/favicon-32x32.png"/>
              <link rel="icon" type="image/png" sizes="16x16" href="/Assets/Favicon/favicon-16x16.png"/>
              <link rel="manifest" href="/Assets/Favicon/site.webmanifest"/>

          </Head>

          <main className={"w-screen lg:w-auto overflow-x-clip lg:overflow-x-visible mt-[4rem] lg:mt-[4.5rem] select-none"}>
              <MasterContext>
                  <NavBar/>
                  <Component {...pageProps} />
                  <Footer/>
              </MasterContext>
          </main>

      </>
  );
}

