async function PostDyn({params} : {params: { todos_dynamic : string}}){
  const url = await fetch(`https://jsonplaceholder.typicode.com/albums/${params.todos_dynamic}`);
  const res = await url.json();

  return(
   <>
    <div className="pl-2 mt-5">
      <span><span className="font-semibold">User id :</span> {res.userId}</span> <br/> <br/>
      <span><span className="font-semibold">id :</span> {res.id}</span> <br/> <br/>
      <span><span className="font-semibold">Todos :</span> {res.title}</span> <br/> <br/>
      <span><span className="font-semibold">completed :</span> {res.completed}</span> <br/> <br/>
    </div>
   </>
  );
}

export default PostDyn;