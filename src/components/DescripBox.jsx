

const DescripBox = () => {
  return (
    <div className="descrip-box px-10 py-5">
        <div className="nav-box flex gap-7">
            <button className="font-semibold text-sm lg:text-xl">Description</button>
            <button className="font-semibold text-sm lg:text-xl">Reviews(122)</button>
        </div>
        <div className="descrip border border-gray-600 rounded-lg p-2 my-4">
        <p className="p-3 lg:text-[16px] text-sm descrip">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum neque, illum soluta dolores, non impedit veritatis nisi voluptate assumenda minima laborum unde beatae sint! Necessitatibus rem dolor enim recusandae! Ullam.</p>
        <p className="p-3 lg:text-[16px] text-sm review hidden">Reviews Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum neque, illum soluta dolores, non impedit veritatis nisi voluptate assumenda minima laborum unde beatae sint! Necessitatibus rem dolor enim recusandae! Ullam.</p>
        </div>
    </div>
  )
}

export default DescripBox