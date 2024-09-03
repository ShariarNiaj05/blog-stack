import { IBlog } from "@/types";
import LatestBlogCard from "../ui/LatestBlogCard";

const LatestBlogs = ({ blogs }: { blogs: IBlog[] }) => {
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-center text-4xl my-5">
        Latest Post from <span className="text-accent">Blog stack</span>
      </h1>
      <p className=" text-xl text-center text-gray-400 w-2/4 mx-auto">
        <i>
          {" "}
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-2 gap-4 my-5">
        {blogs?.slice(0, 2)?.map((blog: IBlog) => (
          <LatestBlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
