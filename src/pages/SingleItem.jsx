
import { useParams } from 'react-router';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import {  Link } from 'react-router-dom';

const SingleItem = () => {

  const { itemId } = useParams();

  const location = useLocation();

  useEffect(() => { }, [itemId]);
  

  return (
    <section className="py-20 overflow-hidden bg-white font-poppins ">
      <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 md:w-1/2 ">
            <div className="sticky top-0 z-50 overflow-hidden ">

              {/* Main image  */}
              <div className="relative mb-6 lg:mb-10  hover:transition duration-300 ease-in-out hover:scale-110" style={{ height: 450 }}>
                <img
                  src={location.state.itemData.image}
                  alt=""
                  className="object-cover object-center w-full h-full  rounded-xl "
                />
              </div>
              {/* bottom images */}
              {/* <div className="flex-wrap flex ">
                <div className="w-1/4 p-2">
                  <a
                    href="#"
                    className="block border border-green-100 rounded-xl  hover:border-green-300 "
                  >
                    <img
                      src="https://thumbs.dreamstime.com/b/funny-face-12963753.jpg"
                      alt=""
                      className="object-cover w-full lg:h-32 rounded-xl"
                    />
                  </a>
                </div>
                <div className="w-1/4 p-2">
                  <a
                    href="#"
                    className="block border border-jade-100 rounded-xl  hover:border-jade-300 "
                  >
                    <img
                      src="https://thumbs.dreamstime.com/b/funny-face-12963753.jpg"
                      alt=""
                      className="object-cover w-full lg:h-32 rounded-xl"
                    />
                  </a>
                </div>
                <div className="w-1/4 p-2">
                  <a
                    href="#"
                    className="block border border-jade-100 rounded-xl  hover:border-jade-300 "
                  >
                    <img
                      src="https://thumbs.dreamstime.com/b/funny-face-12963753.jpg"
                      alt=""
                      className="object-cover w-full lg:h-32 rounded-xl"
                    />
                  </a>
                </div>
              </div> */}
            </div>



          </div>
          <div className="w-full px-4 md:w-1/2  ">
            <div className="lg:pl-20">

              {/* image deatails */}
              <div className="pb-6 mb-8 border-b  border-jade-200 ">
                <span className="text-xl font-bold text-gray-900 ">
                {location.state.itemData.productName}
                </span>
                <h2 className="max-w-xl mt-2 mb-6 text-lg font-bold text-gray-700">
                {location.state.itemData.userName}
                </h2>
                <div className="flex flex-wrap items-center mb-6">
                  <ul className="flex mb-4 mr-2 lg:mb-0">
                  </ul>
                  <div
                    className="mb-4 text-lg  text-gray-500  lg:mb-0"
                    href="#"
                  >
                   {location.state.itemData.dateTime}
                  </div>
                </div>
                <p className="max-w-md mb-8 text-gray-700 ">
                  Product Deatails
                </p>

                <p className="inline-block  text-gray-700  ">
                  <span className='text-2xl font-semibold'>Loacation</span>
                  <p>{location.state.itemData.dateTime}</p>
                </p>
              </div>
              <div className="mb-8 ">
              <span className='text-2xl font-semibold'>Category</span>
                  <p>{location.state.itemData.category}</p>
              </div>


              <div className="flex flex-wrap items-center  ">
                <div className="mb-4 mr-4 lg:mb-0 w-lg  w-full">
                <Link className='className="w-full h-12 p-2 mr-4 bg-green-600 font-bold  text-gray-50 rounded-md hover:bg-green-700 "'  state={{ itemData: location.state.itemData }} to={`/order/${location.state.itemData.id}`}>
                  
                    Order
                 </Link>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleItem
