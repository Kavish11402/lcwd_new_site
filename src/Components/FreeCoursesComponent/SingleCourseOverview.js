import Image from "next/image";
import videoIcon from "@/Assets/Icons/watchVideo.png";
import Link from "next/link";

export default function SingleCourseOverview({ singleVideoData , courseUrl })
{
  return(
      <div className={"bg-primary-light w-full rounded-3xl p-5 flex flex-col lg:flex-row justify-between"}>

          <div className={"flex flex-row"}>
              <Image className={"w-10 h-10 mr-8"} src={videoIcon} alt={" Video Icon "}/>

              <h1 className={"font-semibold text-zinc-800 text-base lg:text-xl h-fit my-auto"}>
                  { singleVideoData.videoTitle }
              </h1>

          </div>

          <Link href={`/course/${courseUrl}/${singleVideoData.id}`} className={"flex flex-row justify-center mt-2 lg:mt-0"}>

              <button className={"bg-secondary-dark hover:bg-secondary-medium transition-all ease-in-out rounded-3xl py-3 text-center text-md font-semibold text-white lg:text-xl w-72"}>
                  Watch Video
              </button>

          </Link>

      </div>
  );
}