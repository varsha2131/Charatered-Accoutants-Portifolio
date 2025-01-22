import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Footer from '../components/Footer';

const ContactUs = () => {
  return (
    <div className="">
      <div className="min-h-screen flex flex-col items-center py-10">
        <div className="container mx-auto px-4 lg:px-20">
          <h1 className="text-4xl font-bold text-center text-blue-950 mb-6">Contact Us</h1>
          <p className="text-center text-xl mb-12">
            Any Queries or want to provide feedback, feel free to reach out to us.
          </p>

          <div className="flex justify-center mb-12">
            <div className="w-full md:w-1/2">
              <form className="bg-white bg-opacity-70 p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Your Feedback
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell us your feedback..."
                    rows="5"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="bg-white p-5 bg-opacity-50 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
            <p className="text-lg">
              Accountants Chamber, <br />
              12-4 Balaji Street, <br />
              Hyderabad, 500085 <br />
              India
            </p>
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Phone</h2>
              <p className="text-lg">+91 98993 678932</p>
              <p className="text-lg">+91 89332 678902</p>
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-2">Email</h2>
              <p className="text-black-600 underline hover:text-black-700 text-lg">
                charteredinfo@gmail.com
              </p>
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-2">Follow Us</h2>
              <div className="flex space-x-4 justify-center ">
                <a href="#" className="text-pink-600 "><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                <a href="#" className="text-grey-400"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                <a href="#" className="text-black-500"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
              </div>
            </div>
          </div> 
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
