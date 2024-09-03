import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";
import LatestBlogCard from "@/components/ui/LatestBlogCard";

const HomePage = async () => {
  const response = await fetch("http://localhost:5000/blogs");
  const blogs = await response.json();
  return (
    <>
      <h1 className="text-center text-4xl my-5">
        <LatestBlogs blogs={blogs} />
      </h1>
    </>
  );
};

export default HomePage;
