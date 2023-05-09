import Link from "next/link";
import Image from "next/image";


export default function SingleCourse( { bannerImg, bannerTittle, bannerDesc, courseUrl,data="api" } )
{
  return (
    <div>
      <Link href={`/course/${courseUrl}`}>
        <div
          className={
            "bg-card-color drop-shadow-xl rounded-3xl w-[21rem] h-[33rem] smd:w-[22rem] flex flex-col justify-between pb-6 transition-all ease-linear 2xl:hover:scale-105"
          }
        >
          <div>
            {

              data==="api"?
                  <img
                      className={"rounded-3xl mx-auto w-full"}
                      src={`${bannerImg}`}
                      alt={"Banner Image"}
                  />
                  :
                  <Image
                      className={"rounded-3xl mx-auto w-full"}
                      src={bannerImg}
                      alt={"Banner Image"}
                  />

            }

            <div className={"px-5 my-5"}>
              <h1 className={"font-bold text-lg mx-auto"}>
                {bannerTittle}
              </h1>

              <p className={ " h-[6.5rem] text-zinc-600 mt-3 text-sm 2xl:h-[7.8rem] 2xl:text-base line-clamp-5" } >
                {bannerDesc}
              </p>
            </div>
          </div>

          <button
            className={
              "bg-primary-medium hover:bg-primary-light transition-all ease-in-out rounded-3xl py-3 text-center text-md font-semibold text-zinc-600 2xl:text-xl w-56 mx-auto"
            }
          >
            Start Learning
          </button>
        </div>
      </Link>
    </div>
  );
}
