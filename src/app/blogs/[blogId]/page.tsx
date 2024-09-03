import BlogDetails from "@/components/ui/BlogDetails";
import { IBlog } from "@/types";

interface BlogId {
  params: {
    blogId: string;
  };
}
const BlogDetailsPage = async ({ params }: BlogId) => {
  const { blogId } = params;
  const response = await fetch(`http://localhost:5000/blogs/${blogId}`);
  const blog: IBlog = await response.json();
  console.log(blog);
  return (
    <div>
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
