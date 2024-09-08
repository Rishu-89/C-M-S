import React, { useState } from 'react';
import Layout from '../layout/Layout';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Write = () => {
  let navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create a FormData object to handle file upload
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      if (image) {
        formData.append('photo', image);
      }

      // Make the POST request with FormData
      const res = await axios.post(
        `${import.meta.env.VITE_HOST}api/v1/blog/create-blog`,
        formData,
        
      );

      if (res?.data?.success) {
        toast.success('Blog Published Successfully');
        navigate('/');
      }
    } catch (error) {
      console.log(error);
      toast.error('Error in Publishing Blog');
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-6">Write a New Blog</h1>

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Blog Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Enter the blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
              Blog Content
            </label>
            <textarea
              id="content"
              rows="10"
              placeholder="Write your blog content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
              Upload Featured Image
            </label>
            <input
              id="image"
              type="file"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Publish
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Write;
