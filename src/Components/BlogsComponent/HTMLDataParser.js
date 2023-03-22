import React, { useEffect, useRef } from 'react';
import parse from "html-react-parser";

export default function HTMLDataParser({htmlData})
{

    const currentRef=useRef()

    useEffect(()=>{
      
    })
    function changeHtmlData(content) {
        return parse(content, {
            replace: node => {
                if (node.attribs && node.name === 'img') {
                    node.attribs.src = process.env.NEXT_PUBLIC_BASE_URL_ONLY + '/' + node.attribs.src

                
                    return (

                        <div className={"flex flex-row justify-center "}>
                            <div>
                                <img src={`${node.attribs.src}`}
                                     width={node.attribs.width}
                                     height={node.attribs.height}
                                     className={'max-w-full h-auto  shadow-sm '}
                                     alt={node.attribs.alt}
                                />
                            </div>
                        </div>
                    );
                }

                if (node.attribs && node.name === 'table') {
                    node.attribs.class += 'w-full max-w-full mb-4 bg-transparent table-bordered table-hover table-striped'
                    return node
                }


            }

        });

    }

    return (
        <div ref={currentRef}>
            {console.log(changeHtmlData(htmlData))}
            {changeHtmlData(htmlData)}
        </div>
    );
}