import Link from "next/link";

async function Albums() {
  
  const url = await fetch('https://jsonplaceholder.typicode.com/albums');
  const res = await url.json();

  return(
    <main>
      {res.map((album : any) =>(
        <div>
          <div className="">
            <Link href={'/albums/${album.id'}>
              <span className="text-xl font-medium">&nbsp; {album.id} : &nbsp; ALBUMS</span> <br/>
            </Link>
          </div>
        </div>
      ))}
    </main>
  );
}

export default Albums