import Image from "next/image";
import lcwdLogo from "../../Assets/Logos/lcwd_logo.png"
import youtubeLogo from "../../Assets/Icons/youtube.png"
import Link from "next/link";
import {useState} from "react";
import DesktopNavBar from "@/Components/NavigationBar/DesktopNavBar";
import MobileFriendlyNavbar from "@/Components/NavigationBar/MobileFriendlyNavbar";

export default function NavBar()
{
    const [navbarState , setNavbarState] = useState(false);

    const toggle = () => { setNavbarState(!navbarState) }

    return(
        <div>
            <DesktopNavBar/>
            <MobileFriendlyNavbar navbarState={navbarState} toggle={toggle}/>
        </div>
    );
}