const BlogLoadingPage = async () => {
  const response = await fetch("http://localhost:5000/blogs");
  const blogs = await response.json();
  return <div></div>;
};

export default BlogLoadingPage;
