import Link from "next/link";

async function Comments() {
  
  const url = await fetch('https://jsonplaceholder.typicode.com/comments');
  const res = await url.json();

  return(
    <main>
      {res.map((com : any) =>(
        <div>
          <div className="">
            <Link href={'/comments/${com.id'}>
              <span className="text-xl font-medium">&nbsp; {com.id} : &nbsp; COMMENTS</span> <br/>
            </Link>
          </div>
        </div>
      ))}
    </main>
  );
}

export default Comments;