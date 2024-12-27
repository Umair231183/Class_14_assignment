import Link from "next/link";

async function Todos() {
  
  const url = await fetch('https://jsonplaceholder.typicode.com/todos');
  const res = await url.json();

  return(
    <main>
      {res.map((todo : any) =>(
        <div>
          <div className="">
            <Link href={`/todos/${todo.id}`}>
              <span className="text-xl font-medium">&nbsp; {todo.id} : &nbsp; TODOS</span> <br/>
            </Link>
          </div>
        </div>
      ))}
    </main>
  );
}

export default Todos