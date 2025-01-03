import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/slices/counter/counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        <button onClick={()=>dispatch(decrement())}>-</button>
        <span>{count}</span>
        <button onClick={()=>dispatch(increment())}>+</button>
      </div>
    </div>
  )
}