import React, {useState} from "react";
import './Footer.scss'
import {arr1, arr2, arr3, arr4} from "../../constants";


export const ColumnWrapper = () => {

    const [activated1, setactivated1] = useState(false)
    const handleClick1 = () => {
        setactivated1(!activated1)
    }
    const [activated2, setactivated2] = useState(false)
    const handleClick2 = () => {
        setactivated2(!activated2)
    }
    const [activated3, setactivated3] = useState(false)
    const handleClick3 = () => {
        setactivated3(!activated3)
    }
    const [activated4, setactivated4] = useState(false)
    const handleClick4 = () => {
        setactivated4(!activated4)
    }

    return (
        <>
            <div className='column-wrapper'>
                <div className='column'>
                    <ul className={activated1 ?  'list active' : 'list'} onClick={handleClick1} >
                        <li className='list-title' >Customer Service</li>
                        {arr1.map((s,index) => <li key={index}><a href="#">{s}</a></li>)}
                    </ul>
                </div>

                <div className='middle-display'>
                    <div className='column middle'>
                        <ul className={activated2 ?  'list active' : 'list'} onClick={handleClick2} >
                            <li className='list-title'>Resources</li>
                            {arr2.map((s,index) => <li key={index}><a href="#">{s}</a></li>)}
                        </ul>
                    </div>

                    <div className='column middle'>
                        <ul className={activated3 ?  'list active' : 'list'} onClick={handleClick3} >
                            <li className='list-title'>Locations</li>
                            {arr3.map((s,index) => <li key={index}><a href="#">{s}</a></li>)}
                        </ul>
                    </div>
                </div>

                <div className='column'>
                    <ul className={activated4 ?  'list active' : 'list'} onClick={handleClick4} >
                        <li className='list-title'>About Herman Miller</li>
                        {arr4.map((s,index) => <li key={index}><a href="#">{s}</a></li>)}
                    </ul>
                </div>
            </div>
        </>
    )
}