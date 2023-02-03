import Link from "next/link";
import Image from "next/image";

import durgesh_sir_DP from "@/Assets/Images/durgesh_sir.webp";
import instagramPhoto from"@/Assets/Icons/instagram.png";
import facebookPhoto from"@/Assets/Icons/facebook.png";
import linkedinPhoto from"@/Assets/Icons/linkedin.png";
import youtubePhoto from"@/Assets/Icons/youtube.png";
import SocialMediaFollowers from "@/Components/HomePageComponent/SingleReuseableComponents/SocialMediaFollowers";

export default function YoutubeCount()
{
  return(
      <div className={"flex flex-col"}>

          <h1 className={"text-center text-2xl font-bold underline underline-offset-8 text-primary-dark lg:text-5xl mt-4 lg:mt-14 mb-8"}> Our Community </h1>

          <div className={"flex flex-col-reverse justify-center text-gray-700 py-8 lg:flex-row lg:py-14"}>

              <div className={"flex flex-col justify-center mt-8 lg:mt-0"} >

                  <div>
                      <h1 className={"border-b-2 border-t-2 border-red-600 mx-auto w-fit py-2 px-7 text-center text-red-600 font font-semibold text-4xl lg:px-12 lg:text-5xl"}>
                          2,00,00,000+
                      </h1>
                  </div>

                  <div className={"mt-5"}>

                      <h1 className={"text-center !text-black font font-semibold text-5xl lg:text-6xl"}>YouTube Views</h1>
                      <h2 className={"mt-2 text-zinc-800 text-center text-md lg:text-lg"}>Strong community we are building for coders.</h2>

                      <div className={"mt-6 flex flex-row justify-center space-x-8"}>

                          <Link target={`_blank`} href={`https://www.youtube.com/learncodewithdurgesh`} >
                              <h1 className={"bg-secondary-medium hover:bg-secondary-dark text-white transition-all ease-in-out px-4 py-2 rounded-xl text-lg lg:text-xl"}>
                                  Show Profile
                              </h1>
                          </Link>

                          <Link target={`_blank`} href={`https://t.me/learncodewithdurgesh`} >
                              <h1 className={"bg-secondary-medium hover:bg-secondary-dark text-white transition-all ease-in-out px-4 py-2 rounded-xl text-lg lg:text-xl"}>
                                  Join Community
                              </h1>
                          </Link>

                      </div>

                  </div>

              </div>

              <div className={"hidden lg:block rounded-full lg:mx-24 xl:mx-36 border-[1px] my-10 border-zinc-400"}></div>

              <div>
                  <Image className={"rounded-full w-64 lg:w-80 lg:mx-0 mx-auto"} src={durgesh_sir_DP} alt={"Durgesh_Sir_Photo"} />
              </div>

          </div>

          {/*TODO -> Link To that social media handle lagao consult to durgesh sir*/}
          <div className={"grid grid-cols-2 gap-3 py-10 px-4 bg-primary-light lg:flex lg:flex-row lg:justify-center"}>

              <SocialMediaFollowers handleImage={youtubePhoto} handleFollowers={"175K+"} handleOtherInfo={"Subscribers"}/>

              <div className={"hidden lg:block rounded-full border-[1px] border-zinc-500 mx-7"}></div>

              <SocialMediaFollowers handleImage={facebookPhoto} handleFollowers={"1.3K+"} handleOtherInfo={"Followers"}/>

              <div className={"hidden lg:block rounded-full border-[1px] border-zinc-500 mx-7"}></div>

              <SocialMediaFollowers handleImage={instagramPhoto} handleFollowers={"5,926+"} handleOtherInfo={"Followers"}/>

              <div className={"hidden lg:block rounded-full border-[1px] border-zinc-500 mx-7"}></div>

              <SocialMediaFollowers handleImage={linkedinPhoto} handleFollowers={"4,096+"} handleOtherInfo={"Followers"} />

          </div>

      </div>
  );
}