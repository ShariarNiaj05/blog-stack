import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";
import LatestBlogCard from "@/components/ui/LatestBlogCard";

const HomePage = async () => {
  const response = await fetch("http://localhost:5000/blogs");
  const blogs = await response.json();
  console.log(blogs);
  return (
    <>
      <h1 className="text-center text-4xl my-5">
        <LatestBlogs />
      </h1>
    </>
  );
};

export default HomePage;
