import Link from "next/link";
import React from "react";

export default function LatestBlogCard({blog})
{
  return(
      <div className={"my-12 mx-5 flex flex-col justify-between max-w-sm min-h-[20rem] overflow-hidden shadow-lg  rounded-xl border-b-secondary-medium border-b-8 drop-shadow-xl bg-card-color"}>


          <div className="px-6 py-4">

              <div className="font-bold text-xl mb-2">{blog.title}</div>

              <div className="text-gray-700 text-base line-clamp-6">
                  {blog.short_description}
              </div>

          </div>

          <div className="px-6 pt-4 pb-2">

              <Link className={"inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"} href={`/blogs/${blog.slug}`}>
                  Read
              </Link>

              <Link className={"inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"} href={`/blogs`}>
                  Blogs
              </Link>

              <Link className={"inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"} href={`https://courses.learncodewithdurgesh.com`} target={"_blank"} >
                  Premium Courses
              </Link>

          </div>
      </div>
  );
}