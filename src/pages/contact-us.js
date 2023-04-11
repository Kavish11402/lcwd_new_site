import ContactUsHub from "@/Components/ContactUsComponent/ContactUsHub";
import Head from "next/head";

export default function ContactUs()
{
  return(
      <>
        <Head>
          <title>{"Contact Us | Learn Code With Durgesh"}</title>
          <meta name={"keywords"}
                content={"contact learn code with durgesh,about lcwd, how to contact durgesh sir, how to contact learn code with durgesh, learn code with durgesh phone number"}/>
          <meta name={"description"}
                content={"This page provides links where you can contact to Learn Code With Durgesh"}/>
        </Head>

        <ContactUsHub/>
      </>
  );
}