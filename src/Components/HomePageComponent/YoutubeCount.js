import Link from "next/link";
import Image from "next/image";

import durgesh_sir_DP from "@/Assets/Images/durgesh_sir.webp";
import instagramPhoto from "@/Assets/Icons/instagram.png";
import facebookPhoto from "@/Assets/Icons/facebook.png";
import linkedinPhoto from "@/Assets/Icons/linkedin.png";
import youtubePhoto from "@/Assets/Icons/youtube.png";
import telegramPhoto from "@/Assets/Icons/telegram.png"
import SocialMediaFollowers from "@/Components/HomePageComponent/SingleReuseableComponents/SocialMediaFollowers";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

export default function YoutubeCount() {
  const [viewsActiveStatus, setViewsActiveStatus] = useState(false);
  const [socialMediaActiveStatus, setSocialMediaActiveStatus] = useState(false);

  return (
    <div className={"flex flex-col py-10"}>
      <h1
        className={
          "mb-10 lg:mb-16 text-center text-2xl font-bold underline underline-offset-8 text-primary-dark lg:text-5xl"
        }
      >
        
        Our Community
      </h1>

      <div
        className={
          "flex flex-col-reverse justify-center text-gray-700 lg:flex-row pb-10"
        }
      >
        <div className={"flex flex-col justify-center mt-8 lg:mt-0"}>
          <div>
            <ScrollTrigger
              onEnter={() => {
                setViewsActiveStatus(true);
              }}
              onExit={() => {
                setViewsActiveStatus(false);
              }}
            >
              <h1
                className={
                  "border-b-2 border-t-2 border-red-600 mx-auto w-fit py-2 px-7 text-center text-red-600 font font-semibold text-4xl lg:px-12 lg:text-5xl"
                }
              >
                {viewsActiveStatus && (
                  <CountUp
                    start={0}
                    end={50000000}
                    duration={2}
                    delay={0.2}
                    separator={","}
                  />
                )}
                +
              </h1>
            </ScrollTrigger>
          </div>

          <div className={"mt-5"}>
            <h1
              className={
                "text-center !text-black font font-semibold text-5xl lg:text-6xl"
              }
            >
              YouTube Views
            </h1>
            <h2 className={"mt-2 text-zinc-800 text-center text-md lg:text-lg"}>
              Strong community we are building for coders.
            </h2>


            <div className={"mt-6 flex flex-row justify-center space-x-8"}>
              <Link
                target={`_blank`}
                href={`https://www.youtube.com/learncodewithdurgesh`}
              >
                <h1
                  className={
                    "bg-secondary-medium hover:bg-secondary-dark text-white transition-all ease-in-out px-4 py-2 rounded-xl text-lg lg:text-xl"
                  }
                >
                  Show Profile
                </h1>
              </Link>

              <Link
                target={`_blank`}
                href={`https://t.me/learncodewithdurgesh`}
              >
                <h1
                  className={
                    "bg-secondary-medium hover:bg-secondary-dark text-white transition-all ease-in-out px-4 py-2 rounded-xl text-lg lg:text-xl"
                  }
                >
                  Join Community
                </h1>
              </Link>
            </div>
          </div>
        </div>

        <div
          className={
            "hidden lg:block rounded-full lg:mx-24 xl:mx-36 border my-10 border-zinc-400"
          }
        ></div>

        <div>
          <Image
            className={"rounded-full w-64 lg:w-80 lg:mx-0 mx-auto"}
            src={durgesh_sir_DP}
            alt={"Durgesh_Sir_Photo"}
          />
          <Link href={"/about-durgesh-tiwari"} className={"text-zinc-800 hover:text-red-500 transition-all ease-linear"} title={"Click here to learn more"}>
            <h2 className={"mt-4  font-bold text-center text-md lg:text-lg"}>
              About Durgesh Sir
            </h2>
          </Link>
        </div>
      </div>

      {/*TODO -> Link To that social media handle lagao consult to durgesh sir*/}
      <ScrollTrigger
        onEnter={() => {  setSocialMediaActiveStatus(true); }}
        onExit={() => { setSocialMediaActiveStatus(false); }}
      >


        <div className={ "grid grid-cols-2 gap-3 py-10 px-4 bg-primary-light xl:flex xl:flex-row lg:justify-center" } >


          <SocialMediaFollowers
            handleImage={youtubePhoto}
            handleFollowers={200000}
            handleFollowersExtention={"+"}
            handleOtherInfo={"Subscribers"}
            socialMediaActiveStatus={socialMediaActiveStatus}
          />

          <div className={ "hidden xl:block rounded-full border border-zinc-500 xl:mx-4 2xl:mx-7" }></div>

          <SocialMediaFollowers
            handleImage={facebookPhoto}
            handleFollowers={2000}
            handleFollowersExtention={"+"}
            handleOtherInfo={"Followers"}
            socialMediaActiveStatus={socialMediaActiveStatus}
          />

          <div className={ "hidden xl:block rounded-full border border-zinc-500 xl:mx-4 2xl:mx-7" }></div>

          <SocialMediaFollowers
            handleImage={instagramPhoto}
            handleFollowers={10000}
            handleFollowersExtention={"+"}
            handleOtherInfo={"Followers"}
            socialMediaActiveStatus={socialMediaActiveStatus}
          />

          <div className={ "hidden xl:block rounded-full border border-zinc-500 xl:mx-4 2xl:mx-7" }></div>

          <SocialMediaFollowers
            handleImage={linkedinPhoto}
            handleFollowers={5000}
            handleFollowersExtention={"+"}
            handleOtherInfo={"Followers"}
            socialMediaActiveStatus={socialMediaActiveStatus}
          />

          <div className={ "hidden xl:block rounded-full border border-zinc-500 xl:mx-4 2xl:mx-7" }></div>


          <div className={"col-span-2 flex flex-row justify-center"}>

            <SocialMediaFollowers
                handleImage={telegramPhoto}
                handleFollowers={12000}
                handleFollowersExtention={"+"}
                handleOtherInfo={"Followers"}
                socialMediaActiveStatus={socialMediaActiveStatus}
            />

          </div>







        </div>








      </ScrollTrigger>
    </div>
  );
}
