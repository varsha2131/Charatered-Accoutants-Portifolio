import React from "react";
import Footer from "../components/Footer";
 

const AboutUs = () => {
  return (
    <div>
      
      <div className=" min-h-screen flex flex-col items-center py-10">
        <div className="container mx-auto px-4 lg:px-20">
          <h1 className="text-4xl font-bold text-center text-blue-950 mb-6">
            About Us
          </h1>
          <p className="text-center text-xl mb-12">
          CharteredAccount Portifolio is a reliable network for interacting with highly trained Chartered Accountants. 
          
          Our objective is to provide individuals, entrepreneurs, and businesses with solid financial resources.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white bg-opacity-50 p-5 rounded-lg shadow-lg">
            
            <div>
              <h2 className="text-2xl font-bold text-blue-950 mb-4">
                Our Vision
              </h2>
              <p className="text-lg mb-4">
              In the modern phase of professionalism, Chartered Accountants and Company Secretaries need to be updated with the outcome for the betterment of their business. Albeit, they are skilled enough in their field with an exceptional ability to solve the Accounting and Finance related objectives in a full-fledged manner.
              </p>
              <h2 className="text-2xl font-bold text-blue-950 mb-4 mt-8">
                Our Services 
              </h2>
              <p className=" mb-4">
                 we are providing good services : 
              </p>
              <ul className="list-disc list-inside  text-lg">
                <li>Company Registration ,Digital Signature Certificate.</li>
                <li>
                  GST Registration, GST Filing.
                </li>
                <li>Income Tax Returning.</li>
                 
              </ul>
            </div>

             
          </div>

          
        </div>
      </div>

      
      <Footer />
    </div>
  );
};

export default AboutUs;