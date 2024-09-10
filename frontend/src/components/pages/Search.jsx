import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from '../layout/Layout';
import axios from 'axios';
import { toast } from 'react-toastify';

const Search = () => {
  const { search } = useParams();
  const [blogs, setBlogs] = useState([]);

  const getSearchBlog = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_HOST}api/v1/blog/search/${search}`);
      
      if (res.data) {
        setBlogs(res.data);
      } else {
        toast.error("No blogs found for your search");
        setBlogs([]);
      }
    } catch (error) {
      
      toast.error("Error fetching blogs");
    }
  };

  useEffect(() => {
    getSearchBlog();
  }, [search]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Search Results for "{search}"</h1>
        
        {blogs.length === 0 ? (
          <p className="text-center text-gray-500">No blogs found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div key={blog._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                {blog.photo && (
                  <img
                    src={`${import.meta.env.VITE_HOST}api/v1/blog/photo/${blog._id}`}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                  <p className="text-gray-700 mb-4">{blog.content.substring(0, 100)}...</p>
                  <Link
                    to={`/blog/${blog._id}`}
                    className="text-blue-500 hover:text-blue-700 font-medium"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Search;
