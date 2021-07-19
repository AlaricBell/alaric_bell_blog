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
  faDiscord,
  faFacebook,
    faGithub,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope
} from "@fortawesome/free-regular-svg-icons";

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
      <section className="contact container-fluid">
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
            <div className="col-12 contact-text">
              <p>Follow my social media and feel free to hit me up in dm if you have any question in mind</p>
            </div>
            <div className="col-12 col-lg-8 contact-information">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 col-md-6 contact-information-item">
                    <h3>Social accounts</h3>
                    <ul className="contact-list">
                      <li className="contact-list-item"><Link href="https://twitter.com/AlaricBell"><a ><FontAwesomeIcon icon={faTwitter} style={{width: '16px', height: '16px'}}/>@AlaricBell</a></Link></li>
                      <li className="contact-list-item"><Link href="https://www.facebook.com/Alaric-Bell-108850441481263"><a ><FontAwesomeIcon icon={faFacebook} style={{width: '16px', height: '16px'}}/>Alaric Bell</a></Link></li>
                      <li className="contact-list-item"><Link href="https://github.com/AlaricBell"><a ><FontAwesomeIcon icon={faGithub} style={{width: '16px', height: '16px'}}/>AlaricBell</a></Link></li>
                    </ul>
                  </div>
                  <div className="col-12 col-md-6 contact-information-item">
                    <h3>Email</h3>
                    <ul className="contact-list">
                      <li className="contact-list-item"><FontAwesomeIcon icon={faEnvelope} style={{width: '16px', height: '16px'}}/>alaric.bell@gmail.com</li>
                    </ul>
                  </div>
                  <div className="col-12">
                    <div className="contact-information-item">
                      <div className="discord">
                        <h3>Join our Discord channel</h3>
                        <Link href="https://discord.gg/FAGXqqn9"><a target="_blank" className="btn btn-neon"><FontAwesomeIcon icon={faDiscord} style={{width: '16px', height: '16px'}}/>Discord</a></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
    </Layout>
  )
}
