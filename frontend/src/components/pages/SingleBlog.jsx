import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from "../layout/Layout"

const SingleBlog = () => {
  const { id } = useParams(); 
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_HOST}api/v1/blog/singleBlogs/${id}`);
        setBlog(res.data.blog);
      } catch (error) {
        console.error('Error fetching the blog:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (!blog) {
    return <div className="text-center text-xl">Blog not found</div>;
  }

  return (
    <Layout>
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
      
        <img
          src={`${import.meta.env.VITE_HOST}api/v1/blog/photo/${blog._id}`}
          alt={blog.title}
          className="w-full h-64 object-cover"
        />

   
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          <p className="text-gray-700 text-lg mb-4">{blog.content}</p>

          <div className="mt-6">
            <h3 className="text-2xl font-semibold">About the Author</h3>
            <p className="text-gray-500 mt-2">{blog.author.name}</p>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default SingleBlog;
