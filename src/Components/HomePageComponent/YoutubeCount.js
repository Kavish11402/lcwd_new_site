import Link from "next/link";
import Image from "next/image";

import durgesh_sir_DP from "@/Assets/Images/durgesh_sir.webp";
import instagramPhoto from"@/Assets/Icons/instagram.png";
import facebookPhoto from"@/Assets/Icons/facebook.png";
import linkedinPhoto from"@/Assets/Icons/linkedin.png";
import youtubePhoto from"@/Assets/Icons/youtube.png";
import SocialMediaFollowers from "@/Components/HomePageComponent/SocialMediaFollowers";

export default function YoutubeCount()
{
  return(
      <div className={"flex flex-col border-2 border-black"}>


          <div className={"flex flex-row justify-center text-gray-700 py-14"}>

              <div className={"my-auto"} >

                  <div>
                      <h1 className={"border-b-2 border-t-2 border-red-600 mx-auto w-fit py-2 px-12 text-center text-red-600 font font-semibold text-5xl"}>
                          2,00,00,000+
                      </h1>
                  </div>

                  <div className={"mt-5"}>
                      <h1 className={"text-center !text-black font font-semibold text-6xl"}>YouTube Views</h1>
                      <h2 className={"mt-2 text-zinc-800 text-center text-lg"}>Strong community we are building for coders.</h2>

                      <div className={"mt-6 flex flex-row justify-center space-x-8"}>

                          <Link target={`_blank`} href={`https://www.youtube.com/learncodewithdurgesh`} >
                              <h1 className={"bg-secondary-medium hover:bg-secondary-dark text-white transition-all ease-in-out px-4 py-2 rounded-xl text-xl"}>
                                  Show Profile
                              </h1>
                          </Link>


                          <Link target={`_blank`} href={`https://t.me/learncodewithdurgesh`} >
                              <h1 className={"bg-secondary-medium hover:bg-secondary-dark text-white transition-all ease-in-out px-4 py-2 rounded-xl text-xl"}>
                                  Join Community
                              </h1>
                          </Link>

                      </div>
                  </div>
                  
              </div>

              <div className={"rounded-full mx-36 border-[1px] my-10 border-zinc-400"}></div>

              <div>
                  <Image className={"rounded-full w-80"} src={durgesh_sir_DP} alt={"Durgesh_Sir_Photo"} />
              </div>

          </div>


          <div className={"flex flex-row justify-center py-10 bg-primary-light"}>

              <SocialMediaFollowers handleImage={youtubePhoto} handleFollowers={"175K+"} handleOtherInfo={"Subscribers"}/>

              <div className={"rounded-full border-[1px] border-zinc-500 mx-7"}></div>

              <SocialMediaFollowers handleImage={facebookPhoto} handleFollowers={"1.3K+"} handleOtherInfo={"Followers"}/>

              <div className={"rounded-full border-[1px] border-zinc-500 mx-7"}></div>

              <SocialMediaFollowers handleImage={instagramPhoto} handleFollowers={"5,926+"} handleOtherInfo={"Followers"}/>

              <div className={"rounded-full border-[1px] border-zinc-500 mx-7"}></div>

              <SocialMediaFollowers handleImage={linkedinPhoto} handleFollowers={"4,096+"} handleOtherInfo={"Followers"} />


          </div>


      </div>
  );
}