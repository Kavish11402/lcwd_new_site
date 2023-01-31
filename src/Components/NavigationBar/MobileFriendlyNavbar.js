import Link from "next/link";
import Image from "next/image";
import lcwdLogo from "@/Assets/Logos/lcwd_logo.png";
import youtubeLogo from "@/Assets/Icons/youtube.png";

export default function MobileFriendlyNavbar( { toggle , navbarState } )
{
  return(
      <div className={"absolute lg:invisible"}>

        <div className={"z-50 fixed top-0 left-0 right-0"}>

            <div className={"flex flex-row justify-between px-2 py-1 backdrop-blur-lg bg-neutral-300/20 drop-shadow-lg"}>
                <div className={"flex flex-col justify-center"}>

                    <Link href={'/'} className={"flex flex-row"}>
                        <Image className={"w-10"} src={lcwdLogo} alt={"LCWD Logo"}/>
                        <h1 className={"ml-5 my-auto font-semibold text-3xl bg-gradient-to-r from-secondary-dark to-primary-dark bg-clip-text text-transparent"}> LCWD </h1>
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

            <div className={`backdrop-blur-lg bg-neutral-300/20 drop-shadow-lg border-b-8 border-primary-dark ${ navbarState? "opacity-100" : "opacity-0" } py-16 rounded-b-xl transition-all duration-200 ease-in-out`}>

                <h1 className={"mx-auto w-fit border-2 border-black"}>Home</h1>
                <h1 className={"mx-auto w-fit border-2 border-black"}>Blogs</h1>
                <h1 className={"mx-auto w-fit border-2 border-black"}>Premium Courses</h1>
                <h1 className={"mx-auto w-fit border-2 border-black"}>Free Courses</h1>
                <h1 className={"mx-auto w-fit border-2 border-black"}>About</h1>
                <h1 className={"mx-auto w-fit border-2 border-black"}>Contact</h1>

                <h1 className={"mx-auto w-fit border-2 border-black text-red-600 flex flex-row"}> <Image className={"h-6 w-6 mr-2 my-auto"} src={youtubeLogo} alt={"LCWD Logo"}/> <p>Youtube</p> </h1>

            </div>

        </div>

      </div>
  );
}