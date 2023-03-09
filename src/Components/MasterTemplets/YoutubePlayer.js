import React from "react";

export default function YoutubePlayer({videoId})
{
  return(
      <div>
          <iframe
              className={"rounded-3xl sm:w-[640px] sm:h-[385px] lg:w-[1120px] lg:h-[630px]"}
              src={`https://www.youtube.com/embed/${videoId}`}
              title={"Embedded youtube"}
              allow={"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}
              allowFullScreen
          />
      </div>
  );
}