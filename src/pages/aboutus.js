import AboutUsHub from "@/Components/AboutUsComponent/AboutUsHub";
import Head from "next/head";

export default function aboutus() {
  return (
    <>
      <Head>
        <title>About Us | Learn Code With Durgesh</title>
        <meta
          name={"keywords"}
          content={
            "about learn code with durgesh, about lcwd, what is lcwd, learn code with durgesh"
          }
        />
        <meta
          name={"description"}
          content={
            "About Learn Code With Durgesh. LCWD is online platform for programming and coding in hindi"
          }
        />
        <meta name={"author"} content={"Learn Code With Durgesh"} />
      </Head>
      <AboutUsHub />
    </>
  );
}
