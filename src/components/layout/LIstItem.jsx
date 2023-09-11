import React from 'react'

function LIstItem({itemName,className}) {
  return (
    <li className={className}>{itemName}</li>
  )
}

export default LIstItem