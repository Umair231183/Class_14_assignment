import Link from "next/link";

async function Photos() {
   
  const url = await fetch("https://jsonplaceholder.typicode.com/Photos");
  const response = await url.json();

  return(
    <>
      {response.map((pho:any)=>(
        <>
          <div className="">
           <Link href={`/photos/${pho.id}`}>
            <span className="text-xl font-medium"> &nbsp; {pho.id} : &nbsp; Photos</span> <br/>
           </Link>
          </div>
        </>
      ))}
    </>
  );
}


export default Photos;