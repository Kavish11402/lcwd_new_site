import Image from "next/image";
import videoIcon from "@/Assets/Icons/watchVideo.png";
import Link from "next/link";

export default function PlayerCourseCard({ courseTitle , courseLink })
{
  return(
      <Link href={`${courseLink}`} className={"bg-primary-light w-full rounded-3xl p-4 flex flex-col lg:flex-row justify-between"}>
              <div className={"flex flex-row"}>
                  <Image className={"w-9 h-9 lg:w-10 lg:h-10 my-auto mr-8"} src={videoIcon} alt={" Video Icon "}/>
                  <h1 className={"font-semibold text-zinc-800 text-base lg:text-xl h-fit my-auto"}> { courseTitle } </h1>
              </div>
      </Link>
  );
}