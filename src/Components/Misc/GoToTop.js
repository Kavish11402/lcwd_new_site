import {useEffect, useState} from "react";

export default function GoToTop()
{
      const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 300;
    const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

    return (
        <div className={"fixed top-0 left-0 right-0 h-screen -z-50"}>


            <div className={"h-full w-full relative -z-50"}>





                {
                    isVisible &&
                    <div onClick={ ()=>{ goToBtn() } } className={"z-50 absolute bottom-6 right-6 bg-primary-medium rounded-full overflow-clip p-3 cursor-pointer"}>


                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                             stroke="currentColor" className="w-10 h-10 animate-bounce">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"/>
                        </svg>


                    </div>
                }


















            </div>


        </div>
    );
}