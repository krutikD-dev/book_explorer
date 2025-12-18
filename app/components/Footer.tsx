

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white h-[250px] p-7 gap-10">
        <div className="flex items-center gap-3">
        <div className="size-8 text-red-500">
          <svg
            fill="currentColor"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44H42.4379Z" />
          </svg>
        </div>

        <h2 className="text-xl font-extrabold tracking-tight text-gray-900 ">
          Books Explorer
        </h2>
      </div>
      <div className="flex justify-center gap-6 list-none text-gray-400">
        <li>About Us</li>
        <li>Terms Of Service</li>
        <li>Privacy Policy</li>
        <li>Help Center</li>
      </div>
      <div className="text-gray-300">
            © 2025 Book Explorer. All right reserved.
      </div>

    </div>
  )
}

export default Footer