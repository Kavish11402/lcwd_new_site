import {useRouter} from "next/router";

export default function DynamicBlogPage ()
{
  const router = useRouter()
  const urlPath = router.query.dynamicBlogPage

  return <p>Post: {urlPath}</p>
}

