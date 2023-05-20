import {useEffect, useState} from "react";


export default function GoToTop()
{
      const [isVisible, setIsVisible] = useState(false);
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 300;
    const winScroll =  document.body.scrollTop || document.documentElement.scrollTop;

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
        ( isVisible ) &&
        <div className={"fixed top-[90%] right-8 z-50 bg-purple-700 rounded-full overflow-clip p-3 cursor-pointer h-fit w-fit"} onClick={ ()=>{ goToBtn() } } >
          <svg className={"w-6 h-6 md:w-10 md:h-10 text-white animate-bounce"}
               xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"/>
          </svg>
        </div>
    );
}