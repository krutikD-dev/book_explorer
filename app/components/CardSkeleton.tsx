import React from "react"


const CardSkeleton = () => {
  return (
    <div className="grid sm:grid-cols-1 justify-center md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
      {Array.from({ length: 4 }).map((_, i) => (
       <div key={i}>
         <div
          className="w-[200px] h-[276px] bg-gray-300 rounded-xl animate-pulse mr-12 flex-shrink-0 "
        ></div>
       </div>
      ))}
    </div>
  )
}

export default React.memo(CardSkeleton)