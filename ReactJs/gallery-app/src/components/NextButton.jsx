import React from 'react'

const NextButton = ({ index, setIndex, setUserData }) => {
  return (
    <div>
      <button 
        onClick={()=>{
          setIndex(index+1)
          setUserData([])

        }}
        className='bg-amber-400 text-sm cursor-pointer acive:scale-95 text-black rounded px-4 py-2 font-semibold'>Next
        </button>
    </div>
  )
}

export default NextButton
