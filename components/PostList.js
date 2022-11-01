import Link from 'next/link';

const PostList = ({ posts }) => {
  if(posts === undefined) return null;

  return (
    <div>
      {!posts && <div>No Posts! :sad-face:</div>}
      <ul>
        {posts && 
         posts.map((post) => {
           return (
            <li key={post.slug}>
              <Link href={{ pathname: `blog/${post.slug}` }}>
                <a>{post.frontmatter.title}</a>
              </Link>
            </li>
           )
         })}
      </ul>
    </div>
  )
}

export default PostList;