import ReviewHub from "@/Components/ReviewComponent/ReviewHub";
import Head from "next/head";
import React from "react";

export default function Reviews() {
  return (
    <>
        <Head>
            <title>What Students say about LCWD</title>
            <meta name="keywords" content={"Student Review , About LCWD , Review Learn Code With Durgesh"}/>
            <meta name="description" content={"What Students say about LCWD"}/>
        </Head>
      <ReviewHub />
    </>
  );
}
