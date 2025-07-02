import { blogsData } from "@/assets/assets";
import React from "react";

const Blog = () => {
  return (
    <div id="blog" className="w-full px-[12%] py-10 scroll-my-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Want to learn</h4>
      <h2 className="text-center text-5xl font-Ovo">My Blogs</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I specialize in creating dynamic and responsive web applications using
        the latest technologies. My services include:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {blogsData.map((blog, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            <div className="p-6">
              <div className="mb-4">
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {new Date(blog.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 line-clamp-2">
                {blog.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {blog.description}
              </p>
              
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200"
              >
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {blogsData.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            No blogs available at the moment. Check back soon!
          </p>
        </div>
      )}
    </div>
  );
};

export default Blog;