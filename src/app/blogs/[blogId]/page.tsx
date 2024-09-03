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
  return (
    <div className="my-10">
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
