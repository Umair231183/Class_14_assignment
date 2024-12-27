async function CommentsDynamic({params} : {params: { comment_dynamic : string}}){
  const url = await fetch(`https://jsonplaceholder.typicode.com/albums/${params.comment_dynamic}`);
  const res = await url.json();

  return(
   <main>
    <div className="pl-2 mt-5">
      <span><span className="font-semibold">Post id :</span> {res.postId}</span> <br/> <br/>
      <span><span className="font-semibold">id :</span> {res.id}</span> <br/> <br/>
      <span><span className="font-semibold">Name :</span> {res.name}</span> <br/> <br/>
      <span><span className="font-semibold">Email :</span> {res.email}</span> <br/> <br/>
      <span><span className="font-semibold">Comments:</span> {res.body}</span> <br/> <br/>
    </div>
   </main>
  );
}

export default CommentsDynamic;