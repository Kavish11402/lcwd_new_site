import Image from "next/image";
import videoIcon from "@/Assets/Icons/watchVideo.png";
import Link from "next/link";

export default function PlayerCourseCard({ singleVideo , setVideoDetail , selected , courseOverview })
{
    const replaceData = {
        youtube_embed_Id : singleVideo.get_video_id ,
        video_id : singleVideo.id
    }
  return(
      <Link href={`/course/${courseOverview}/${singleVideo.id}`} className={`${ selected ? 'bg-cyan-400' : 'bg-primary-light hover:bg-primary-medium'  } cursor-pointer w-full transition-all ease-linear rounded-3xl p-4 flex flex-col lg:flex-row justify-between`} onClick={ ()=>{ setVideoDetail(replaceData) } } title={`${ selected ? 'You are Already Watching this video' : 'Click here to Watch Video'  }`} >
              <div className={"flex flex-row"}>
                  <Image className={"w-9 h-9 lg:w-10 lg:h-10 my-auto mr-8"} src={videoIcon} alt={" Video Icon "}/>
                  <h1 className={"font-semibold text-zinc-800 text-base lg:text-lg h-fit my-auto"}> { singleVideo.videoTitle } </h1>
              </div>
      </Link>
  );
}