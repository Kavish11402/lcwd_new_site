import React, { useState } from "react";
import courseHomeContext from "./CourseHomeContext";


export default function CourseHomeProvider ({ children })
{
    const [courseDetails, setCourseDetails] = useState(null);
    const [courseVideos, setCourseVideos] = useState(null);
    const [videoCode, setVideoCode] = useState(null);


    return (
        <courseHomeContext.Provider
            value={
                {
                    courseDetails,
                    setCourseDetails,
                    courseVideos,
                    setCourseVideos,
                    videoCode,
                    setVideoCode
                }
        }
        >
            {children}
        </courseHomeContext.Provider>
    );
};