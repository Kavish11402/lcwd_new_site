import HomePage from "@/Components/HomePageComponent/HomePage";
import Head from "next/head";


export default function index()
{
  return(
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

          <main className={"mt-20"}>
              <HomePage/>
          </main>
      </>
  );
}