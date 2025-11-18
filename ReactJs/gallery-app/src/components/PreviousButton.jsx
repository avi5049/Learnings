import React from 'react'

const PreviousButton = ({ index, setIndex, setUserData }) => {
  return (
    <div>
      <button
        style={{opacity: index === 1 ? 0.5 : 1}} 
        onClick={()=>{
          if(index>1){
            setIndex(index-1)
            setUserData([])
          }
        }}
        className='bg-amber-400 text-sm cursor-pointer acive:scale-95 text-black rounded px-4 py-2 font-semibold'>Prev
        </button>
    </div>
  )
}

export default PreviousButton
