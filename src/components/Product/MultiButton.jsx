import React from 'react'
import { useNavigate } from 'react-router';

const MultiButton = ({label, className, navigateTo, closeCartDrawer=()=>{} }) => {
    const navigate = useNavigate()
  return (
    <button
          className={className}
          onClick={() => {
            navigate(navigateTo);
            closeCartDrawer();
          }}
        >
          {label}
        </button>
  )
}

export default MultiButton