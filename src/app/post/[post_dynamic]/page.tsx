async function post_dynamic({params} : {params: { post_dynamic: string}}){
  const url = await fetch(`https://jsonplaceholder.typicode.com/albums/${params.post_dynamic}`);
  const res = await url.json();

  return(
   <main>
    <div className="pl-2 mt-5">
      <span><span className="font-semibold">User id :</span> {res.user.id}</span> <br/> <br/>
      <span><span className="font-semibold">id :</span> {res.id}</span> <br/> <br/>
      <span><span className="font-semibold">Title :</span> {res.title}</span> <br/>
    </div>
   </main>
  );
}

export default post_dynamic;