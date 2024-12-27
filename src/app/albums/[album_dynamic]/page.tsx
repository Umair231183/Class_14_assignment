async function PostDynamic({params} : {params: { album_dynamic : string}}){
  const url = await fetch(`https://jsonplaceholder.typicode.com/albums/${params.album_dynamic}`);
  const res = await url.json();

  return(
   <main>
    <div className="pl-2 mt-5">
      <span><span className="font-semibold">User id :</span> {res.userId}</span> <br/> <br/>
      <span><span className="font-semibold">id :</span> {res.id}</span> <br/> <br/>
      <span><span className="font-semibold">Title :</span> {res.title}</span> <br/>
    </div>
   </main>
  );
}

export default PostDynamic;