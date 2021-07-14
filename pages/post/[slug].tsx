import Link from 'next/link'
import { GetStaticProps, GetStaticPaths} from 'next'
import {getPostsBySlug, getSlugs} from '../../lib/postHandler'
import Layout from '../../components/layout/Layout-main'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getSlugs();
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const posts = await getPostsBySlug(params.slug);

  return {
    props: {
      posts
    }
  }
}

type Post = {
  title: string,
  html: string,
  slug: string
}

const Post: React.FC<{posts: Post}> = props => {
  const {posts} = props;
  return (
    <Layout>
      <div>
        <h1>Posts</h1>
        <div dangerouslySetInnerHTML={{__html: posts[0].html}}></div>
        <Link href="/"><a>Back</a></Link>
      </div>
    </Layout>
  );
}

export default Post;