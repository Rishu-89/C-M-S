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
              Welcome to [Your Company Name]! We are dedicated to providing high-quality content and resources to our users. Our mission is to [insert your mission statement here]. We believe in [values or beliefs related to your mission].
            </p>
            <p className="text-lg text-gray-700">
              Our team consists of talented individuals who are passionate about [your industry or field]. We work together to [describe what your team does or how they contribute to the mission].
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <img
                  src="/path-to-team-member-photo.jpg"
                  alt="Team Member Name"
                  className="w-full h-32 object-cover rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">Team Member Name</h3>
                <p className="text-gray-600">Role/Position</p>
                <p className="text-gray-600">Brief bio or description about the team member.</p>
              </div>
              {/* Repeat similar block for other team members */}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
            <p className="text-lg text-gray-700">
              If you have any questions or would like to get in touch with us, please email us at <a href="mailto:contact@example.com" className="text-blue-500">contact@example.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default AboutUs;


