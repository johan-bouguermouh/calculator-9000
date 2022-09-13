import React from 'react'
import AmazingNumberButton from '../component/AmazingNumberButtonComponent'
import BeautifulScreen from '../component/BeautifulScreenComponent'
import GreatOperationButton from '../component/GreatOperationButtonComponent'
import ItSOverNineThousand from '../component/ItSOverNineThousand'
import MagnificientEqualButton from '../component/MagnificientEqualButtonComponent'

export default function CalculatorContainer() {
    const [screenResult, setScreenResult] = React.useState({
        "total" : '',
        "calcul": '',
    })
    const [eventCalcul, setEventCalcul] = React.useState([])
    const [numberPending, setnumberPending] = React.useState('')
    const [visibility, setVisibility] = React.useState(false)

    React.useEffect(()=>{
        console.log(screenResult)
    },[screenResult])

    

    function addtionalEvent(operator){
        if(eventCalcul.length === 0 && numberPending)
        {
            let arrayToEdit = [numberPending]
            arrayToEdit.push(operator)
            arrayToEdit.push('')
            setEventCalcul(arrayToEdit)
            setnumberPending('0')
        }
        else if(eventCalcul.length > 0 && numberPending){
            let arrayToEdit = [...eventCalcul]
            arrayToEdit[arrayToEdit.length-1] = numberPending
            arrayToEdit.push(operator)
            arrayToEdit.push('')
            setEventCalcul(arrayToEdit)
            setnumberPending('0')
        }
        else console.log('nofingtofixiT')
    }

    function renderScreen(valuePad){
        if(valuePad && valuePad.length > 0)
        {
        const newScreen = {
            "total" : 0,
            "calcul": valuePad,
        }
        setScreenResult(newScreen)
        setnumberPending(valuePad)
        }
    }

    function actionEqualButton(value){

        if(value === '=')
        {
            let total = 0
           let arraytoEdit = [...eventCalcul]
           arraytoEdit[arraytoEdit.length-1] = numberPending
           console.log(arraytoEdit)
           arraytoEdit.forEach( item => {
            if(item === '+' || item === '-')
            total+=item;
            else if(item === '×'){
                total+= '*'
            }
            else if(item === '÷')
            {
                total+='/'
            }
            else total+= parseInt(item)
           })
           const result = eval(total)
           console.log(result)
           setScreenResult({
                'calcul':total,
                'total': result })
            setVisibility(true)
        }
    }


  return (
    <div className='wrapperCalculator'>
        <ItSOverNineThousand visibility={visibility}/>
        <BeautifulScreen screenResult={screenResult}/>
        <div className='wrapperPad'>
        <AmazingNumberButton getData={renderScreen} numberPending={numberPending}/>
        <GreatOperationButton addOperator={addtionalEvent}></GreatOperationButton>
        </div>
        {/* <button className='touch touchEgual' onClick={() => actionEqualButton("=")}> = </button> */}
        <MagnificientEqualButton getEgual={actionEqualButton}/>
    </div>
  )
}
