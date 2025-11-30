import { MdKeyboardArrowRight } from "react-icons/md";

const ShopByCategoryDrawer = () => {
  return (
    <div>
        <ul className="font-semibold">
            <li className='pb-2 hover:text-[#729b4a7a] uppercase'>Makhana</li>
            <li className='pb-2 hover:text-[#729b4a7a] uppercase'>Tea</li>
            <li className='pb-2 hover:text-[#729b4a7a] uppercase flex items-center justify-between'>Combo <MdKeyboardArrowRight/></li>
        </ul>
    </div>
  )
}

export default ShopByCategoryDrawer