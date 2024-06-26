

const News = () => {
  return (
    <div className="news p-12 bg-gradient-to-b from-yellow-400 flex flex-col gap-8 shadow-md">
        <h1 className='font-bold text-2xl lg:text-4xl text-center'>Be The First One to Get Our Exclusive Offers</h1>
        <p className="lg:text-3xl font-semibold text-center">Subscribe To Our NewsLetter</p>
        <div className="flex gap-5 items-center justify-center">
            <input type="email" placeholder="Your Email" className="p-2 lg:p-3 border border-gray-900 rounded-md lg:w-[500px]" />
            <button className="text-white bg-red-500 rounded-md lg:p-3 p-2 font-semibold">Subscribe</button>
        </div>
    </div>
  )
}

export default News;