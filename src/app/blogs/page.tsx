import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { IBlog } from "@/types";
import React from "react";

const BlogsPage = async () => {
  const response = await fetch("http://localhost:5000/blogs", {
    cache: "no-store",
  });
  const blogs: IBlog[] = await response.json();
  const {} = useGetBlogsQuery(undefined);
  return (
    <div className="w-[90%] mx-auto">
      {" "}
      <h1 className="text-center text-4xl my-5">
        All Blog Post from <span className="text-accent">Blog stack</span>
      </h1>
      <p className=" text-xl text-center text-gray-400 w-2/4 mx-auto">
        <i>
          {" "}
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-3 gap-4 my-5">
        {blogs?.map((blog: IBlog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
