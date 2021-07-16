import Link from 'next/link'
import { GetStaticProps} from 'next'


import {getPosts, getTags} from '../lib/postHandler'
import Layout from '../components/layout/Layout-main'
import Introduction from '../components/Introduction'

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
  return (
    <Layout>
      <main>
        <Introduction />

        <div className="about container-fluid" style={{'margin-bottom': '125px'}}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 about-content">
                <img src="/img/ab-logo.png" alt="logo image" className="logo-lg"/>
              </div>
              <div className="col-12 col-md-6 about-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo similique</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo similique</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo similique</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">

          </div>
          {/* <ul style={{background: 'red'}}>
            {posts.map((post, index) => {
              return (
                <Link key={index} href="/post/[slug]" as={`/post/${post.slug}`}><a><li>{post.title}</li></a></Link>
              )
            })}
          </ul> */}
        </div>
      </main>
    </Layout>
  )
}
