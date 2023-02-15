import Image from "next/image";

export default function SingleService({ bannerImg , Heading , message })
{
  return(
      <div className={"flex flex-col justify-center py-2 rounded-xl border-b-primary-medium border-b-8 drop-shadow-xl bg-stone-100 w-[20rem] sm:w-[30rem] md:w-[35rem] lg:w-[55rem] sm:py-4 mx-auto"} >

          <div className={"w-fit mt-3 mx-auto"}>
              <Image className={"w-20 lg:w-28 rounded-xl"} src={bannerImg} alt={"Video Image"} />
          </div>

          <div className={"text-center w-full mt-3 font-bold lg:mt-8 mx-auto underline underline-offset-8 text-2xl lg:text-4xl"}>
              {Heading}
          </div>

          <div className={"px-3 text-center h-[8rem] text-zinc-600 text-sm mt-3 mx-auto lg:text-lg lg:mt-8"}>
              {message}
          </div>
      </div>
  );
}