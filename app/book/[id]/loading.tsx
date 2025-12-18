
const loading = () => {
  return (
    <div className="w-[80%] mx-auto px-6 py-12 min-h-[screen]">
        <div className="h-[24px] w-[600px] bg-gray-300 mb-8 animate-pulse rounded-lg"/>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-40">
                <div className="w-[367px] h-[551px] rounded-lg bg-gray-300 animate-pulse"></div>
                <div className="md:col-span-2">
                          <div className="h-[50px] w-[500px] bg-gray-300 mb-8 rounded-lg animate-pulse"/>
                            <div className="h-[24px] bg-gray-300 mb-8 rounded-lg animate-pulse"/>
                    <div className="grid grid-cols-3 gap-6 mt-9">
                      <div className="h-[120px] bg-gray-300 rounded-lg animate-pulse"></div>
                      <div className="h-[120px] bg-gray-300 rounded-lg animate-pulse "></div>
                      <div className="h-[120px] bg-gray-300 rounded-lg animate-pulse "></div>
                    </div>
                    <div className="mt-10">
                      <div className="h-[24px] bg-gray-300 rounded-lg w-[600px] animate-pulse"></div>
                      <div className="mt-3 bg-gray-300 rounded-lg animate-pulse h-[450px] animate-pulse"></div>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default loading