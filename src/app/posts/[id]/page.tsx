

export default async  function detalhes({params}:{params: Promise<{id:number}>}) {
    const {id} = await params

 return (
   <div>

    <h1>detalhes dos posts {id}</h1>

   </div>
 );
}