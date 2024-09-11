import React from 'react';
import Layout from '../layout/Layout';

const AboutUs = () => {

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
            
            <div className="mb-6">
              <p className="text-lg text-gray-700 mb-4">
                Welcome to BlogSphere, your trusted platform for managing and sharing high-quality blog content. Our mission is to empower creators, bloggers, and content managers with seamless tools to create, manage, and share content across the globe. We believe in fostering creativity and delivering impactful stories that resonate with readers everywhere.
              </p>
              <p className="text-lg text-gray-700">
                At BlogSphere, we strive to provide a user-friendly platform with powerful features to manage blogs, ensuring efficiency and quality. Our platform is built for creators by creators, with a deep understanding of the needs and challenges of content management in today's digital age.
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
              <div className="">
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <img
                    src="/"
                    alt="Rishu Pandey"
                    className="w-full h-32 object-cover rounded-full mb-4"
                  />
                  <h3 className="text-xl font-semibold">Rishu</h3>
                  <p className="text-gray-600">Co-Founder & CEO</p>
                  <p className="text-gray-600">Rishu is the visionary behind BlogSphere, with a passion for content creation and helping others express their ideas through writing.</p>
                </div>
                
               
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
              <p className="text-lg text-gray-700">
                If you have any questions or would like to get in touch with us, please email us at <a href="mailto:contact@blogsphere.com" className="text-blue-500">contact@blogsphere.com</a>. We look forward to hearing from you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
