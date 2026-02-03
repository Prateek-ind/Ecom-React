import React from 'react'
import { useNavigate } from 'react-router';

const MultiButton = ({label, className, navigateTo, onClick=()=>{}, closeCartDrawer=()=>{} }) => {
    const navigate = useNavigate()
  return (
    <button
          className={className}
          onClick={() => {
            onClick()
            navigate(navigateTo, {replace: false, relative: null});
            closeCartDrawer();
          }}
        >
          {label}
        </button>
  )
}

export default MultiButton