
const About = () => {
  return (
    <section className="flex items-center bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800 ">
      <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-wrap ">
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <div className="relative lg:max-w-md">
              <img
                src="https://media.istockphoto.com/id/183430228/photo/cardboard-box-with-old-electrical-appliances.jpg?s=612x612&w=0&k=20&c=aS60twN-kWi4Xln2VwOTWx06JSyz60ibme24nSAXNQM="
                alt="aboutimage"
                className="relative z-10 object-cover w-full rounded h-96"
              />
              <div className="absolute bottom-0 right-0 z-10 p-8 bg-white border-4 border-green-500 rounded shadow dark:border-green-400 lg:-mb-8 lg:-mr-11 sm:p-8 dark:text-gray-300 dark:bg-gray-800 ">
                <p className="text-lg font-semibold md:w-72">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="absolute top-0 left-0 w-16 h-16 text-green-700 dark:text-gray-300 opacity-10"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                  </svg>{" "}
                  Protecting Earth, Our Shared Home.                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
            <div className="pl-4 mb-6 border-l-4 border-green-500 ">
              <span className="text-sm text-gray-600 uppercase dark:text-gray-400">
                Who we are?
              </span>
              <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                About Us
              </h1>
            </div>
            <p className="mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
              We are a team dedicated to creating a website that promotes service to the natural environment. Our mission is to provide a platform where people can come together to make a positive impact by donating their unused belongings to others. Through our website, individuals can easily connect with those in need of various items, fostering a sense of community and sustainability. By facilitating the exchange of goods, we aim to reduce waste, promote recycling, and encourage a culture of sharing and giving back to the environment. Together, we can make a difference and contribute to a healthier, more sustainable planet.





            </p>
            <a
              href="#"
              className="px-4 py-2 text-gray-100 bg-green-500 rounded dark:bg-green-400 dark:hover:bg-green-500 hover:bg-green-600"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>

  )
}

export default About
