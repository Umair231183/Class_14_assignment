import Link from "next/link";

async function Users() {
  
  const url = await fetch('https://jsonplaceholder.typicode.com/users');
  const res = await url.json();

  return(
    <>
      {res.map((use : any) =>(
        <>
          <div className="">
            <Link href={`/users/${use.id}`}>
              <span className="text-xl font-medium">&nbsp; {use.id} : &nbsp; Users</span> <br/>
            </Link>
          </div>
        </>
      ))}
    </>
  );
}

export default Users