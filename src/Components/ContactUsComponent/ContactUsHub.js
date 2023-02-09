import Link from "next/link";
import Image from "next/image";
import {Tab , RadioGroup} from "@headlessui/react";



import instagramLogo from"@/Assets/Icons/instagram.png";
import facebookLogo from"@/Assets/Icons/facebook.png";
import linkedinLogo from"@/Assets/Icons/linkedin.png";
import youtubeLogo from"@/Assets/Icons/youtube.png";
import lcwdLogo from "../../Assets/Logos/lcwd_logo.png"
import {useState} from "react";



function CheckIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx={12} cy={12} r={12} fill="#00FF00" opacity="0.7" />
            <path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}



export default function ContactUsHub()
{
    const [selectedOption , setSelectedOption] = useState("");


    return(
        <div className={"relative"}>

            <div className={"absolute -z-30 top-0 right-0 left-0 bg-contactBannerImg bg-bottom bg-cover brightness-90 h-[36rem]"}></div>

            <div className={"z-40 pt-16 lg:pt-12"}>

                {/* border-l-8 border-r-8 border-primary-dark */}
                <div className={"rounded-3xl drop-shadow-2xl w-80 lg:w-fit mx-auto bg-zinc-400/30 lg:bg-zinc-300/40 backdrop-blur-2xl py-4 mb-16"}>

                  <Image className={"w-36 lg:w-48 mx-auto"} src={lcwdLogo} alt={"LCWD Logo"}/>

                  <h1 className={"text-center text-primary-dark text-4xl lg:text-7xl font-semibold px-5 lg:px-24 mt-3"}>Feel Free to Contact Us</h1>

                  <h1 className={"text-center text-white px-5 lg:px-0 font-semibold lg:text-2xl my-4"}>Kindly Follow Us on Different Social Medias</h1>

                  <div className={"rounded-full border-[1px] border-white"}></div>

                  <div className={"flex flex-row justify-center space-x-7 lg:space-x-16 px-5 lg:px-0 my-6"}>

                      <Link href={`https://instagram.com/durgesh_k_t`} rel={'noreferrer'} target={'_blank'}>
                          <Image className={"w-16 transition-all ease-linear hover:-translate-y-2"} src={instagramLogo} alt={"Instagram Logo"}/>
                      </Link>

                      <Link href={`https://www.youtube.com/learncodewithdurgesh`} rel={"noreferrer"} target={'_blank'}>
                          <Image className={"w-16 transition-all ease-linear hover:-translate-y-2"} src={youtubeLogo} alt={"Youtube Logo"}/>
                      </Link>

                      <Link href={`https://www.linkedin.com/in/durgeshkumartiwari/`} rel={'noreferrer'} target={'_blank'}>
                          <Image className={"w-16 transition-all ease-linear hover:-translate-y-2"} src={linkedinLogo} alt={"Linkedin Logo"}/>
                      </Link>

                      <Link href={`https://www.facebook.com/learncodewithdurgesh`} rel={'noreferrer'} target={'_blank'}>
                          <Image className={"w-16 transition-all ease-linear hover:-translate-y-2"} src={facebookLogo} alt={"Facebook Logo"}/>
                      </Link>

                  </div>

                  <div className={"rounded-full border-[1px] border-white"}></div>

                </div>

                <Tab.Group defaultIndex={1}>

                    <Tab.List className={"flex flex-row justify-center"}>

                        <div className={"flex flex-col lg:flex-row justify-center w-fit bg-primary-medium/30 p-2 rounded-xl space-y-2 lg:space-x-2"}>

                            {/* Student Enquiry Button */}
                            <Tab className={"transition-all ease-linear w-80 rounded-xl py-2.5 text-xl font-medium text-secondary-dark outline-0 border-2 border-transparent" +
                                            " ui-selected:bg-white ui-selected:shadow ui-selected:border-secondary-dark" +
                                            " ui-not-selected:text-gray-400 ui-not-selected:hover:bg-white/[0.5] ui-not-selected:hover:text-secondary-dark"}>
                                Student Query
                            </Tab>

                            {/* Corporate Query Button */}
                            <Tab className={"transition-all ease-linear w-80 rounded-xl py-2.5 text-xl font-medium text-secondary-dark outline-0 border-2 border-transparent" +
                                            " ui-selected:bg-white ui-selected:shadow ui-selected:border-secondary-dark" +
                                            " ui-not-selected:text-gray-400 ui-not-selected:hover:bg-white/[0.5] ui-not-selected:hover:text-secondary-dark"}>
                                Corporate Enquiry
                            </Tab>
                        </div>

                    </Tab.List>

                    <Tab.Panels className={"mt-4"}>

                        {/* Student Enquiry Form */}
                        <Tab.Panel>
                            <div className={"flex flex-col justify-center items-center h-[38rem] lg:h-[46rem]"}>
                                <div className={"drop-shadow-2xl bg-white w-[90%] rounded-3xl lg:px-20 lg:w-1/2 lg:py-5"}>
                                    <header className={" mt-5 text-center "}>
                                      <h1 className={"font-bold  text-2xl lg:text-3xl xl:text-5xl"}>Student Enquiry</h1>
                                      <div className={"font-semibold mt-5 xl:mt-10 text-gray-500 text-sm lg:text-base"}>
                                          <p>Feel free to reach out to us if you have a query related to any course or product that we offer, our associates are available on chat 24/7.</p>
                                      </div>
                                  </header>
                                    <main className={"mt-8 flex flex-col"}>
                                        <form className={"flex flex-col mx-5 lg:mx-0"} >

                                            {/*Student's Name*/}
                                            <div className={"relative flex flex-col mb-5 xl:mb-8"}>
                                                <span className={"pl-3 absolute inset-y-0 left-0 flex items-center text-gray-500"}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/>
                                                    </svg>
                                                </span>
                                                <input className={"pl-12 rounded-lg border-0 ring-2 ring-gray-400 transition hover:ring-primary-medium focus:ring-2 focus:ring-primary-dark transition-all ease-linear"} required type="text" placeholder={"Full Name"}/>
                                            </div>

                                            {/*Student's Email*/}
                                            <div className={"relative flex flex-col mb-5 xl:mb-8"}>
                                                <span className={"pl-3 absolute inset-y-0 left-0 flex items-center text-gray-500"}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                                    </svg>
                                                </span>
                                                <input className={"pl-12 rounded-lg border-0 ring-2 ring-gray-400 transition hover:ring-primary-medium focus:ring-2 focus:ring-primary-dark transition-all ease-linear"} required type="email" placeholder={"Email Address"}/>
                                            </div>

                                            {/*Student Query Text Area*/}
                                            <div className={"relative flex flex-col mb-5 xl:mb-8"}>
                                                <span className={"pl-3 absolute inset-y-2 left-0 flex items-center text-gray-500 flex flex-col "}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" >
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/>
                                                    </svg>
                                                </span>
                                                <textarea rows="5" className={"resize-none pl-12 rounded-lg border-0 ring-2 ring-gray-400 transition hover:ring-primary-medium focus:ring-2 focus:ring-primary-dark transition-all ease-linear"} required placeholder={"Your Message"}/>
                                            </div>

                                            <button className={"my-5 bg-primary-medium hover:bg-primary-dark transition-all ease-linear py-3 rounded-lg "} type={"submit"} >Submit</button>

                                        </form>
                                  </main>
                              </div>
                          </div>
                        </Tab.Panel>

                        {/* Corporate Query Form */}
                        <Tab.Panel>
                            <div className={"flex flex-col justify-center items-center h-[58rem] lg:h-[65rem]"}>
                                <div className={"drop-shadow-2xl bg-white w-[90%] rounded-3xl lg:px-20 lg:w-1/2 lg:py-5"}>
                                    <header className={" mt-5 text-center "}>
                                        <h1 className={"font-bold  text-2xl lg:text-3xl xl:text-5xl"}>Corporate Enquiry</h1>
                                        <div className={"font-semibold mt-5 xl:mt-10 text-gray-500 text-sm lg:text-base"}>
                                            <p>For any Corporate training/College training requirement please reach out to us on <b>learncodewithdurgesh@gmail.com</b> </p>
                                        </div>
                                    </header>
                                    <main className={"mt-8 flex flex-col"}>
                                        <form className={"flex flex-col mx-5 lg:mx-0"}>

                                            {/*Organization's Name*/}
                                            <div className={"relative flex flex-col mb-5 xl:mb-8"}>
                                                <span className={"pl-3 absolute inset-y-0 left-0 flex items-center text-gray-500"}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/>
                                                    </svg>
                                                </span>
                                                <input className={"pl-12 rounded-lg border-0 ring-2 ring-gray-400 transition hover:ring-primary-medium focus:ring-2 focus:ring-primary-dark transition-all ease-linear"} required type="text" placeholder={"Organization Name"}/>
                                            </div>

                                            {/*Organization's Email*/}
                                            <div className={"relative flex flex-col mb-5 xl:mb-8"}>
                                                <span className={"pl-3 absolute inset-y-0 left-0 flex items-center text-gray-500"}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                                    </svg>
                                                </span>
                                                <input className={"pl-12 rounded-lg border-0 ring-2 ring-gray-400 transition hover:ring-primary-medium focus:ring-2 focus:ring-primary-dark transition-all ease-linear"} required type="email" placeholder={"Organization Email Address"}/>
                                            </div>

                                            {/*Organization's Contact Number*/}
                                            <div className={"relative flex flex-col mb-5 xl:mb-8"}>
                                                <span className={"pl-3 absolute inset-y-0 left-0 flex items-center text-gray-500"}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                                    </svg>
                                                </span>
                                                <input className={"pl-12 rounded-lg border-0 ring-2 ring-gray-400 transition hover:ring-primary-medium focus:ring-2 focus:ring-primary-dark transition-all ease-linear"} required type="number" placeholder={"Organization Contact No."}/>
                                            </div>

                                            {/*Organization Contacting for what?*/}
                                            <div className={"relative flex flex-row mb-5 xl:mb-8"}>

                                                <div className={"w-2/5 flex flex-col justify-start"}>
                                                    <h1>Why Choosing Us ?</h1>
                                                    <p className={"text-sm text-gray-500"}>Choose any one</p>
                                                </div>

                                                <div className={"w-full"}>
                                                    <RadioGroup value={ selectedOption } onChange={ setSelectedOption }>
                                                        <div className="space-y-2">

                                                            <RadioGroup.Option value={"Development"} className={({ checked }) => `${ checked ? 'bg-primary-dark bg-opacity-75 text-white' : 'bg-white' } relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none  ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-primary-light`}>
                                                                {({ checked }) => (
                                                                    <>
                                                                        <div className="flex w-full items-center justify-between">
                                                                            <div className="flex items-center">
                                                                                <div className="text-md">
                                                                                    <RadioGroup.Label as="p" className={`font-medium  ${ checked ? 'text-white' : 'text-gray-900' }`}>Development</RadioGroup.Label>
                                                                                </div>
                                                                            </div>
                                                                            {checked && ( <div className="shrink-0 text-white"> <CheckIcon className="h-6 w-6" /> </div> )}
                                                                        </div>
                                                                    </>
                                                                )}
                                                            </RadioGroup.Option>

                                                            <RadioGroup.Option value={"Corporate Training"} className={({ checked }) => `${ checked ? 'bg-primary-dark bg-opacity-75 text-white' : 'bg-white' } relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none  ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-primary-light`}>
                                                                {({ checked }) => (
                                                                    <>
                                                                        <div className="flex w-full items-center justify-between">
                                                                            <div className="flex items-center">
                                                                                <div className="text-md">
                                                                                    <RadioGroup.Label as="p" className={`font-medium  ${ checked ? 'text-white' : 'text-gray-900' }`}>Corporate Training</RadioGroup.Label>
                                                                                </div>
                                                                            </div>
                                                                            {checked && ( <div className="shrink-0 text-white"> <CheckIcon className="h-6 w-6" /> </div> )}
                                                                        </div>
                                                                    </>
                                                                )}
                                                            </RadioGroup.Option>

                                                            <RadioGroup.Option value={"College Training"} className={({ checked }) => `${ checked ? 'bg-primary-dark bg-opacity-75 text-white' : 'bg-white' } relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none  ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-primary-light`}>
                                                                {({ checked }) => (
                                                                    <>
                                                                        <div className="flex w-full items-center justify-between">
                                                                            <div className="flex items-center">
                                                                                <div className="text-md">
                                                                                    <RadioGroup.Label as="p" className={`font-medium  ${ checked ? 'text-white' : 'text-gray-900' }`}>College Training</RadioGroup.Label>
                                                                                </div>
                                                                            </div>
                                                                            {checked && ( <div className="shrink-0 text-white"> <CheckIcon className="h-6 w-6" /> </div> )}
                                                                        </div>
                                                                    </>
                                                                )}
                                                            </RadioGroup.Option>

                                                            <RadioGroup.Option value={"Seminar"} className={({ checked }) => `${ checked ? 'bg-primary-dark bg-opacity-75 text-white' : 'bg-white' } relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none  ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-primary-light`}>
                                                                {({ checked }) => (
                                                                    <>
                                                                        <div className="flex w-full items-center justify-between">
                                                                            <div className="flex items-center">
                                                                                <div className="text-md">
                                                                                    <RadioGroup.Label as="p" className={`font-medium  ${ checked ? 'text-white' : 'text-gray-900' }`}>Seminar</RadioGroup.Label>
                                                                                </div>
                                                                            </div>
                                                                            {checked && ( <div className="shrink-0 text-white"> <CheckIcon className="h-6 w-6" /> </div> )}
                                                                        </div>
                                                                    </>
                                                                )}
                                                            </RadioGroup.Option>

                                                        </div>
                                                    </RadioGroup>
                                                </div>

                                            </div>

                                            {/*Organization Service Description*/}
                                            <div className={"relative flex flex-col mb-5 xl:mb-8"}>
                                                <span className={"pl-3 absolute inset-y-2 left-0 flex items-center text-gray-500 flex flex-col "}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" >
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/>
                                                    </svg>
                                                </span>
                                                <textarea rows="5" className={"resize-none pl-12 rounded-lg border-0 ring-2 ring-gray-400 transition hover:ring-primary-medium focus:ring-2 focus:ring-primary-dark transition-all ease-linear"} required placeholder={"Your Message"}/>
                                            </div>

                                            <button className={"my-5 bg-primary-medium hover:bg-primary-dark transition-all ease-linear py-3 rounded-lg "} type={"submit"}>Submit</button>

                                        </form>
                                    </main>
                                </div>
                            </div>
                        </Tab.Panel>

                    </Tab.Panels>

                </Tab.Group>

            </div>

        </div>
    );
}