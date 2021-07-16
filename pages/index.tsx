import Link from 'next/link'
import { GetStaticProps} from 'next'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faDiscord           
} from "@fortawesome/free-brands-svg-icons";

import {getPosts, getTags} from '../lib/postHandler'
import Layout from '../components/layout/Layout-main'
import Introduction from '../components/Introduction'
import About from '../components/About'

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
        <About />

        <div className="container-fluid content" style={{'margin-bottom': '125px'}}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card">
                  <FontAwesomeIcon icon={faDiscord} style={{width: '65px', height: '65px'}}/>
                  <h3>Discrod</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis incidunt nam veniam saepe dolor vel minima ducimus laboriosam dolore</p>
                  <a href="https://www.youtube.com/channel/UC-VCC0jmo5Snw276aWRshiQ" target="_blank" className="btn btn-content">Alaric Bell's Channel</a>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card">
                  <FontAwesomeIcon icon={faDiscord} style={{width: '65px', height: '65px'}}/>
                  <h3>Discord</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis incidunt nam veniam saepe dolor vel minima ducimus laboriosam dolore</p>
                  <a href="https://www.youtube.com/channel/UC-VCC0jmo5Snw276aWRshiQ" target="_blank" className="btn btn-content">Alaric Bell's Channel</a>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card">
                  <FontAwesomeIcon icon={faDiscord} style={{width: '65px', height: '65px'}}/>
                  <h3>Discord</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis incidunt nam veniam saepe dolor vel minima ducimus laboriosam dolore</p>
                  <a href="https://www.youtube.com/channel/UC-VCC0jmo5Snw276aWRshiQ" target="_blank" className="btn btn-content">Alaric Bell's Channel</a>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card">
                  <FontAwesomeIcon icon={faDiscord} style={{width: '65px', height: '65px'}}/>
                  <h3>Discord</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis incidunt nam veniam saepe dolor vel minima ducimus laboriosam dolore</p>
                  <a href="https://www.youtube.com/channel/UC-VCC0jmo5Snw276aWRshiQ" target="_blank" className="btn btn-content">Alaric Bell's Channel</a>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card">
                  <FontAwesomeIcon icon={faDiscord} style={{width: '65px', height: '65px'}}/>
                  <h3>Discord</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis incidunt nam veniam saepe dolor vel minima ducimus laboriosam dolore</p>
                  <a href="https://www.youtube.com/channel/UC-VCC0jmo5Snw276aWRshiQ" target="_blank" className="btn btn-content">Alaric Bell's Channel</a>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card">
                  <FontAwesomeIcon icon={faDiscord} style={{width: '65px', height: '65px'}}/>
                  <h3>Discord</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis incidunt nam veniam saepe dolor vel minima ducimus laboriosam dolore</p>
                  <a href="https://www.youtube.com/channel/UC-VCC0jmo5Snw276aWRshiQ" target="_blank" className="btn btn-content">Alaric Bell's Channel</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
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
