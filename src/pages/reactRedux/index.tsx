import React, { useState } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../../redux/actions/count';
import { StoreState } from '../../redux/type';
import { Select, Button } from 'antd';

const { Option } = Select;

export interface Iprops {
    count: number,
    increment: Function,
    decrement: Function
}

function ReactReduxUI({ count, increment, decrement }: Iprops) {
    const [num, setNum] = useState<number>(2)
    const handleChange = (value: number) => {
        setNum(value * 1)
    }
    const handleClickIncrease = () => {
        increment(num)
    }
    const handleClickDecrease = () => {
        decrement(num)
    }
    return (
        <div>
            <h1>当前count为：{count}</h1>
            <Select defaultValue={num} style={{ width: 120 }} onChange={handleChange}>
                <Option value='1'>1</Option>
                <Option value='2'>2</Option>
            </Select>
            <hr style={{ margin: '10px 0' }} />
            <Button type="primary" style={{ marginRight: '20px' }} onClick={handleClickIncrease}>增加</Button>
            <Button type="primary" onClick={handleClickDecrease}>减少</Button>
        </div>
    )
}

export default connect(
    (state: StoreState) => ({
        count: state.count
    }),
    {
        increment,
        decrement
    }
)(ReactReduxUI)
