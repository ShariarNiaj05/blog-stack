interface BlogId {
  params: {
    blogId: string;
  };
}
const BlogDetailsPage = async ({ params }: BlogId) => {
  const { blogId } = params;
  const response = await fetch(`http://localhost:5000/${blogId}`);
  const blog = await response.json();
  console.log(blog);
  return <div>BlogDetailsPage</div>;
};

export default BlogDetailsPage;
