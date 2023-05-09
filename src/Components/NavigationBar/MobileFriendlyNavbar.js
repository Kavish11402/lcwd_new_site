import Link from "next/link";
import Image from "next/image";
import lcwdLogo from "@/Assets/Logos/lcwd_logo.png";
import youtubeLogo from "@/Assets/Icons/youtube.png";

export default function MobileFriendlyNavbar( { toggle , navbarState } )
{
  return(
      <div className={"absolute lg:invisible"}>

        <div className={"z-50 fixed top-0 left-0 right-0 backdrop-blur-lg rounded-b-xl bg-neutral-300/20"}>

            <div className={`flex flex-row justify-between px-2 py-1 h-16 `}>

                <div className={"flex flex-col justify-center"}>

                    <Link href={'/'} className={"flex flex-row"}>
                        <Image className={"w-12"} src={lcwdLogo} alt={"LCWD Logo"}/>
                        <h1 className={"ml-5 my-auto font-semibold text-[2rem] bg-gradient-to-r from-secondary-dark to-primary-dark bg-clip-text text-transparent"}> LCWD </h1>
                    </Link>

                </div>

                <div className={"flex flex-col justify-center"} onClick={ ()=>{ toggle() } }>
                    {
                        navbarState?

                            <svg className="w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                            </svg>

                            :

                            <svg className="w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                            </svg>
                    }
                </div>

            </div>

            <div className={`backdrop-blur-lg border-b-8 border-primary-dark ${ navbarState? "block" : "hidden" } py-10 rounded-b-xl`}>



                <Link href={'/'} onClick={ ()=>{ toggle() } }>
                    <h1 className={"mb-3 bg-primary-light hover:bg-primary-medium mx-auto w-48 py-0.5 rounded-xl text-center text-lg font-semibold"}>
                        Home
                    </h1>
                </Link>



                <Link href={"/blogs"} onClick={ ()=>{ toggle() } } >
                    <h1 className={"mb-3 bg-primary-light mx-auto w-48 py-0.5 rounded-xl text-center text-lg font-semibold"}>
                        Blogs
                    </h1>
                </Link>



                <Link target={'_blank'} href={"https://courses.learncodewithdurgesh.com/learn"} onClick={ ()=>{ toggle() } }>
                    <h1 className={"mb-3 bg-primary-light mx-auto w-48 py-0.5 rounded-xl text-center text-lg font-semibold"}>
                        Premium Courses
                    </h1>
                </Link>



                <Link href={"/courses"} onClick={ ()=>{ toggle() } }>
                    <h1 className={"mb-3 bg-primary-light mx-auto w-48 py-0.5 rounded-xl text-center text-lg font-semibold"}>
                        Free Courses
                    </h1>
                </Link>



                <Link href={"/aboutus"} onClick={ ()=>{ toggle() } } >
                    <h1 className={"mb-3 bg-primary-light mx-auto w-48 py-0.5 rounded-xl text-center text-lg font-semibold"}>
                        About
                    </h1>
                </Link>



                <Link href={"/contact-us"} onClick={ ()=>{ toggle() } } >
                    <h1 className={"mb-3 bg-primary-light mx-auto w-48 py-0.5 rounded-xl text-center text-lg font-semibold"}>
                        Contact
                    </h1>
                </Link>



                <Link className={"bg-primary-light mx-auto w-48 py-0.5 rounded-xl text-lg font-semibold text-red-600 flex flex-row justify-center"} target={`_blank`} href={`https://www.youtube.com/learncodewithdurgesh`} onClick={ ()=>{ toggle() } }>
                    <Image className={"h-6 w-6 mr-2 my-auto"} src={youtubeLogo} alt={"Youtube Logo"}/>
                    <p>
                        Youtube
                    </p>
                </Link>


            </div>

        </div>

      </div>
  );
}