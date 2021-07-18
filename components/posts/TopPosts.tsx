import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faPatreon        
} from "@fortawesome/free-brands-svg-icons";

import Link from 'next/link'

type Post = {
  title: string,
  slug: string,
  custom_excerpt: string,
  feature_image: string,
  published_at: string,
  tags: Array<Tag>,
  authors: Array<Author>,
}

interface Tag {
  id?: string,
  slug?: string,
  description?: string,
  feature_image?: string,
  meta_description?: string,
  meta_title?: string,
  name?: string,
  visibility?: string,
}

interface Author {
  id?: string,
  cover_image?: string,
  facebook?: string,
  bio?: string,
  location?: string,
  meta_description?: string,
  meta_title?: string,
  name?: string,
  profile_image?: string,
  slug?: string,
  twitter?: string,
  website?: string,
}

const TopPosts: React.FC<{posts: Array<Post>}> = props => {
    const {posts} = props;
    return (
      <section className="container-fluid post-top">
        <div className="row m-title">
          <div className="col-2 header-container">
            <span className="header-line"></span>
          </div>
          <div className="col-8 header-title header-container">
            <h2>Recent Posts</h2>
          </div>
          <div className="col-2 header-container">
            <span className="header-line"></span>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {posts.map(post => {
              return (
              <div className="col-12 col-md-4 post-content">
                <div className="card card-post">
                  <img src={post.feature_image} alt="" className="img-post"/>
                  <h3>{post.title}</h3>
                  <div className="post-info">
                    <div className="post-author">
                      <img src={post.authors[0].profile_image} alt="" className="img-author"/>
                      <h4>{post.authors[0].name}</h4>
                    </div>
                    <p>{post.published_at.substr(0, post.published_at.indexOf('T'))}</p>
                  </div>
                  <div className="tags">
                    {post.tags.map(tag => {
                      return (
                        <>
                        <small>#{tag.slug}</small>
                        </>
                      );
                    })}
                    {console.log(post.authors)}
                  </div>
                  
                  <p>{post.custom_excerpt}</p>
                  <Link href={`/post/${post.slug}`}><a className="btn btn-neon">More</a></Link>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </section>
    )
}

export default TopPosts;