import BlogDetails from "@/components/ui/BlogDetails";
import { IBlog } from "@/types";

interface BlogId {
  params: {
    blogId: string;
  };
}

export const generateStaticParams = async () => {
  const response = await fetch(`http://localhost:5000/blogs`);
  const blogs = await response.json();

  return blogs.slice(0, 3).map((blog: IBlog) => ({}));
};

const BlogDetailsPage = async ({ params }: BlogId) => {
  const { blogId } = params;
  const response = await fetch(`http://localhost:5000/blogs/${blogId}`, {
    cache: "no-store",
  });
  const blog: IBlog = await response.json();
  return (
    <div className="my-10">
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
