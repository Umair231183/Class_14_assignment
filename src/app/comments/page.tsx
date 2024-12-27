import Link from "next/link";

async function Comments() {
  
  const url = await fetch('https://jsonplaceholder.typicode.com/comments');
  const res = await url.json();

  return(
    <>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {res.map((com : any) =>(
        <>
          <div className="">
            <Link href={'/comments/${com.id'}>
              <span className="text-xl font-medium">&nbsp; {com.id} : &nbsp; COMMENTS</span> <br/>
            </Link>
          </div>
        </>
      ))}
    </>
  );
}

export default Comments;