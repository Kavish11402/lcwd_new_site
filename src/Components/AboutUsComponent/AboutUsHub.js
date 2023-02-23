import lcwd_logo from "@/Assets/Logos/lcwd_logo.png"
import HeroCard from "@/Components/MasterTemplets/HeroCard";
import Image from "next/image";

export default function AboutUsHub()
{
  return(
      <div>

          <HeroCard backgroundCss={"bg-contactBannerImg"} title={"About Us"} subTitle={"Kindly Follow Us on Different Social Medias"} showSocialMedia={true} showLogo={false} />

          <div className={"lg:h-[92vh] py-10 lg:py-0 flex flex-col justify-center"}>

              <div className={"rounded-3xl bg-stone-200 drop-shadow-xl mx-auto w-[93%] lg:w-[70%] p-5 lg:p-10 flex flex-col justify-center"}>

                  <Image className={"mx-auto w-36 lg:w-52"} src={lcwd_logo} alt={"LCWD Logo"}/>

                  <h1 className={"mx-auto text-center font-bold text-4xl lg:text-6xl py-4 lg:py-6 bg-gradient-to-r from-secondary-dark to-primary-dark bg-clip-text text-transparent"}>Learn Code With Durgesh</h1>

                  <p className={"mx-auto text-center text-base lg:text-lg"}>LCWD <b>(Learn Code With Durgesh)</b> is learning platform for learners which provides almost free video courses in hindi.</p>

                  <h2 className={"mx-auto text-center font-semibold text-3xl lg:text-4xl text-slate-800 mt-6 mb-4 lg:mt-8 lg:mb-6"}>Must Read</h2>

                  <p className={"mx-auto text-center text-base lg:text-lg"}>
                      Although the videos and other content of Learn Code With Durgesh are free for anyone to watch, learn and share.
                      I dont earn anything significant from YouTube which makes it difficult for me to pay the equipment and software costs
                      for producing content. All the donations will be used in buying new equipment, improving quality of the content and
                      bringing more of such videos up. You can support this content by donating any amount of money through below link.
                  </p>

                  <a
                      className={"mt-6 bg-primary-medium hover:bg-amber-300 transition-all ease-in-out rounded-md py-2 text-center text-md font-semibold text-zinc-600 px-7 lg:px-16 lg:text-xl mx-auto "}
                      target="_blank" rel={'noreferrer'} href="https://pages.razorpay.com/pl_EY9gpo04DlvETA/view"
                  >
                      ! DONATE !
                  </a>

              </div>

          </div>


      </div>
  );
}