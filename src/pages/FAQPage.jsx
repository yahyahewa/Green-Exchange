import React from "react";

const FAQPage = () => {
  return (
    <div>
      <section className="flex items-center bg-gray-100 py-11 font-poppins dark:bg-gray-800">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-2 py-px mb-4 text-xs font-medium leading-5 text-blue-500 bg-blue-100 rounded-full shadow-sm dark:text-gray-400 dark:bg-gray-700">
              FAQ
            </span>
            <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tighter text-gray-700 dark:text-gray-300 md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mb-24 text-lg font-medium text-gray-500 dark:text-gray-400">
              Welcome to our FAQ (Frequently Asked Questions) page! Here, we
              have compiled a list of common inquiries to provide you with quick
              answers and assistance. If you have any additional questions that
              are not covered here, please feel free to reach out to our support
              team. We are here to help and ensure you have a smooth experience
              on GreenExchange.
            </p>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 mb-16 md:w-1/2 lg:w-1/3">
              <div className="relative h-full px-8 pt-16 pb-8 transition duration-200 rounded-md shadow-md bg-gray-50 dark:bg-gray-900 ">
                <div className="absolute top-0 inline-flex items-center justify-center w-16 h-16 transition duration-200 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full dark:bg-gray-800 left-1/2">
                  <div className="inline-flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-6 h-6 bi bi-patch-question"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745z" />
                      <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
                      <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0z" />
                    </svg>
                  </div>
                </div>
                <h2 className="max-w-xs mb-4 text-xl font-bold leading-7 text-gray-700 dark:text-gray-300">
                  How can I list an item on GreenExchange?
                </h2>
                <p className="font-medium text-gray-500 transition duration-200 dark:text-gray-500">
                  To list an item, simply create an account and navigate to the
                  "Listings" page. Click on the "Post Item" button, provide a
                  detailed description, upload relevant images, and set your
                  contact information. Your item will be visible to other users
                  on the platform.
                </p>
              </div>
            </div>
            <div className="w-full px-4 mb-16 md:w-1/2 lg:w-1/3">
              <div className="relative h-full px-8 pt-16 pb-8 transition duration-200 rounded-md shadow-md bg-gray-50 dark:bg-gray-900 ">
                <div className="absolute top-0 inline-flex items-center justify-center w-16 h-16 transition duration-200 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full dark:bg-gray-800 left-1/2">
                  <div className="inline-flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-6 h-6 bi bi-patch-question"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745z" />
                      <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
                      <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0z" />
                    </svg>
                  </div>
                </div>
                <h2 className="max-w-xs mb-4 text-xl font-bold leading-7 text-gray-700 dark:text-gray-300">
                  How do I apply to pick up an item?
                </h2>
                <p className="font-medium text-gray-500 transition duration-200 dark:text-gray-500">
                  When you find an item you're interested in, click on the
                  item's detail page. You will see an "Apply to Pick Up" button.
                  Clicking on it will initiate a secure messaging system that
                  allows you to communicate with the person who posted the item.
                  Coordinate a pickup time and finalize the transaction.
                </p>
              </div>
            </div>
            <div className="w-full px-4 mb-16 md:w-1/2 lg:w-1/3">
              <div className="relative h-full px-8 pt-16 pb-8 transition duration-200 rounded-md shadow-md bg-gray-50 dark:bg-gray-900 ">
                <div className="absolute top-0 inline-flex items-center justify-center w-16 h-16 transition duration-200 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full dark:bg-gray-800 left-1/2">
                  <div className="inline-flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-6 h-6 bi bi-patch-question"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745z" />
                      <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
                      <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0z" />
                    </svg>
                  </div>
                </div>
                <h2 className="max-w-xs mb-4 text-xl font-bold leading-7 text-gray-700 dark:text-gray-300">
                  What happens if I don't pick up an item within the given
                  timeframe?
                </h2>
                <p className="font-medium text-gray-500 transition duration-200 dark:text-gray-500">
                  It's important to pick up the item within 48 hours of applying
                  for it. If you fail to do so, the transaction will be
                  automatically rejected, and the item will be relisted for
                  other users to claim.
                </p>
              </div>
            </div>
            <div className="w-full px-4 mb-16 md:w-1/2 lg:w-1/3">
              <div className="relative h-full px-8 pt-16 pb-8 transition duration-200 rounded-md shadow-md bg-gray-50 dark:bg-gray-900 ">
                <div className="absolute top-0 inline-flex items-center justify-center w-16 h-16 transition duration-200 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full dark:bg-gray-800 left-1/2">
                  <div className="inline-flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-6 h-6 bi bi-patch-question"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745z" />
                      <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
                      <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0z" />
                    </svg>
                  </div>
                </div>
                <h2 className="max-w-xs mb-4 text-xl font-bold leading-7 text-gray-700 dark:text-gray-300">
                  Can I edit or remove my item listing after posting it?
                </h2>
                <p className="font-medium text-gray-500 transition duration-200 dark:text-gray-500">
                  Yes, you can edit or remove your item listing. Simply log into
                  your account, go to your item listing, and choose the
                  appropriate option to edit or delete it. Keep in mind that
                  once an item is deleted, it cannot be recovered.
                </p>
              </div>
            </div>
            <div className="w-full px-4 mb-16 md:w-1/2 lg:w-1/3">
              <div className="relative h-full px-8 pt-16 pb-8 transition duration-200 rounded-md shadow-md bg-gray-50 dark:bg-gray-900 ">
                <div className="absolute top-0 inline-flex items-center justify-center w-16 h-16 transition duration-200 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full dark:bg-gray-800 left-1/2">
                  <div className="inline-flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-6 h-6 bi bi-patch-question"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745z" />
                      <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
                      <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0z" />
                    </svg>
                  </div>
                </div>
                <h2 className="max-w-xs mb-4 text-xl font-bold leading-7 text-gray-700 dark:text-gray-300">
                  Is GreenExchange available in my location?
                </h2>
                <p className="font-medium text-gray-500 transition duration-200 dark:text-gray-500">
                  GreenExchange aims to be accessible to users worldwide. While
                  we strive for global reach, the availability of items may vary
                  based on the location and the users actively participating in
                  your area.Components are pre made web structures which are
                  used for making a website faster and easier.
                </p>
              </div>
            </div>
            <div className="w-full px-4 mb-16 md:w-1/2 lg:w-1/3">
              <div className="relative h-full px-8 pt-16 pb-8 transition duration-200 rounded-md shadow-md bg-gray-50 dark:bg-gray-900 ">
                <div className="absolute top-0 inline-flex items-center justify-center w-16 h-16 transition duration-200 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full dark:bg-gray-800 left-1/2">
                  <div className="inline-flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-6 h-6 bi bi-patch-question"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745z" />
                      <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
                      <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0z" />
                    </svg>
                  </div>
                </div>
                <h2 className="max-w-xs mb-4 text-xl font-bold leading-7 text-gray-700 dark:text-gray-300">
                  How can I contact the support team if I have further questions
                  or need assistance?
                </h2>
                <p className="font-medium text-gray-500 transition duration-200 dark:text-gray-500">
                  If you have any questions or need support, you can reach our
                  dedicated support team by emailing us at
                  support@greenexchange.com. We will be happy to assist you with
                  any queries or concerns you may have.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
