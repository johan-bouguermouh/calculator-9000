import React, { useState, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDown, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { getAllCalc } from '../service/calculAPI'

export default function AMazingLoadMachin({handleClik}) {
const [openModal, setOpenModal] = useState(false)
const [dataList, setDataList] = useState([])

    const getDataList = async() =>{
        setOpenModal(!openModal)
        const data = await getAllCalc()
        console.log(data)
        setDataList(data)
    }
    
    function liclick(value){
        handleClik(value)
        setOpenModal(!openModal)
    }

    const liList = useCallback(
      () => {
        const liElements = dataList.map((element) =>{
            return <li>
                <div>
                    <span>{element.total}</span>
                    <span>{element.calc}</span>
                </div>
                <button className='useItButton' onClick={()=>{liclick(`(${element.total})`)}}>Use</button>
            </li>
        }
        )
        const renderliList = liElements.length > 0 ? liElements : <li><span>0</span><span>Empty</span></li>
        console.log(liElements)
        return(
            <ul className='dataListLoadMachine'>
            {renderliList}
            </ul>
        )
      },
      [dataList],
    )
    

  return (
    <>
    <button className='SaveMachine' onClick={() => {getDataList()}}><FontAwesomeIcon icon={faCircleDown} color='#ff0062' size='3x'/></button>
    {
        openModal && 
        <div className='modalLoadMachine'>
            <button className='SaveMachine exit' onClick={() => {setOpenModal(!openModal)}}><FontAwesomeIcon icon={faCircleXmark} color='#ff0062' size='2x'/></button>
            {liList()}
        </div>
    }
    </>
    
  )
}

