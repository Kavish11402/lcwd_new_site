import HeroCard from "@/Components/MasterTemplets/HeroCard";
import ShortBlogCard from "@/Components/BlogsComponent/ShortBlogCard";
import {Menu, Transition} from "@headlessui/react";
import {Fragment} from "react";


export default function BlogsHub()
{
    return(
        <div className={"w-screen lg:w-auto overflow-x-clip lg:overflow-x-visible"}>
            <HeroCard showLogo={false} backgroundCss={"bg-blogBannerImg"} title={"Blogs"} subTitle={"Exiting And Hot Topics in Detail"} showSocialMedia={true} />

            <div className={"flex flex-col md:flex-row"}>

                <div className={"hidden md:block w-60 relative bg-stone-50 drop-shadow-xl "}>

                    <div className={"sticky top-28 mx-5"}>

                        <div className={"w-fit py-2 mx-auto font-semibold text-primary-dark my-5 text-3xl flex flex-row space-x-1"}>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3"
                                 stroke="currentColor" className="w-6 h-auto">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15"/>
                            </svg>

                            <h1 className={"underline underline-offset-4"}>Categories</h1>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3"
                                 stroke="currentColor" className="w-6 h-auto">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15"/>
                            </svg>
                        </div>

                        <div className={"text-secondary-dark text-lg space-y-4"}>

                            <div className={"flex flex-row cursor-pointer transition-all ease-linear hover:text-green-600"}>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                     stroke="currentColor" className="w-6 h-auto">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                                </svg>

                                <p className={"transition-all ease-linear font-semibold hover:-translate-y-1"}>All Blogs</p>

                            </div>

                            <div className={"flex flex-row cursor-pointer transition-all ease-linear hover:text-green-600"}>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                     stroke="currentColor" className="w-6 h-auto">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                                </svg>

                                <p className={"transition-all ease-linear font-semibold hover:-translate-y-1"}>Technology</p>

                            </div>

                            <div className={"flex flex-row cursor-pointer transition-all ease-linear hover:text-green-600"}>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                     stroke="currentColor" className="w-6 h-auto">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                                </svg>

                                <p className={"transition-all ease-linear font-semibold hover:-translate-y-1"}>Food</p>

                            </div>

                            <div className={"flex flex-row cursor-pointer transition-all ease-linear hover:text-green-600"}>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                     stroke="currentColor" className="w-6 h-auto">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                                </svg>

                                <p className={"transition-all ease-linear font-semibold hover:-translate-y-1"}>Cars</p>

                            </div>

                            <div className={"flex flex-row cursor-pointer transition-all ease-linear hover:text-green-600"}>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                     stroke="currentColor" className="w-6 h-auto">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                                </svg>

                                <p className={"transition-all ease-linear font-semibold hover:-translate-y-1"}>Kitchen</p>

                            </div>

                            <div className={"flex flex-row cursor-pointer transition-all ease-linear hover:text-green-600"}>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                     stroke="currentColor" className="w-6 h-auto">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                                </svg>

                                <p className={"transition-all ease-linear font-semibold hover:-translate-y-1"}>Aviation</p>

                            </div>

                        </div>

                    </div>

                </div>

                <div className={"md:hidden z-50 flex flex-row justify-end p-4"}>

                    <Menu as="div" className={"relative"}>

                        <div>
                            <Menu.Button className={"text-xl font-semibold rounded-md bg-black bg-opacity-20 px-4 py-2"}>
                                Categories
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg bg-primary-light">
                                <div className={"flex flex-col justify-center p-2 divide-y-2 "}>

                                    <Menu.Item className={"py-3"}>
                                        <button className={"text-xl font-medium"}>
                                            All Blogs
                                        </button>
                                    </Menu.Item>

                                    <Menu.Item className={"py-3"}>
                                        <button className={"text-xl font-medium"}>
                                            Technology
                                        </button>
                                    </Menu.Item>

                                    <Menu.Item className={"py-3"}>
                                        <button className={"text-xl font-medium"}>
                                            Food
                                        </button>
                                    </Menu.Item>

                                    <Menu.Item className={"py-3"}>
                                        <button className={"text-xl font-medium"}>
                                            Cars
                                        </button>
                                    </Menu.Item>

                                    <Menu.Item className={"py-3"}>
                                        <button className={"text-xl font-medium"}>
                                            Kitchen
                                        </button>
                                    </Menu.Item>

                                    <Menu.Item className={"py-3"}>
                                        <button className={"text-xl font-medium"}>
                                            Aviation
                                        </button>
                                    </Menu.Item>

                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>

                </div>


                <div className={"w-full md:w-[85%] space-y-20 p-8 md:p-16 mx-auto"}>


                    <div className={"w-[50%] mx-auto"}>

                        <div className={"relative my-2 drop-shadow-2xl"}>

                            <span className={"absolute inset-y-0 flex items-center pl-3"} >

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                    />
                                </svg>

                            </span>

                            <input className={"w-full h-12 pl-12 pr-24 rounded-3xl transition-all border-2 focus:border-secondary-dark focus:outline-0 focus:ring-0 ease-in"} type={"text"} placeholder={"Search For Blog"} />

                            <span className={`  mr-[2.46px]
                                                absolute 
                                                right-0 
                                                inset-y-[2.46px]
                                                flex 
                                                items-center 
                                                px-4 
                                                bg-primary-medium 
                                                hover:bg-primary-light 
                                                transition-all 
                                                ease-in-out 
                                                rounded-r-3xl 
                                                py-2 
                                                text-center 
                                                text-base 
                                                font-semibold 
                                                text-zinc-600 
                                                lg:text-xl`} >

                                <button>
                                    Search
                                </button>

                            </span>

                        </div>

                    </div>



                    <ShortBlogCard blogTitle={"Crucial skills for data analytics"} blogShortDescription={"Data analytics involves utilizing a variety of techniques to make sense of large and complex data sets. This could include collecting data from multiple sources, cleaning and preparing the data, using analytical tools such as Excel or R to uncover insights, and then communicating those findings to others through visualizations and reports. The goal of data analytics is to find useful information and use it to inform decisions and conclusions. People working in data analytics are commonly found in sectors like healthcare, retail, finance, and technology."} />
                    <ShortBlogCard blogTitle={"The role of blockchain technology in various applications"} blogShortDescription={"Blockchain is a distributed ledger technology(DLT) that is used to record and manage digital transactions. Blockchain is basically a decentralized and dispersed database that stores a growing list of records, known as blocks, which are linked and protected through cryptography. Each block comprises a timestamp and a connection to the prior block, creating a chain of blocks, therefore the name blockchain. Blockchain, which originally debuted as the foundation for the digital currency Bitcoin, has progressed greatly in recent years. It has now secured its place as a revolutionary technology that has the ability to disrupt multiple industries and transform the way business is conducted. Today in this post, we will understand the different ways blockchain technology is being applied and how it is being utilized to create so many innovative solutions."}/>
                    <ShortBlogCard blogTitle={"Trending technologies to learn in 2023"} blogShortDescription={"Since Covid 19 came into existence, digital technologies have been evolving very rapidly.Now, even when the effects of covid are fading gradually, business tech is set to continuously grow in 2023. So keeping this in mind, it's high time we focus on mastering these technologies to keep growing with these tech. Industry experts from Forbes Technology Council share their predictions for the business tech trends that will dominate headlines and C-suite meetings in 2023. And these technologies are:"}/>
                    <ShortBlogCard blogTitle={"Change your life in 2023!!!!!!"} blogShortDescription={"Everybody is so busy competing with their competitors that they forget that they are human beings and they also have a life, and instead of running a race they can actually enjoy the journey."}/>
                    <ShortBlogCard blogTitle={"5 Android settings you should turn off right now!!!!!"} blogShortDescription={"We rely so much on our smartphones that we end up becoming irresponsible and giving a lot of information to the apps which they don’t actually need. And this can be very very dangerous for us. Giving apps permission to invade your phone which is not even needed for them is the worst thing. Here are the 5 android settings which you need to turn off right away."}/>
                    <ShortBlogCard blogTitle={"What is identity theft?"} blogShortDescription={"Identity theft is deliberate use of somebody's personal information such as their name, date of birth, social security number, driver's license number, bank account or credit card numbers, PINs, electronic signatures, fingerprints, passwords, or any other information that can be used to access a person's financial resources, without their permission, to commit fraud or other crimes."}/>
                    <ShortBlogCard blogTitle={"Amazing Windows key shortcuts in Windows 11"} blogShortDescription={"Shortcuts are everyone’s favorite, be it in life or in Keyboard. We don’t know about life but we have some amazing shortcut tricks for your keyboard, which are newly introduced in windows 11. Let's have a look and understand these amazing shortcuts to reduce our finger pain"}/>

                </div>

            </div>
        </div>
    );
}