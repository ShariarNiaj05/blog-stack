import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";
import { IBlog } from "@/types";

const HomePage = async () => {
  const response = await fetch("http://localhost:5000/blogs", {
    cache: "no-store",
    next: {
      revalidate: 30,
    },
  });
  const blogs: IBlog[] = await response.json();
  return (
    <>
      <h1 className="text-center text-4xl my-5">
        <LatestBlogs blogs={blogs} />
      </h1>
    </>
  );
};

export default HomePage;
