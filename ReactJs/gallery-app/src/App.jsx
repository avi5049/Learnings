import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Card from './Components/Card';
import PreviousButton from './Components/PreviousButton';
import NextButton from './Components/NextButton';

const App = () => {

  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1)
  
  const getData = async ()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=20`)

    setUserData(response.data)
  }

  useEffect(function(){
    getData()
  },[index])

  let printUserData = <h3 className='text-s text-gray-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>

  if(userData.length>0){
    printUserData = userData.map(function(elem,idx){
      return <div key={idx}>
       <Card elem={elem}/>
      </div>
    })
  }


  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      {/* <button 
      onClick={getData}
      className='bg-blue-500 active:scale-98 mb-3 px-5 py-2 rounded text-white'>
      Get Data
      </button> */}

      <div className='flex flex-wrap gap-4 p-2'>
        {printUserData}
      </div>

      <div className='flex gap-5 justify-center items-center p-4'>
        <PreviousButton 
          index={index}
          setIndex={setIndex}
          setUserData={setUserData}
        />
        <h4>Page {index}</h4>
        <NextButton
          index={index}
          setIndex={setIndex}
          setUserData={setUserData}
        />
      </div>  

    </div>
  )
}


export default App

