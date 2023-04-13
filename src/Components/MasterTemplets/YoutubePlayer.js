import React from "react";

export default function YoutubePlayer({videoId , autoPlayFeatureSwitch})
{
  return(
      <div className={"overflow-hidden relative h-[24rem] sm:h-[385px] lg:h-[285px] 2xl:h-[630px]"}>
          <iframe
              className={"rounded-3xl h-full w-full"}
              width={"853"} height={"480"}
              src={`https://www.youtube.com/embed/${videoId}?&autoplay=${ autoPlayFeatureSwitch ? "1" : "0" }  `}
              title={"Embedded youtube"}
              allow={"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}
              allowFullScreen

          />
      </div>
  );
}