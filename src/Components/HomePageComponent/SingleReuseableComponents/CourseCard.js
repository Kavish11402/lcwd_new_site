import Image from "next/image";
import Link from "next/link";

function imageGenerator(type , bannerImage)
{
    if(type==="api")
    {
        return (
            <img className={"w-72 rounded-xl"} src={`${bannerImage}`} alt={"Video Image"} />
        )
    }
    return(
        <Image className={"w-72 rounded-xl"} src={bannerImage} alt={"Video Image"} />
    )
}

export default function CourseCard({bannerImage , bannerTitle , bannerDescription , fullLink , activeStatus , data })
{
    return(
        <div className={"transition-all ease-linear lg:hover:scale-105 border-y-primary-medium border-y-4 mx-auto w-[20rem] flex flex-col justify-around py-5 px-2 rounded-xl drop-shadow-xl bg-card-color lg:w-[23rem] lg:h-[35rem] lg:px-6 lg:mx-0"} >

            {/* Image */}
            <div className={"w-fit mx-auto relative overflow-clip"}>

                <div className={"absolute border-8 -left-1 -right-1 -top-1 -bottom-1 border-card-color rounded-2xl z-50"}></div>

                {
                    !activeStatus&&
                        <div className={"z-40 absolute rotate-[30deg] top-[4.5rem] -left-[3rem] bg-emerald-500/80 text-white capitalize text-2xl font-bold w-96 py-3 text-center"}>
                            Upcoming
                        </div>
                }

                {
                    imageGenerator(data , bannerImage)
                }

            </div>

            {/* Divider */}
            <div className={"mt-8 mb-3 rounded-full border border-gray-400 mx-3"}></div>

            {/* Tittle */}
            <div className={" w-72 font-bold text-lg lg:text-md mx-auto"}>
                {bannerTitle}
            </div>

            {/* Description */}
            <div className={"line-clamp-5 w-72 h-[6.3rem] text-zinc-600 mt-3 mx-auto text-sm lg:h-[7.8rem] lg:text-base"}>
                {bannerDescription}
            </div>

            {/* Divider */}
            <div className={"mb-6 mt-3 rounded-full border border-gray-400 mx-3"}></div>

            {/* Button */}
            <div>

                {
                    activeStatus?
                        <Link href={`${fullLink}`} target={"_blank"}>
                            <h1 title={"Click To Checkout This Course"} className={"bg-primary-medium hover:bg-amber-300 transition-all ease-in-out rounded-md py-2 text-center text-md font-semibold text-zinc-600 lg:px-16 lg:text-xl"} >
                                Go To Course
                            </h1>
                        </Link>
                        :
                        <h1 title={"This Course Will be Launched Soon"} className={"cursor-not-allowed bg-stone-400 transition-all ease-in-out rounded-md py-2 text-center text-md font-semibold text-zinc-600 lg:px-16 lg:text-xl"} >
                            Upcoming..
                        </h1>
                }

            </div>

        </div>
    );
}