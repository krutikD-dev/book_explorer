const Loading = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 min-h-screen">
      
    
      <div className="h-6 w-full max-w-md bg-gray-300 mb-8 animate-pulse rounded-lg" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
        
        <div className="w-full  rounded-lg bg-gray-300 animate-pulse" />


        <div className="md:col-span-2">
          
          <div className="h-10 w-full max-w-lg bg-gray-300 mb-6 rounded-lg animate-pulse" />
          
          <div className="h-5 w-full max-w-xl bg-gray-300 mb-6 rounded-lg animate-pulse" />


          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
            <div className="h-24 bg-gray-300 rounded-lg animate-pulse" />
            <div className="h-24 bg-gray-300 rounded-lg animate-pulse" />
            <div className="h-24 bg-gray-300 rounded-lg animate-pulse" />
          </div>

          <div className="mt-8">
            <div className="h-5 w-full max-w-md bg-gray-300 rounded-lg animate-pulse" />
            <div className="mt-3 h-64 sm:h-80 bg-gray-300 rounded-lg animate-pulse" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Loading;
