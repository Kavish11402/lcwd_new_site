import Image from "next/image";

export default function ExplanationCard({ icon , title , description })
{
  return(
      <div className={"w-[20rem] flex flex-col justify-center py-2 rounded-xl border-b-secondary-medium border-b-8 drop-shadow-xl bg-stone-100"} >

        <div className={"w-fit mt-3 mx-auto"}>
          <Image className={"w-20 rounded-xl"} src={icon} alt={"Video Image"} />
        </div>



        <div className={"text-center w-full mt-3 font-bold text-xl"}>
          {title}
        </div>




        <div className={"px-3 text-center min-h-fit max-h-[5.6rem] line-clamp-3 text-zinc-600 text-sm mt-3 mx-auto"}>
          {description}
        </div>
      </div>
  );
}