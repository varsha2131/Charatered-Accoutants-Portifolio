import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {fetchAccountants} from '../api/FetchAccounts'
import ResultList from '../components/ResultList'
import SearchBar from '../components/SearchBar'
import Footer from '../components/Footer'

const Accountes = () => {

  const [accoounts,setAccounts]=useState([]);
  const [loadingg,setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(()=>{
    const AllAccounts = async () =>{
      try {
        const data = await fetchAccountants();
        setAccounts(data);
      } catch (error) {
        console.log("faild to load account",error)
      }finally{
        setLoading(false);
      }
    }

    AllAccounts();
  },[])

  if(loadingg){
    return <div>Loading...</div>
  }

  const handleAccountSelect = (accountant) => {
    navigate(`/details/${accountant.id}`);
  };


  return (
    <>
    <div className='p-5 bg-img '>
      <p className='text-center text-4xl font-bold py-3 text-blue-950'>ACCOUNTANTS PROFILES </p>

       <div className='my-5'>
       <SearchBar users={accoounts} onSelect={handleAccountSelect} />
       </div>
      <ResultList users={accoounts}/>
    </div>
    <Footer/>
    </>
  )
}


  

export default Accountes;