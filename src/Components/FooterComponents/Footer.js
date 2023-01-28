import lcwdLogo from "@/Assets/Logos/lcwd_logo.png";
import facebookLogo from "@/Assets/Icons/facebook.png";
import instagramLogo from "@/Assets/Icons/instagram.png";
import linkedinLogo from "@/Assets/Icons/linkedin.png";
import youtubeLogo from "@/Assets/Icons/youtube.png";
import Image from "next/image";

export default function Footer()
{

  return(
      <div className={"bg-primary-light text-gray-700 py-5 cursor-default underline-offset-4 selection:bg-secondary-dark selection:text-white "} >

          {/* Info Section */}
          <div className={"flex flex-row justify-center"}>

              {/* About Section */}
              <div className={"flex flex-col w-72  mr-52"}>
                  {/* TODO -> lINK THIS IMAGE TO THE ABOUT (Component) SECTION */}
                  <Image className={"w-24 mx-auto mb-2"} src={lcwdLogo} alt={"LCWD LOGO"} />
                  <h1 className={"font-bold text-xl text-center underline mb-3"}> Learn Code With Durgesh </h1>
                  <p className={"text-justify"}>
                      This Channel provide you a technical content like Java Programming , Python
                      Programming , C Programming , PHP Programing , Android Development etc. Lean how to
                      make software here.
                  </p>
            </div>

              {/* Products */}
              <div className={"flex flex-col justify-around py-4 px-3 mr-20"}>
                  <h1 className={"font-semibold text-xl text-center underline"}> Products </h1>

                  <div>
                      {/* TODO -> LINK THESE COURSES */}
                      <p className={"mb-5"}>• Spring Boot Course </p>
                      <p className={"mb-5"}>• Spring Boot Project Course </p>
                      <p className={"mb-5"}>• Crash Courses </p>
                      <p>• Advance Java J2EE </p>
                  </div>

              </div>

              {/* Contact */}
              <div className={"flex flex-col justify-around py-4 px-3"}>

                  <h1 className={"font-semibold text-xl text-center underline"}> Contact </h1>


                  <div className={"flex flex-row"}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-4">
                          <path fillRule="evenodd"
                                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                                clipRule="evenodd"
                          />
                      </svg>
                      <p> Uttar Pradesh, India </p>
                  </div>


                  <div className={"flex flex-row"}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-4">
                          <path
                              d="M19.5 22.5a3 3 0 003-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 01-.712 1.321l-5.683-3.06a1.5 1.5 0 00-1.422 0l-5.683 3.06a.75.75 0 01-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 003 3h15z"/>
                          <path
                              d="M1.5 9.589v-.745a3 3 0 011.578-2.641l7.5-4.039a3 3 0 012.844 0l7.5 4.039A3 3 0 0122.5 8.844v.745l-8.426 4.926-.652-.35a3 3 0 00-2.844 0l-.652.35L1.5 9.59z"/>
                      </svg>
                      <p> learncodewithdurgesh@gmail.com </p>
                  </div>


                  <div className={"flex flex-row"}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-4">
                          <path fillRule="evenodd"
                                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                clipRule="evenodd"/>
                      </svg>
                      <p> + 01 234 567 88 </p>
                  </div>


                  <div className={"flex flex-row"}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-4">
                          <path fillRule="evenodd"
                                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                clipRule="evenodd"
                          />
                      </svg>
                      <p>+ 01 234 567 89</p>
                  </div>
              </div>

              {/* Horizontal Divider Line */}
              <div className={"rounded-full my-5 border-[1px] border-black mx-20"}></div>

              {/* Get in Touch Section */}
              <div className={"flex flex-col justify-around py-4 px-3"}>

                  <h1 className={"font-semibold text-xl text-center underline"}> Get In Touch </h1>

                  <div className={"flex flex-row mr-24"}>
                      <Image className={"w-6 mr-4"} src={youtubeLogo} alt={"youtubeLogo"} />
                      <a href={`https://www.youtube.com/learncodewithdurgesh`} rel={"noreferrer"} target={'_blank'}> YouTube </a>
                  </div>

                  <div className={"flex flex-row"}>
                      <Image className={"w-6 mr-4"} src={facebookLogo} alt={"facebookLogo"} />
                      <a href={`https://www.facebook.com/learncodewithdurgesh`} rel={'noreferrer'} target={'_blank'}>Facebook</a>
                  </div>

                  <div className={"flex flex-row"}>
                      <Image className={"w-6 mr-4"} src={instagramLogo} alt={"instagramLogo"} />
                      <a href={`https://instagram.com/durgesh_k_t`} rel={'noreferrer'} target={'_blank'}>Instagram</a>
                  </div>

                  <div className={"flex flex-row"}>
                      <Image className={"w-6 mr-4"} src={linkedinLogo} alt={"linkedinLogo"} />
                      <a href={`https://www.linkedin.com/in/durgeshkumartiwari/`} rel={'noreferrer'} target={'_blank'}>Linkedin</a>
                  </div>

              </div>

          </div>

          {/* Horizontal Line Divider */}
          <div className={"border-[1px] mx-20 border-black my-6"}></div>

          {/* Copyright info section */}
          <div className={"flex flex-row justify-center text-lg"}>
              <p className={"mr-2"}>Copyright © 2023:</p>
              <p className={"font-bold underline mr-2"}>Substring Technologies Pvt Ltd.</p>
              <p>All Rights Reserved.</p>
          </div>

      </div>
  );
}