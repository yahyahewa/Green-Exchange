import {NavLink} from 'react-router-dom'

const SuccessOrder = () => {
  return (
    <>
      
     
      {/* Page Container */}
      <div className="flex items-center justify-center min-h-screen bg-white py-48">
       
              {/* Success Card */}
              <div className="bg-green-500 rounded-md shadow-md p-5 text-white">
                  <div className="flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1.414-9.414l-3 3a1 1 0 01-1.414 0l-1-1a1 1 0 011.414-1.414L7 8.586l2.293-2.293a1 1 0 011.414 1.414z" clipRule="evenodd" />
                      </svg>
                  </div>
                  <div className="text-center mt-3">
                      < NavLink to={'/'} className="text-xl font-bold">Order Success</NavLink>
                     </div>
          </div>
          </div>


      





    </>
  )
}

export default SuccessOrder