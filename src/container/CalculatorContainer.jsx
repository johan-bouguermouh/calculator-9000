import React from 'react'
import AmazingNumberButton from '../component/AmazingNumberButtonComponent'
import BeautifulScreen from '../component/BeautifulScreenComponent'
import GreatOperationButton from '../component/GreatOperationButtonComponent'
import ItSOverNineThousand from '../component/ItSOverNineThousand'
import MagnificientEqualButton from '../component/MagnificientEqualButtonComponent'

export default function CalculatorContainer() {
    const [screenResult, setScreenResult] = React.useState({
        "total" : 0,
        "calcul": '',
    })
    const [eventCalcul, setEventCalcul] = React.useState('')
    const [numberPending, setnumberPending] = React.useState('')
    const [visibility, setVisibility] = React.useState(false)

    React.useEffect(()=>{
        console.log(screenResult)
    },[screenResult])

    

    function addtionalEvent(newValue){

        let lastvalue = eventCalcul ;
        if(newValue === 'back')
        {
            lastvalue && lastvalue.length === 1 ? lastvalue = '' : lastvalue = lastvalue.substring(0,lastvalue.length-1)

        } else lastvalue += newValue ;
        setEventCalcul(lastvalue) ;
        setScreenResult({
            "total": screenResult.total,
            "calcul": lastvalue
        })


        // if(eventCalcul.length === 0 && numberPending)
        // {
        //     let arrayToEdit = [numberPending]
        //     arrayToEdit.push(operator)
        //     arrayToEdit.push('')
        //     setEventCalcul(arrayToEdit)
        //     setnumberPending('0')
        // }
        // else if(eventCalcul.length > 0 && numberPending){
        //     let arrayToEdit = [...eventCalcul]
        //     arrayToEdit[arrayToEdit.length-1] = numberPending
        //     arrayToEdit.push(operator)
        //     arrayToEdit.push('')
        //     setEventCalcul(arrayToEdit)
        //     setnumberPending('0')
        // }
        // else console.log('nofingtofixiT')
    }

    // function renderScreen(valuePad){
    //     if(valuePad && valuePad.length > 0)
    //     {
    //     const newScreen = {
    //         "total" : 0,
    //         "calcul": valuePad,
    //     }
    //     setScreenResult(newScreen)
    //     setnumberPending(valuePad)
    //     }
    // }

    function actionEqualButton(value){

        if(value === '=' && eventCalcul !== ''){
            const tableOpertor = ['×','÷','-','+']
            const eventCalcWithoutLastOp = tableOpertor.includes(eventCalcul[eventCalcul.length-1]) ? eventCalcul.substring(0,eventCalcul.length-1) : eventCalcul ;
            let preparCalcul = eventCalcWithoutLastOp.replace('×','*')
            preparCalcul = preparCalcul.replace('÷','/')
            const newTotal = eval(preparCalcul) ;

            setScreenResult({
                "total": newTotal,
                "calcul": eventCalcWithoutLastOp
            })
        }
        // {
        //     let total = 0
        //    let arraytoEdit = [...eventCalcul]
        //    arraytoEdit[arraytoEdit.length-1] = numberPending
        //    console.log(arraytoEdit)
        //    arraytoEdit.forEach( item => {
        //     if(item === '+' || item === '-')
        //     total+=item;
        //     else if(item === '×'){
        //         total+= '*'
        //     }
        //     else if(item === '÷')
        //     {
        //         total+='/'
        //     }
        //     else total+= parseInt(item)
        //    })
        //    const result = eval(total)
        //    console.log(result)
        //    setScreenResult({
        //         'calcul':total,
        //         'total': result })
        //     setVisibility(true)
        // }
    }


  return (
    <div className='wrapperCalculator'>
        <ItSOverNineThousand visibility={visibility}/>
        <BeautifulScreen screenResult={screenResult}/>
        <div className='wrapperPad'>
        <AmazingNumberButton getData={addtionalEvent} numberPending={numberPending}/>
        <GreatOperationButton addOperator={addtionalEvent}></GreatOperationButton>
        </div>
        {/* <button className='touch touchEgual' onClick={() => actionEqualButton("=")}> = </button> */}
        <MagnificientEqualButton getEgual={actionEqualButton}/>
    </div>
  )
}
