import {PostListItem} from "@/components/post-list-item";
import {PostData} from "@/lib/get-post-data";

interface PostListProps {
  posts: PostData[];
}

export const PostList = ({ posts }: PostListProps) => {
  return (
    <ul className="space-y-8">
      {posts.map(post => (
        <PostListItem key={post.frontmatter.slug} post={post} />
      ))}
    </ul>
  )
}