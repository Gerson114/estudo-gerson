import type { Metadata } from 'next'
import Link from 'next/link';
export const metadata: Metadata = {
 title: 'Nome da página',
 description: 'Descrição da página'
}


interface postprops{
  id: number,
  title:string,
  body:string,
  userid:number

}

interface Responce{
  posts: postprops[]
}

const responce = await fetch(`https://dummyjson.com/posts`)
const data: Responce = await responce.json()
console.log(data)

export default function painel() {
 return (
   <div>
    <h1>painel</h1>

    {data.posts.map(post => (
        <div className='bg-[#f2f2f2] mt-[25px] ml-[50px] mr-[50px]' key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
    ))}

    <Link href="/posts/loglg">loglg</Link>

   </div>
 );
}