import '@/styles/globals.css'
import NavBar from "@/Components/NavigationBar/NavBar";
import Footer from "@/Components/FooterComponents/Footer";

export default function App({ Component, pageProps })
{
  return (
      <div className={"select-none"}>
          <NavBar/>
          <Component {...pageProps} />
          <Footer/>
      </div>
  );
}

