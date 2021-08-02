import { INCREMENT, DECREMENT } from '../constant';
import { CountAction } from '../type';

export default function countReducer(preState = 0, action: CountAction):number {
    const { type, data } = action;
    switch (type) {
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
        default: 
            return preState
    }
}