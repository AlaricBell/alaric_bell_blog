import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { GetStaticProps} from 'next'


import {getPosts, getTags} from '../lib/postHandler'
import Layout from '../components/layout/Layout-main'

type Post = {

}



export const getStaticProps: GetStaticProps = async ({params}) => {
  const posts = await getPosts();
  const tags = await getTags();
  return {
    props: {
      posts,
      tags
    }
  }
}

export default function Home(props) {
  const {posts, tags} = props;
  console.log(tags);
  return (
    <Layout>
      <div className="container">
        <div className="row">

        </div>
        <ul>
          {posts.map(post => {
            return (
              <Link href="/post/[slug]" as={`/post/${post.slug}`}><a><li>{post.title}</li></a></Link>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}
