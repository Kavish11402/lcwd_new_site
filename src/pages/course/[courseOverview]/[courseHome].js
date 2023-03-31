import YoutubePlayer from "@/Components/MasterTemplets/YoutubePlayer";
import PlayerCourseCard from "@/Components/FreeCoursesComponent/PlayerCourseCard";
import {Tab} from "@headlessui/react";
import {getBlogCategories, getCodeOfVideo, getCourseDetail, getCourseVideos} from "@/Api_Services/apiServices";
import React, {useContext, useEffect, useState} from "react";
import HTMLDataParser from "@/Components/MasterTemplets/HTMLDataParser";



import Prism from "prismjs";
import "prismjs/components/prism-jsx.min";
import "prismjs/plugins/toolbar/prism-toolbar";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
import "prismjs/components/prism-css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-java";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-sass";
import "prismjs/components/prism-scss";
import "prismjs/components/prism-python";
import "prismjs/components/prism-http";
import "prismjs/components/prism-xml-doc";
import "prismjs/plugins/toolbar/prism-toolbar.min.css";
import "prismjs/plugins/toolbar/prism-toolbar.min";



import CustomLoader from "@/Components/Misc/CustomLoader";
import courseHomeContext from "@/Context/CourseHomeContext";


export default function CourseHome({courseOverview , videoID })
{
     const { courseDetails, setCourseDetails , courseVideos, setCourseVideos , videoCode, setVideoCode } = useContext(courseHomeContext)
    const [currentVideo , setCurrentVideo] = useState(null)


    function load()
    {
        try
        {
            getCourseDetail(courseOverview)
                .then(
                    (data) =>
                    {
                        setCourseDetails(data)
                        getCourseVideos(data.id) .then( (data2) => {  setCourseVideos(data2) })
                    })

            getCodeOfVideo(videoID) .then( (data3) => {  setVideoCode(data3) } )

        }
        catch (error) { console.log(error); }
    }

    function loadCurrentVideo()
    {
        try {
            getCodeOfVideo(videoID)
                .then(
                        (data3) =>
                            {
                                setVideoCode(data3)

                            })
        }
        catch (error) { console.log(error); }

    }



    useEffect(() =>
    {
        const highlight = async () => { await Prism.highlightAll(); };
        highlight();

        if(!courseDetails || !courseVideos) {load()}
        loadCurrentVideo()




    }, []);


     console.log(courseDetails)
     console.log(courseVideos)
     console.log(videoCode)

    /* NOTE:- Uncomment Link No. 116 , 136 , 138 , 188 , 207 , 209 , 226 , 249 For Content on the page */

    return(
        <div className={"flex flex-row "}>

            <div className={"px-0 py-6 lg:p-7"}>

                <div className={"bg-stone-100 rounded-3xl drop-shadow-xl px-2 py-6 lg:p-6 flex flex-col justify-center space-y-9"}>

                    {/* Embedded Youtube Video */}
                    <div className={"mx-auto"}>
                        <YoutubePlayer videoId={``} autoPlayFeatureSwitch={true} />
                    </div>

                    <div className={"hidden lg:block"}>
                        {/* Video Description */}
                        <div className={"border-x-2 border-primary-medium rounded-3xl py-6 w-full lg:w-[52vw] mx-auto 2xl:w-[70rem]"}>

                            <h1 className={"font-bold text-center lg:text-left text-3xl underline underline-offset-8 mx-auto w-fit"}>
                                Description
                            </h1>

                            <div className={"mx-6 text-lg mt-8"}>

                                {/*<HTMLDataParser htmlData={courseVideoData[videoDetail.video_id-baseArrayIndex].videoDescription} />*/}

                            </div>

                        </div>

                        {/* Divider Line */}
                        <div className={"rounded-full border border-gray-300 my-10 mx-20"}></div>

                        {/* Provided Code */}
                        <div className={"border-x-2 border-primary-medium rounded-3xl py-6 w-full lg:w-[52vw] mx-auto 2xl:w-[70rem]"}>
                            <h1 className={"font-bold text-center lg:text-left text-3xl underline underline-offset-8 mx-auto w-fit"}>
                                &lt; Code /&gt;
                            </h1>


                            <div className={"mx-6 text-lg mt-4"}>

                                {/*<CustomLoader loading={codes.loading}/>*/}
                                <div>
                                    {/*<h4 className={"text-2xl font-semibold"}>{videoCode.codeTitle}</h4>*/}
                                    <pre>
                                        {/*<code className={`language-${videoCode.codeLanguage}`}>
                                            {videoCode.codeSource}
                                        </code>*/}
                                    </pre>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className={"lg:hidden"}>

                        <Tab.Group defaultIndex={0}>

                            <Tab.List className={"flex flex-row justify-center"}>

                                <div className={"flex flex-col lg:flex-row justify-center w-fit bg-primary-medium/30 p-2 rounded-xl space-y-2 lg:space-y-0 lg:space-x-2 mt-4 "}>

                                    {/* Overview Button */}
                                    <Tab className={"transition-all ease-linear w-80 rounded-xl py-2.5 text-xl font-medium text-secondary-dark outline-0 border-2 border-transparent" +
                                        " ui-selected:bg-white ui-selected:shadow ui-selected:border-secondary-dark" +
                                        " ui-not-selected:text-gray-400 ui-not-selected:hover:bg-white/[0.5] ui-not-selected:hover:text-secondary-dark"}>
                                        Overview
                                    </Tab>

                                    {/* Course Content Button */}
                                    <Tab className={"transition-all ease-linear w-80 rounded-xl py-2.5 text-xl font-medium text-secondary-dark outline-0 border-2 border-transparent" +
                                        " ui-selected:bg-white ui-selected:shadow ui-selected:border-secondary-dark" +
                                        " ui-not-selected:text-gray-400 ui-not-selected:hover:bg-white/[0.5] ui-not-selected:hover:text-secondary-dark"}>
                                        Course Content
                                    </Tab>

                                </div>

                            </Tab.List>

                            <Tab.Panels className={"mt-10 lg:mx-16"}>

                                {/* Overview View */}
                                <Tab.Panel>
                                    <div className={"space-y-9"}>
                                        {/* Video Description */}
                                        <div className={"border-x-2 border-primary-medium rounded-3xl py-6 w-full lg:w-[70rem]"}>

                                            <h1 className={"font-bold text-center lg:text-left text-3xl underline underline-offset-8 mx-auto w-fit"}>
                                                Description
                                            </h1>

                                            <div className={"mx-6 text-lg mt-8 text-justify  break-all"}>
                                                {/*<HTMLDataParser htmlData={courseVideoData[videoDetail.video_id-baseArrayIndex].videoDescription} />*/}
                                            </div>

                                        </div>

                                        {/* Divider Line */}
                                        <div className={"rounded-full border border-gray-400 mx-10 lg:mx-28"}></div>

                                        {/* Provided Code */}
                                        <div className={"border-x-2 border-primary-medium rounded-3xl py-6 w-[22rem] sm:w-[34rem] md:w-[45rem] mx-auto lg:w-[70rem]"}>
                                            <h1 className={"font-bold text-center lg:text-left text-3xl underline underline-offset-8 mx-auto w-fit"}>
                                                &lt; Code /&gt;
                                            </h1>

                                            <div className={"text-lg mt-4 "}>

                                                {/*<CustomLoader loading={codes.loading}/>*/}

                                                <div className={"px-2"}>
                                                    {/*<h4 className={"text-2xl font-semibold"}>{videoCode.codeTitle}</h4>*/}
                                                    <pre>
                                                        {/*<code className={`language-${videoCode.codeLanguage}`}>
                                                            {videoCode.codeSource}
                                                        </code>*/}
                                                    </pre>
                                                </div>



                                            </div>

                                        </div>

                                    </div>
                                </Tab.Panel>

                                {/* Course Content View */}
                                <Tab.Panel>
                                    {/*<div className={"space-y-10 px-2 lg:px-28"}>
                                        {
                                            courseVideoData.map(
                                                (singleVideo)=>{
                                                    return(
                                                        <PlayerCourseCard key={singleVideo.id} singleVideo={singleVideo} setVideoDetail={setVideoDetail} courseOverview={courseOverview} selected={ singleVideo.id === videoDetail.video_id } />
                                                    )
                                                }
                                            )
                                        }
                                    </div>*/}
                                </Tab.Panel>

                            </Tab.Panels>

                        </Tab.Group>

                    </div>

                </div>

            </div>

            {/*<div className={"hidden lg:block space-y-5 p-5 overflow-y-scroll my-7 h-[160vh] bg-stone-100 rounded-3xl drop-shadow-xl mr-6"}>


                {
                    courseVideoData.map(
                        (singleVideo)=>{
                            return(
                                <PlayerCourseCard key={singleVideo.id} singleVideo={singleVideo} setVideoDetail={setVideoDetail} courseOverview={courseOverview} selected={ singleVideo.id === videoDetail.video_id } />
                            )
                        }
                    )
                }


            </div>*/}

        </div>
    );
}


export async function getServerSideProps(context)
{
    const {courseOverview} = context.params;
    const videoID = Number(context.query.courseHome);

    return {
        props: {courseOverview , videoID},
    }

}
