import React from 'react'

import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
export default function page2() {
  let location = useLocation()
  return (
    <div>
      {location.pathname}
    </div>
  )
}
