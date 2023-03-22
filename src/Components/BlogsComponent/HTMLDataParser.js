import React from 'react';
import parse from "html-react-parser";

export default function HTMLDataParser({htmlData})
{
    function changeHtmlData(content) {
        return parse(content, {
            replace: node => {
                if (node.attribs && node.name === 'img') {
                    node.attribs.src = process.env.NEXT_PUBLIC_BASE_URL_ONLY + '/' + node.attribs.src

                    console.log(node.attribs.src)
                    console.log(node.attribs.style)
                    return (

                        <div className={"flex flex-row justify-center"}>
                            <div>
                                <img src={node.attribs.src}
                                     width={node.attribs.width}
                                     height={node.attribs.height}
                                     className={'rounded-3xl '}
                                     alt={node.attribs.alt}
                                />
                            </div>
                        </div>
                    );
                }

                if (node.attribs && node.name === 'table') {
                    node.attribs.class += ' w-full max-w-full mb-4'
                    return node
                }


            }

        });

    }

    return (
        <div>
            {changeHtmlData(htmlData)}
        </div>
    );
}