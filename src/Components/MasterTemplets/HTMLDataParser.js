import React, { useEffect, useRef } from 'react';
import parse from "html-react-parser";
import Image from "next/image";


export default function HTMLDataParser({htmlData})
{

    const currentRef=useRef()
    useEffect(()=>{
      
    })
    function changeHtmlData(content) {
        return parse(content, {
            replace: node => {

                // image changed
                if (node.attribs && node.name === 'img') {
                    node.attribs.src = process.env.NEXT_PUBLIC_BASE_URL_ONLY + '/' + node.attribs.src
                    return (

                        <div className={"flex flex-row justify-center mt-3 "}>
                         
                                <Image src={`${node.attribs.src}`}
                                     width={node.attribs.width}
                                     height={node.attribs.height}
                                     className={'max-w-full h-auto  shadow-sm '}
                                     alt={node.attribs.alt}
                                />
                          
                        </div>
                    );
                }


                // heading


                if(node.name==='h1' || node.name==='h2' || node.name==='h3' || node.name==='h4'){
                    node.attribs.class+=' heading-blog mt-5 mb-2'
                    return node;
                }

                // paragraph
                if(node.name==='p'){
                    node.attribs.class+=' para-blog'
                    return node;
                }

                // table changed
                if (node.attribs && node.name ==='table') {
                    node.attribs.class += ' table w-full max-w-full mb-4 bg-transparent table-bordered table-hover table-striped'
                    return node
                }


            }

        });

    }

    return (
        <div ref={currentRef}>
            {changeHtmlData(htmlData)}
        </div>
    );
}