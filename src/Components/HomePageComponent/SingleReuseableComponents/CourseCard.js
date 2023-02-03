import Image from "next/image";
import Link from "next/link";
export default function CourseCard({bannerImage , bannerTitle , bannerDescription , bannerVideoID })
{
    return(
        <div className={"border-2 border-black mx-auto w-[20rem] flex flex-col justify-center py-5 px-3 rounded-xl drop-shadow-xl bg-stone-100 lg:w-[22rem] lg:px-6 lg:mx-0"} >

            <div className={"w-fit mx-auto"}>
                <Image className={"w-72 rounded-xl"} src={bannerImage} alt={"Video Image"} />
            </div>

            <div className={"mt-8 mb-3 rounded-full border-[1px] border-gray-400 mx-3"}></div>


            <div className={"text-justify w-72 font-bold text-lg lg:text-xl mx-auto"}>
                {bannerTitle}
            </div>

            <div className={"text-justify w-72 h-[4rem] line-clamp-3 text-zinc-600 mt-3 mx-auto text-sm lg:h-[4.5rem] lg:text-base"}>
                {bannerDescription}
            </div>

            <div className={"mb-6 mt-3 rounded-full border-[1px] border-gray-400 mx-3"}></div>


            <div>
                <Link target={`_blank`} href={`https://www.youtube.com/watch?v=${bannerVideoID}`}>
                    <h1 className={"bg-primary-medium hover:bg-amber-300 transition-all ease-in-out rounded-md py-2 text-center text-lg font-semibold text-zinc-600 lg:px-16 lg:text-xl"} >
                        Go To Video
                    </h1>
                </Link>
            </div>


        </div>
    );
}