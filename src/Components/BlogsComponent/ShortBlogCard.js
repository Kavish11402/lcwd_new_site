import Link from "next/link";

export default function ShortBlogCard( { blogTitle , blogShortDescription , blogSlug } )
{
  return(
      <div className={"rounded-xl drop-shadow-xl bg-stone-100 px-6 py-8 space-y-7"} >

          <div className={"text-center font-bold text-3xl md:text-4xl"}>
            {blogTitle}
          </div>

          <div className={"px-3 text-justify text-zinc-600 text-lg line-clamp-7"}>
            {blogShortDescription}
          </div>

          <div className={"flex flex-row justify-end"}>

              <Link href={`/blogs/${blogSlug}`}>

                  <h1 className={"w-48 md:w-96 bg-primary-medium hover:bg-primary-light transition-all ease-in-out rounded-lg py-2 text-center text-base font-semibold text-zinc-600 lg:text-xl"} >
                      Read Full Article ...
                  </h1>

              </Link>

          </div>

      </div>
  );
}