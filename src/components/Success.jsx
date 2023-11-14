import React, { useEffect } from 'react'
import { emptyCart } from '../redux/cartState/cartSlice'
import { useDispatch } from 'react-redux'

function Success() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(emptyCart())
  },[])

  return (
    <h1 style={{ textAlign:"center" }}>thank you for your purchase!</h1>
  )
}

export default Success