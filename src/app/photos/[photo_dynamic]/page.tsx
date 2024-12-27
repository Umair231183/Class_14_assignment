async function photo_dynamic({params} : {params: { photo_dynamic: string}}){
  const url = await fetch(`https://jsonplaceholder.typicode.com/albums/${params.photo_dynamic}`);
  const res = await url.json();

  return(
   <main>
    <div className="pl-2 mt-5">
      <span><span className="font-semibold">albumId :</span> {res.albumId}</span> <br/> <br/>
      <span><span className="font-semibold">id :</span> {res.id}</span> <br/> <br/>
      <span><span className="font-semibold">Title :</span> {res.title}</span> <br/>
      <span><span className="font-semibold">Url :</span> {res.url}</span> <br/> <br/>
      <span><span className="font-semibold">thumbnailUrl :</span> {res.thumbnailUrl}</span> <br/> <br/>
    </div>
   </main>
  );
}

export default photo_dynamic;