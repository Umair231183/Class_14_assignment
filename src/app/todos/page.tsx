import Link from "next/link";

async function Todos() {
  
  const url = await fetch('https://jsonplaceholder.typicode.com/todos');
  const res = await url.json();

  return(
    <>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {res.map((todo : any) =>(
        <>
          <div className="">
            <Link href={`/todos/${todo.id}`}>
              <span className="text-xl font-medium">&nbsp; {todo.id} : &nbsp; TODOS</span> <br/>
            </Link>
          </div>
        </>
      ))}
    </>
  );
}

export default Todos