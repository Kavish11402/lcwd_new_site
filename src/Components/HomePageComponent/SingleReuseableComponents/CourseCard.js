import Image from "next/image";
import Link from "next/link";
export default function CourseCard({bannerImage , bannerTitle , bannerDescription , fullLink , activeStatus })
{
    return(
        <div className={"border-b-primary-medium border-t-primary-medium border-b-4 border-t-4 mx-auto w-[20rem] flex flex-col justify-around py-5 px-3 rounded-xl drop-shadow-xl bg-stone-200 lg:w-[22rem] lg:px-6 lg:mx-0"} >

            <div className={"w-fit mx-auto relative overflow-clip"}>

                <div className={"absolute border-8 -left-1 -right-1 -top-1 -bottom-1 border-stone-200 rounded-2xl z-50"}></div>

                {
                    !activeStatus&&
                        <div className={"z-40 absolute rotate-[30deg] top-[4.5rem] -left-[3rem] bg-emerald-500/80 text-white capitalize text-2xl font-bold w-96 py-3 text-center"}>
                            Upcoming
                        </div>
                }

                <Image className={"w-72 rounded-xl"} src={bannerImage} alt={"Video Image"} />
            </div>

            <div className={"mt-8 mb-3 rounded-full border border-gray-400 mx-3"}></div>

            <div className={"text-justify w-72 font-bold text-lg lg:text-xl mx-auto"}>
                {bannerTitle}
            </div>

            <div className={"text-justify w-72 h-[7rem] text-zinc-600 mt-3 mx-auto text-sm lg:h-[10rem] lg:text-base"}>
                {bannerDescription}
            </div>

            <div className={"mb-6 mt-3 rounded-full border border-gray-400 mx-3"}></div>

            <div>

                {
                    activeStatus?
                        <Link target={`_blank`} href={`${fullLink}`}>
                            <h1 title={"Click To Checkout This Course"} className={"bg-primary-medium hover:bg-amber-300 transition-all ease-in-out rounded-md py-2 text-center text-md font-semibold text-zinc-600 lg:px-16 lg:text-xl"} >
                                Go To Video
                            </h1>
                        </Link>
                        :
                        <h1 title={"This Course Will be Launched Soon"} className={"cursor-not-allowed bg-stone-400 transition-all ease-in-out rounded-md py-2 text-center text-md font-semibold text-zinc-600 lg:px-16 lg:text-xl"} >
                            Go To Video
                        </h1>
                }

            </div>

        </div>
    );
}