async function PostDyn({params} : {params: { users_dynamic : string}}){
  const url = await fetch(`https://jsonplaceholder.typicode.com/albums/${params.users_dynamic}`);
  const res = await url.json();

  return(
   <>
    <div className="pl-2 mt-5">
      <span><span className="font-semibold"> id :</span> {res.id}</span> <br/> <br/>
      <span><span className="font-semibold">Name :</span> {res.name}</span> <br/> <br/>
      <span><span className="font-semibold">User Name :</span> {res.username}</span> <br/> <br/>
      <span><span className="font-semibold">Email :</span> {res.email}</span> <br/> <br/>
      <span><span className="font-semibold">Street :</span> {res.address.street}</span> <br/> <br/>
      <span><span className="font-semibold">Suite:</span> {res.address.suite}</span> <br/> <br/>
      <span><span className="font-semibold">City :</span> {res.address.city}</span> <br/> <br/>
      <span><span className="font-semibold">Zipcode :</span> {res.address.zipcode}</span> <br/> <br/>
      <span><span className="font-semibold">Lat :</span> {res.address.geo.let}</span> <br/> <br/>
      <span><span className="font-semibold">Lng :</span> {res.address.geo.lng}</span> <br/> <br/>
      <span><span className="font-semibold">Phone :</span> {res.phone}</span> <br/> <br/>
      <span><span className="font-semibold">Website :</span> {res.website}</span> <br/> <br/>
      <span><span className="font-semibold">Company Name :</span> {res.company.name}</span> <br/> <br/>
      <span><span className="font-semibold">Catch Phrase :</span> {res.company.catchPhrase}</span> <br/> <br/>
      <span><span className="font-semibold">Company BS :</span> {res.company.bs}</span> <br/> <br/>
    </div>
   </>
  );
}

export default PostDyn;