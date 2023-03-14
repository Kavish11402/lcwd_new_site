import Image from "next/image";
import Link from "next/link";


export default function SingleCourse( {bannerImg , bannerTittle , bannerDesc } )
{
    return(

        <div>

            <Link href={`/course/${bannerTittle.toString().split(" ").join("-")}`}>

                <div className={"bg-stone-50 drop-shadow-xl rounded-3xl w-[21rem] smd:w-[22rem] flex flex-col justify-between pb-6 transition-all ease-linear 2xl:hover:scale-105"}>

                    <Image className={"rounded-3xl"} src={bannerImg} alt={"Banner Image"}/>

                    <div className={"px-5 my-5"}>

                        <h1 className={"text-center font-bold text-lg 2xl:text-xl mx-auto"}> {bannerTittle.toString()} </h1>

                        <p className={"text-justify h-[6.5rem] text-zinc-600 mt-3 text-sm 2xl:h-[7.8rem] 2xl:text-base line-clamp-5"}> { bannerDesc.toString() } </p>

                    </div>

                    <Link href={`/course/${bannerTittle.toString().split(" ").join("-")}`} className={"bg-primary-medium hover:bg-primary-light transition-all ease-in-out rounded-3xl py-3 text-center text-md font-semibold text-zinc-600 2xl:text-xl w-56 mx-auto"}>
                        <button> Start Learning </button>
                    </Link>

                </div>

            </Link>

        </div>

);
}
