import Link from 'next/link'
import { GetStaticProps} from 'next'

import {getPosts, getTopPosts, getTags} from '../lib/postHandler'
import Layout from '../components/layout/Layout-main'
import Introduction from '../components/Introduction'
import About from '../components/About'
import Content from '../components/Content'
import Donation from '../components/Donation'
import TopPosts from '../components/posts/TopPosts'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPatreon
} from "@fortawesome/free-brands-svg-icons";

export const getStaticProps: GetStaticProps = async ({params}) => {
  const posts = await getTopPosts();
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
  return (
    <Layout>
      <main>
        <Introduction />
        <About />
        <Content />
        <TopPosts posts={posts}/>
        <Donation />

        {console.log(posts)}
      </main>
    </Layout>
  )
}
