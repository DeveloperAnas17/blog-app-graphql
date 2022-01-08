import Head from 'next/head'
import {PostCard, PostWidgets, Categories} from '../components/index'


export default function Home() {
  const posts = [
    { title: 'React Testing', excerpts: "Learn React Testing"}, 
  { title: 'React with Tailwind', excerpts: "Learn React with Tailwind"}, 
]

  return (
    <div className="container mx-auto px-10 mb-8 bg-">
      <Head>
        <title>Blog App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidgets />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}
