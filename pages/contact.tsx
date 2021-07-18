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

export default function Contact(props) {
  const {posts, tags} = props;
  return (
    <Layout>
      <main className="container-page">

      <section className="about container-fluid">
        <div className="row m-title">
          <div className="col-2 header-container">
            <span className="header-line"></span>
          </div>
          <div className="col-8 header-title header-container">
            <h2>Contact information</h2>
            
          </div>
          <div className="col-2 header-container">
            <span className="header-line"></span>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 about-content">
              <img src="/img/profile.jpg" alt="Profile image of the creator" className="img-profile"/>
            </div>
            <div className="col-12 col-md-6 about-content">
              <p>At the beginning of my journey I was amazed how efficiently programming can be learned 
              with a trustworthy instructor. Simply being online, researching and practicing made me a better programmer every single day.</p>
              <p>As a freelancer webdeveloper I am doing my best to provide the highest quality content for everyone who is willing to learn webdevelopment.</p>
              <a href="https://www.youtube.com/channel/UC-VCC0jmo5Snw276aWRshiQ" target="_blank" className="btn btn-neon">Alaric Bell's Channel</a>
            </div>
          </div>
        </div>
      </section>
      </main>
    </Layout>
  )
}
