

const HomePage = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <section className="flex flex-col items-center justify-center py-20 ">
        <h1 className="text-3xl px-5 sm:text-4xl text-to font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 to-neutral-400">ones Trash is another persons Treasure</h1>
        <p className="mt-4 px-10 text-md text-center text-neutral-400">you protect environment by giving what you no longer need</p>
        <div className='flex flex-col justify-center items-center gap-2 mt-10'>
        <div className="avatar">
  <div className="w-24 rounded-full">
    <img src="https://images.unsplash.com/photo-1614204424926-196a80bf0be8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
            </div>
            
          </div>   
          <h3 className="font-bold text-neutral-600 ">Shnyar Abdulrahman</h3>
          <span className="mt-1 bg-yellow-500 px-3 py-1 rounded-full text-yellow-200 animate-bounce">for donation</span>
          <img className="px-5 sm:max-w-md -mt-16" src="https://www.pngmart.com/files/7/Yellow-Sofa-PNG-Transparent-Image.png"/>
        </div>
      </section>
    </main>
  )
}

export default HomePage