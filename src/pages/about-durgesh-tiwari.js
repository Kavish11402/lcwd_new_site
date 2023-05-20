import About_Instructor from "@/Components/AboutUsComponent/About_Instructor";
import Head from "next/head";

export default function aboutDurgeshTiwari()
{
  return(
      <>
          <Head>
              <title>{"Durgesh Kumar Tiwari"}</title>
              <meta
                  name={"keywords"}
                  content={
                      "about durgesh kumar tiwari, about durgesh, who is durgesh, durgesh kumar tiwari"
                  }
              />
              <meta
                  name={"description"}
                  content={
                      "Durgesh Sir is a fun loving, entertaining personality famous over the internet for his teaching style and knowledge in various technologies. The way he handles the issues and explains the concepts to students is commendable. He always keeps the environment lite with his humor and that is what students love the most about him."
                  }
              />
              <meta name={"author"} content={"Learn Code With Durgesh"} />
          </Head>


          <div className={"py-10 lg:py-16 flex flex-col justify-center space-y-20"}>

              <About_Instructor/>

          </div>
      </>
  );
}