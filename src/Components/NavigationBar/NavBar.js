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