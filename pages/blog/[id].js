import Head from 'next/head'
import Comments from '../../components/blog/Comments'

const PostBlog = ({ post }) => (
    <div>
      <Head>
        <title>{post.title} | {process.env.SITE_NAME} </title>
      </Head>
      
      <main>
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      </main>
      
      <Comments id={post.id} />
    
    </div>
    
  )
  
  PostBlog.getInitialProps = async function (context) {
    const { id } = context.query  
    const resp = await fetch(`${process.env.API_BLOG}/posts/${id}`)
    const post = await resp.json()

    return {
        post
    }
  }

  export default PostBlog