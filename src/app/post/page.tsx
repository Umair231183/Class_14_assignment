import Link from "next/link";

async function Post() {
   
  const url = await fetch("https://jsonplaceholder.typicode.com/posts");
  const response = await url.json();

  return(
    <>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {response.map((post:any)=>(
        <>
          <div className="">
           <Link href={`/posts/${post.id}`}>
            <span className="text-xl font-medium"> &nbsp; {post.id} : &nbsp; Post</span> <br/>
           </Link>
          </div>
        </>
      ))}
    </>
  );
}


export default Post;