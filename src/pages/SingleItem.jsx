
const SingleItem = () => {
  return (
    <section className="py-20 overflow-hidden bg-white font-poppins ">
      <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 md:w-1/2 ">
            <div className="sticky top-0 z-50 overflow-hidden ">

              {/* Main image  */}
              <div className="relative mb-6 lg:mb-10  hover:transition duration-300 ease-in-out hover:scale-110" style={{ height: 450 }}>
                <img
                  src="https://thumbs.dreamstime.com/b/alpaca-funny-hair-stands-out-blue-sky-background-detailed-headshot-which-allows-you-to-clearly-54343701.jpg"
                  alt=""
                  className="object-cover object-center w-full h-full  rounded-xl "
                />
              </div>
              {/* bottom images */}
              <div className="flex-wrap flex ">
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
              </div>
            </div>



          </div>
          <div className="w-full px-4 md:w-1/2  ">
            <div className="lg:pl-20">

              {/* image deatails */}
              <div className="pb-6 mb-8 border-b  border-jade-200 ">
                <span className="text-xl font-bold text-gray-900 ">
                  Donator Name
                </span>
                <h2 className="max-w-xl mt-2 mb-6 text-lg font-bold text-gray-700">
                  Product Name
                </h2>
                <div className="flex flex-wrap items-center mb-6">
                  <ul className="flex mb-4 mr-2 lg:mb-0">
                  </ul>
                  <div
                    className="mb-4 text-lg  text-gray-500  lg:mb-0"
                    href="#"
                  >
                    1/1/2023
                  </div>
                </div>
                <p className="max-w-md mb-8 text-gray-700 ">
                  Product Deatails
                </p>

                <p className="inline-block text-2xl font-semibold text-gray-700  ">
                  <span>Loacation</span>

                </p>
              </div>
              <div className="mb-8 ">
                <h2 className="mb-2 text-xl font-bold text-gray-800 rounded-sm ">Category</h2>
              </div>

              <div className="pb-6 mb-8 border-b    border-jade-600 ">
                <h2 className="mb-2 text-xl font-bold text-gray-800 rounded-sm ">Like New</h2>

              </div>

              <div className="flex flex-wrap items-center  ">
                <div className="mb-4 mr-4 lg:mb-0 w-lg  w-full">
                  <button className="w-full h-12 p-2 mr-4 bg-green-600 font-bold  text-gray-50 rounded-md hover:bg-green-700 ">
                    Order
                  </button>
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
