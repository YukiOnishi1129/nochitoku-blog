import Head from 'next/head'
import Link from 'next/link'
import Styles from '@/styles/Home.module.scss'

type Props = {
  blogs: {
    id: number
    title: string
  }[]
}

export default function Home() {
  return <div>テスト</div>
}

// export default function Home({ blogs }: Props) {
//   return (
//     <div>
//       <ul>
//         {blogs.map((blog) => (
//           <li key={blog.id}>
//             <Link href={`blog/${blog.id}`}>
//               <a>{blog.title}</a>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export const getStaticProps = async () => {
//   const key = {
//     headers: {
//       "X-API-KEY": process.env.API_KEY ? process.env.API_KEY : "",
//     },
//   };
//   console.log("キー");
//   console.log(key);
//   const data = await fetch(
//     "https://yuki-read.microcms.io/api/v1/nochi-toku",
//     key
//   )
//     .then((res) => res.json())
//     .catch(() => console.log("null"));

//   console.log(data);
//   const blogProps = data ? data.content : [{ id: 1, title: "" }];
//   return {
//     props: {
//       blog: blogProps,
//     },
//   };
// };
