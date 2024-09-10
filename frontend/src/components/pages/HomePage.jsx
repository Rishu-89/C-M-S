import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import Layout from '../layout/Layout';

import axios from 'axios';

const HomePage = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(false);


  const getAllBlog = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${import.meta.env.VITE_HOST}api/v1/blog/home-blog`);
      setBlog(res?.data.blogs || []);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllBlog();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Blogs</h1>

        {loading && <p className="text-center">Loading blogs...</p>}
        {!loading && blog.length === 0 && <p className="text-center">No blogs found.</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blog.map((b) => (
            <Link
              to={`/blog/${b._id}`} 
              key={b._id}
              className="block bg-white shadow-md rounded-lg overflow-hidden transition transform hover:scale-105"
            >
           
              <img
                src={`${import.meta.env.VITE_HOST}api/v1/blog/photo/${b._id}`}
                alt={b.title}
                className="w-full h-48 overflow-hidden object-contain"
              />

         
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{b.title}</h2>
                <p className="text-gray-600">
                  {b.content.length > 100 ? b.content.substring(0, 100) + '...' : b.content}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;

