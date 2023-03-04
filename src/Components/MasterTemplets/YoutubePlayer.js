import React from "react";

export default function YoutubePlayer({videoId})
{
  return(
      <div>
          <iframe
              className={"rounded-3xl"}
              width={"1120"}
              height={"630"}
              src={`https://www.youtube.com/embed/${videoId}`}
              title={"Embedded youtube"}
              allow={"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}
              allowFullScreen
          />
      </div>
  );
}