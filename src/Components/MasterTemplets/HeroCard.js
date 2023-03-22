import Image from "next/image";
import lcwdLogo from "@/Assets/Logos/lcwd_logo.png";
import Link from "next/link";
import instagramLogo from "@/Assets/Icons/instagram.png";
import youtubeLogo from "@/Assets/Icons/youtube.png";
import linkedinLogo from "@/Assets/Icons/linkedin.png";
import facebookLogo from "@/Assets/Icons/facebook.png";

function bgGenerator(backgroundCss) {
  return (
    <div
      className={
        "absolute -z-30 top-0 right-0 left-0 bg-bottom bg-cover brightness-90 h-[22rem] " +
        backgroundCss.toString()
      }
    ></div>
  );
}

export default function HeroCard({
  title,
  subTitle,
  backgroundCss,
  showSocialMedia,
  showLogo,
}) {
  return (
    <div className={"relative"}>
      {bgGenerator(backgroundCss)}
      <div className={"z-40 h-[22rem] flex flex-col justify-center"}>
        {/* border-l-8 border-r-8 border-primary-dark */}
        <div
          className={
            "rounded-3xl drop-shadow-2xl w-80 lg:w-fit mx-auto  bg-zinc-400/30 lg:bg-zinc-300/40 backdrop-blur-2xl py-4"
          }
        >
          {showLogo && (
            <Image
              className={"w-36 lg:w-48 mx-auto"}
              src={lcwdLogo}
              alt={"LCWD Logo"}
            />
          )}

          <h1
            className={
              "text-center text-primary-dark text-4xl lg:text-7xl font-semibold px-5 lg:px-24 mt-3"
            }
          >
            {title}
          </h1>

          <h1
            className={
              "text-center text-white px-5 lg:px-5 font-semibold lg:text-2xl my-4"
            }
          >
            {subTitle}
          </h1>

          {showSocialMedia && (
            <>
              <div className={"rounded-full border border-white"}></div>

              <div
                className={
                  "flex flex-row justify-center space-x-7 lg:space-x-16 px-5  my-6"
                }
              >
                <Link
                  href={`https://instagram.com/durgesh_k_t`}
                  rel={"noreferrer"}
                  target={"_blank"}
                >
                  <Image
                    className={
                      "w-16 transition-all ease-linear hover:-translate-y-2"
                    }
                    src={instagramLogo}
                    alt={"Instagram Logo"}
                  />
                </Link>

                <Link
                  href={`https://www.youtube.com/learncodewithdurgesh`}
                  rel={"noreferrer"}
                  target={"_blank"}
                >
                  <Image
                    className={
                      "w-16 transition-all ease-linear hover:-translate-y-2"
                    }
                    src={youtubeLogo}
                    alt={"Youtube Logo"}
                  />
                </Link>

                <Link
                  href={`https://www.linkedin.com/in/durgeshkumartiwari/`}
                  rel={"noreferrer"}
                  target={"_blank"}
                >
                  <Image
                    className={
                      "w-16 transition-all ease-linear hover:-translate-y-2"
                    }
                    src={linkedinLogo}
                    alt={"Linkedin Logo"}
                  />
                </Link>

                <Link
                  href={`https://www.facebook.com/learncodewithdurgesh`}
                  rel={"noreferrer"}
                  target={"_blank"}
                >
                  <Image
                    className={
                      "w-16 transition-all ease-linear hover:-translate-y-2"
                    }
                    src={facebookLogo}
                    alt={"Facebook Logo"}
                  />
                </Link>
              </div>

              <div className={"rounded-full border border-white"}></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
