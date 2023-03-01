import Image from "next/image";
import videoIcon from "@/Assets/Icons/watchVideo.png";
import Link from "next/link";

export default function SingleCourseOverview({ courseTitle , courseLink })
{
  return(
      <div className={"bg-primary-light w-full rounded-3xl p-5 flex flex-row justify-between"}>

          <div className={"flex flex-row"}>
              <Image className={"w-12 h-12 mr-8"} src={videoIcon} alt={" Video Icon "}/>
              <h1 className={"font-semibold text-zinc-800 text-xl h-fit my-auto"}>
                  { courseTitle }
              </h1>
          </div>

          <Link href={`${courseLink}`}>
              <button className={"bg-secondary-dark hover:bg-secondary-medium transition-all ease-in-out rounded-3xl py-3 text-center text-md font-semibold text-white lg:text-xl w-72"}>
                  Watch Video
              </button>
          </Link>

      </div>
  );
}