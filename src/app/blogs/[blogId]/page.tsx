interface BlogId {
  params: {
    blogId: string;
  };
}
const BlogDetailsPage = ({ params }: BlogId) => {
  const { blogId } = params;
  return <div>BlogDetailsPage</div>;
};

export default BlogDetailsPage;
