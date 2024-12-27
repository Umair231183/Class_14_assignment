import Link from "next/link";

async function Albums() {
  
  const url = await fetch('https://jsonplaceholder.typicode.com/albums');
  const res = await url.json();

  return(
    <>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {res.map((album:any) =>(
        <>
          <div className="">
            <Link href={'/albums/${album.id'}>
              <span className="text-xl font-medium">&nbsp; {album.id} : &nbsp; ALBUMS</span> <br/>
            </Link>
          </div>
        </>
      ))}
    </>
  );
}

export default Albums