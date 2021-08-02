import { INCREMENT, DECREMENT } from '../constant';

export const increment = (data: number) => ({type: INCREMENT, data})
export const decrement = (data: number) => ({type: DECREMENT, data})


