import React from 'react'
import { Link } from 'react-router'

const ComboDrawer = () => {
  return (
    <div>
        <ul className="font-semibold">
            <li className='py-2 hover:text-[#729b4a7a] uppercase'> <Link to={"/view-All/makhanaCombo"}>Makhana Combo</Link></li>
            <li className='pb-2 hover:text-[#729b4a7a] uppercase'> <Link to={"/view-All/teaCombo"}>Tea Combo</Link></li>
        </ul>
    </div>
  )
}

export default ComboDrawer