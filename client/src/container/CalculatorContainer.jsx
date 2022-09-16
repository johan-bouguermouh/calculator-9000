import React from 'react'
import AmazingNumberButton from '../component/AmazingNumberButtonComponent'
import BeautifulScreen from '../component/BeautifulScreenComponent'
import GreatOperationButton from '../component/GreatOperationButtonComponent'
import ItSOverNineThousand from '../component/ItSOverNineThousand'
import MagnificientEqualButton from '../component/MagnificientEqualButtonComponent'
import { v4 as uniqId } from 'uuid'
import AmazingSaveMachine from '../component/AmazingSaveMachine'
import AmazingLoadMachin from '../component/AmazingLoadMachin'
import TheTitle from '../component/theTitleComponent'
import { creatCalc } from '../service/calculAPI'


export default function CalculatorContainer() {
    const [screenResult, setScreenResult] = React.useState({
        "total" : 0,
        "calcul": '',
    })
    const [eventCalcul, setEventCalcul] = React.useState('')
    const [visibility, setVisibility] = React.useState(false)
    const [userId, setUserId] = React.useState('')
    const tableOpertor = ['×','÷','-','+']

    React.useEffect(
        ()=>{
        if(localStorage.getItem('userId') !== null){
            setUserId(localStorage.getItem('userId'))
        }else{
            const newId = uniqId()
            localStorage.setItem('userId', newId)
            setUserId(newId)
        } 
    },[]
    )

    function SaveCalc(screenResult, userId){
        const {total, calcul} = screenResult
        console.log('IN SAVE CALCUL')
        if(total !== 0){
            const data = {
                'user_id': userId,
                'calc' : calcul,
                'total': total,
            }
            creatCalc(data)
        }
    }

    function addtionalEvent(newValue){

        let lastvalue = eventCalcul ;
        if(newValue === 'back')
        {
            lastvalue && lastvalue.length === 1 ? lastvalue = '' : lastvalue = lastvalue.substring(0,lastvalue.length-1)

        } else if(tableOpertor.includes(lastvalue[lastvalue.length-1]) && lastvalue[lastvalue.length-1] === newValue){
            console.log('Calcul can supported that')
        } else if(screenResult.total !== 0 && calcResult()=== screenResult.total && tableOpertor.includes(newValue)){
            lastvalue = '('+screenResult.total+')'+newValue
        } else lastvalue += newValue ;
        setEventCalcul(lastvalue) ;
        setScreenResult({
            "total": screenResult.total,
            "calcul": lastvalue
        })
    }
    
    function calcResult(){
        const eventCalcWithoutLastOp = tableOpertor.includes(eventCalcul[eventCalcul.length-1]) ? eventCalcul.substring(0,eventCalcul.length-1) : eventCalcul ;
            let preparCalcul = eventCalcWithoutLastOp.replace('×','*')
            preparCalcul = preparCalcul.replace('÷','/')
            const newTotal = eval(preparCalcul) ;
            return newTotal
    }

    function actionEqualButton(value){

        if(value === '=' && eventCalcul !== ''){
            const eventCalcWithoutLastOp = tableOpertor.includes(eventCalcul[eventCalcul.length-1]) ? eventCalcul.substring(0,eventCalcul.length-1) : eventCalcul ;
            const newTotal = calcResult() ;

            setScreenResult({
                "total": newTotal,
                "calcul": eventCalcWithoutLastOp
            })

            setVisibility( newTotal > 9000 || newTotal === 'infinity' ? true : false )
        }
        else if( value === 'CA')
        {
            setScreenResult({
                "total" : 0,
                "calcul": '',
            })
            setEventCalcul('')
        }
    }


  return (
    <div className='wrapperCalculator'>
        <header>
        <TheTitle/>
            <div>
            {userId && <AmazingLoadMachin handleClik={addtionalEvent}/>}
            <AmazingSaveMachine handleSave={() => SaveCalc(screenResult, userId)}/>
            </div>
        </header>
        <ItSOverNineThousand visibility={visibility}/>
        <BeautifulScreen screenResult={screenResult}/>
        <div className='wrapperPad'>
        <AmazingNumberButton getData={addtionalEvent}/>
        <GreatOperationButton addOperator={addtionalEvent}></GreatOperationButton>
        </div>
        {/* <button className='touch touchEgual' onClick={() => actionEqualButton("=")}> = </button> */}
        <MagnificientEqualButton getEgual={actionEqualButton}/>
    </div>
  )
}
