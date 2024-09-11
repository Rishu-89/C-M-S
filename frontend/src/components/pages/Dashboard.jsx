
import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import axios from 'axios';
import { useAuth } from '../context/authContext';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(false);
  const [auth] = useAuth();

  const getAllBlog = async () => {
    setLoading(true);
    try {
     
      const res = await axios.get(`${import.meta.env.VITE_HOST}api/v1/blog/allBlogs`);
      setBlog(res?.data.blogs || []);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllBlog();
  }, [auth.token]);

  return (
    <Layout>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Your Blogs</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Here are all the blogs you have created
            </p>
          </div>

          <div className="relative max-w-md mx-auto mt-8 md:mt-16">
            {loading ? (
              <div className="text-center">
                <h1 className="text-lg font-semibold text-gray-600">Loading....</h1>
              </div>
            ) : (
              <div className="space-y-4">
                {blog.length > 0 ? (
                  blog.map((b, index) => (
                    <Link
                      key={index}
                      // to={`${import.meta.env.VITE_HOST}api/v1/blog/edit/${b._id}`}
                      to={`/user/edit/${b._id}`}
                      className="block p-4 bg-white border border-gray-200 rounded-md shadow-md hover:bg-gray-100"
                    >
                      <h3 className="text-lg font-semibold text-gray-900">{b.title}</h3>
                      <p className="text-gray-600">{b.content.slice(0, 32)}...</p> {/* Optionally show a snippet */}
                    </Link>
                  ))
                ) : (
                  <div className="text-center">
                    <h1 className="text-lg font-semibold text-gray-600">No blog found</h1>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
