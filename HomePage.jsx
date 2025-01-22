
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUsers, faClock,faCheck, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>

       
      <div className=" py-20 px-8 text-center border-b-2">
        <h1 className="text-4xl font-bold text-blue-950 mb-4">Top Class Chartered Accountants For You</h1>
        <p className="text-lg mb-6"> Search here for the Experienced Accountants . </p>
        <NavLink to="/account" className="bg-black text-blue-600 px-6 py-2 font-medium rounded-md hover:bg-gray-200">
          Search Here
        </NavLink>
      </div>

      <div className="py-10 px-8 bg-white bg-opacity-40">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Our Services </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className='border-1 p-8 shadow-xl rounded-lg bg-gradient-to-r from-blue-400 via-green-300 to-teal-200 text-white'>
  

            <h3 className="text-black font-semibold  "> Search Accountants 🔍 </h3>
            <p className="text-gray-600">Use our advanced search bar to find qualified professionals.</p>
          </div>

          <div className='border-1 p-8 shadow-xl rounded-lg bg-gradient-to-r from-blue-400 via-green-300 to-teal-200 text-white'>
  
 
            <h3 className="text-black font-semibold  "> View Profiles 🫥</h3>
            <p className="text-gray-600">Review detailed profiles and connect with experts that suit your requirements.</p>
          </div>

          <div className='border-1 p-8 shadow-xl rounded-lg bg-gradient-to-r from-blue-400 via-green-300 to-teal-200 text-white'>

            <h3 className="text-black font-semibold  "> Contact 📞</h3>
            <p className="text-gray-600">Directly reach out to chartered accountants and start working together.</p>
          </div>
        </div>
      </div>
     
      <div className="bg-white bg-opacity-40 py-10 px-20">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Our Client Reviews </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className='border-1 p-8 shadow-xl rounded-lg bg-gradient-to-r from-blue-400 via-green-300 to-teal-200 text-white'>
  

            <p className="italic text-gray-600">"Good Flatform for finding great experienced CA Persons!"</p>
            <h4 className=" text-black font-semibold mt-4"> Sharuk Khan </h4>
          </div>
          <div className='border-1 p-8 shadow-xl rounded-lg bg-gradient-to-r from-blue-400 via-green-300 to-teal-200 text-white'>

            <p className="italic text-gray-600">"Good Services.Good Luck "</p>
            <h4 className=" text-black font-semibold mt-4"> Rama Rao </h4>
          </div>
          <div className='border-1 p-8 shadow-xl rounded-lg bg-gradient-to-r from-blue-400 via-green-300 to-teal-200 text-white'>
  

            <p className="italic text-gray-600">"App Features are Really Fantastic ! Great Work.."</p>
            <h4 className=" text-black font-semibold mt-4"> Ajay Roy </h4>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage;