
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneOutboundFill } from "react-icons/bs"

const OrderPage = () => {
    return(
        <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="flex justify-start item-start space-y-2 flex-col">
        <h1 className="text-3xl text-white lg:text-4xl font-semibold leading-7 lg:leading-9 ">
          Order  Product Name
        </h1>
        <p className="text-base  font-medium leading-6  text-gray-300">
          21st Mart 2021 at 10:34 PM
        </p>
      </div>
      <div className="mt-10 flex flex-col xl:flex-row jusitfy-center  items-stretch w-full h-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div className="flex flex-col justify-start items-start w-full  space-y-4 md:space-y-6 xl:space-y-8">
          <div className="flex flex-col justify-start items-start  bg-gray-100 px-4 py-4 md:py-6 md:p-6 xl:p-8 h-full w-full">
            <p className="text-lg md:text-xl text-black font-semibold leading-6 xl:leading-5 ">
              Customer’s Order
            </p>
            <div className="mt-4 md:mt-6 bg flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
              <div className="pb-4 md:pb-8 w-full md:w-70 ">
                <img
                  className="w-full hidden md:block rounded-lg"
                  src="https://i.ibb.co/84qQR4p/Rectangle-10.png"
                  alt="dress"
                />

              </div>
              <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                <div className="w-full flex flex-col justify-start items-start space-y-8">
                  <h3 className="text-xl  xl:text-2xl font-semibold leading-6 text-gray-800">
                    Product name
                  </h3>
                  <div className="flex justify-start items-start flex-col space-y-2">
                    <p className="text-sm  leading-none text-gray-800">

                      category:
                      <span>{" catagory name"}</span>            </p>
                    <p className="text-sm  leading-none text-gray-800">

                      Situation:{<span className="text-sm rounded-sm p-1 px-6 bg-jade-900 text-white  leading-6">
                        Good
                      </span>}
                    </p>

                    <p className="text-sm  leading-none text-gray-800">
                      <span className="text-gray-600">
                        Details:<br />
                      </span>{" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure maxime cupiditate voluptatibus quibusdam, mollitia nostrum suscipit porro reprehenderit facilis minima quisquam temporibus officia saepe sunt delectus, alias ducimus perspiciatis earum."}

                    </p>
                  </div>
                </div>
                <div className="flex justify-end   space-x-8 items-start w-full">

                  <p className="text-base justify-end rounded-sm p-1 bg-jade-900 text-white xl:text-lg leading-6">
                    Delevired
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
        <div className="bg-white  text-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
          <h3 className="text-xl font-semibold leading-5 text-gray-800">
            Donator
          </h3>
          <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
            <div className="flex flex-col justify-start items-start flex-shrink-0">
              <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                <img src="https://i.ibb.co/5TSg7f6/Rectangle-18.png" alt="avatar" />
                <div className="flex justify-start items-start flex-col space-y-2">
                  <p className="text-base  font-semibold leading-4 text-left text-gray-800">
                    Donator Name
                  </p>

                </div>
              </div>
              <div className="flex justify-center text-gray-800  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                <BsFillTelephoneOutboundFill />
                <p className="cursor-pointer text-sm leading-5 ">
                  donatoremail@gmail.com
                </p>
              </div>
              <div className="flex justify-center text-gray-800  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                <AiOutlineMail />
                <p className="cursor-pointer text-sm leading-5 ">
                  donator phone Number                </p>
              </div>
            </div>
            <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
              <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                  <p className="text-base  font-semibold leading-4 text-center md:text-left text-gray-800">
                    Donator Address
                  </p>
                  <p className="w-48 lg:w-full  xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                    Donator location                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    )

    }

export default OrderPage