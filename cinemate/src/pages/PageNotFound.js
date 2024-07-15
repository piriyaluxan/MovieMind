import { useEffect } from "react"
import  PageNotFoundimage  from "../assets/images/pagenotfound.png"
import { Link } from "react-router-dom"

export const PageNotFound = () => {
  useEffect(()=>{
      document.tittle=`Page Not Found`;
  });
  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center my-4'>
        <p className='text-7xl text-gray-700 font-bold my-10 dark:text-white'>404,oops!</p>
        <div className="max-w-lg">
          <img className="rounded" src={PageNotFoundimage} alt="404 page not found" />
        </div>
        </div>
        <div className="flex justify-center my-4">
            <Link to="/">
            <button type="button" class="text-white bg-[#2563eb] hover:bg-[#1e40af]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2">
              
              Back to cinemate
              </button>
            </Link>
        </div>
      </section>
    </main> 
  )
}
