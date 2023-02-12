import Image from "next/image";

export default function ExplanationCard({ icon , title , description })
{
  return(
      <div className={"w-[20rem] flex flex-col justify-center py-2 rounded-xl border-b-secondary-medium border-b-8 drop-shadow-xl bg-stone-100 sm:w-[28rem] sm:py-4 mx-auto lg:mx-0"} >

        <div className={"w-fit mt-3 mx-auto"}>
          <Image className={"w-20 lg:w-28 rounded-xl"} src={icon} alt={"Video Image"} />
        </div>

        <div className={"text-center w-full mt-3 font-bold text-xl lg:w-72 lg:mt-5 lg:text-3xl mx-auto"}>
          {title}
        </div>

        <div className={"px-3 text-center h-[5.6rem] line-clamp-3 text-zinc-600 text-sm mt-3 mx-auto lg:text-lg lg:mt-4"}>
            {description}
        </div>
      </div>
  );
}