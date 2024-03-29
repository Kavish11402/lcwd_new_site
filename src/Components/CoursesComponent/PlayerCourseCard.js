import Image from "next/image";
import videoIcon from "@/Assets/Icons/watchVideo.png";
import Link from "next/link";

export default function PlayerCourseCard({ singleVideo , selected , courseOverview })
{
  return(
      <Link href={`/course/${courseOverview}/${singleVideo.id}`} className={`${ selected ? 'bg-cyan-400' : 'bg-primary-light hover:bg-primary-medium'  } cursor-pointer w-full transition-all ease-linear rounded-3xl p-4 flex flex-col lg:flex-row justify-between`} title={`${ selected ? 'You are Already Watching this video' : 'Click here to Watch Video'  }`} >
              <div className={"flex flex-row"}>
                  <Image className={"w-9 h-9 my-auto mr-5"} src={videoIcon} alt={" Video Icon "}/>
                  <h1 className={"font-medium text-zinc-800  h-fit my-auto"}> { singleVideo.videoTitle } </h1>
              </div>
      </Link>
  );
}