import Image from "next/image";

export default function ExplanationCard({ icon , title , description })
{
  return(
      <div className={"w-[28rem] flex flex-col justify-center py-4 rounded-xl border-b-secondary-medium border-b-8 drop-shadow-xl bg-stone-50"} >
        <div className={"w-fit mt-3 mx-auto"}>
          <Image className={"w-28 rounded-xl"} src={icon} alt={"Video Image"} />
        </div>
        <div className={"text-center w-72 mt-5 font-bold text-3xl mx-auto"}>
          {title}
        </div>
        <div className={"px-3 text-center min-h-fit max-h-[5.6rem] line-clamp-3 text-zinc-600 text-lg mt-4 mx-auto"}>
          {description}
        </div>
      </div>
  );
}