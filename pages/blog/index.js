import matter from 'gray-matter'
import PostList from '../../components/PostList';
import Layout from '../../components/Layout';

const BlogPage = ({posts, title, descriptions, ...props}) => {
  return (
    <Layout pageTitle={`${title} | Blog`}>
      <main>
        <PostList posts={posts} />
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const configData = await import(`../../siteconfig.json`)

  const posts = ((context) => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      const value = values[index]
      const document = matter(value.default)
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      }
    })
    return data
  })(require.context('../../posts', true, /\.md$/))

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}

export default BlogPage;