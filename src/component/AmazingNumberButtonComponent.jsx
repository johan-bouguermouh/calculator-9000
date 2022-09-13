import React from 'react'
import Touch from './util/touchableComponent'

export default function AmazingNumberButton({getData, numberPending}) {
  const [value, setvalue] = React.useState('')

  function incrementValue(valueTouch){

    let lastValue = value
    console.log('NUMBER PENDING IN',numberPending)

    if(valueTouch === "←")
    {
      const newValue = lastValue.substring(0, lastValue.length - 1)
      console.log(newValue)
      setvalue(newValue)
    }
    else if(numberPending === '0'){
      console.log('IN NUMBER PENDINGS')
      setvalue(valueTouch)
    }
    else setvalue(lastValue += valueTouch);
  }

  React.useEffect(
    () => {
    getData(value)
    }
    ,[value]
  )

  return (
    <div className='amazingNumberButtonPad'>
      <Touch value="1" setter={incrementValue} padFamilly="number"></Touch>
      <Touch value="2" setter={incrementValue} padFamilly="number"></Touch>
      <Touch value="3" setter={incrementValue} padFamilly="number"></Touch>
      <Touch value="4" setter={incrementValue} padFamilly="number"></Touch>
      <Touch value="5" setter={incrementValue} padFamilly="number"></Touch>
      <Touch value="6" setter={incrementValue} padFamilly="number"></Touch>
      <Touch value="7" setter={incrementValue} padFamilly="number"></Touch>
      <Touch value="8" setter={incrementValue} padFamilly="number"></Touch>
      <Touch value="9" setter={incrementValue} padFamilly="number"></Touch>
      <Touch value="," setter={incrementValue} padFamilly="number"></Touch>
      <Touch value="0" setter={incrementValue} padFamilly="number"></Touch>
      <Touch value='←' setter={incrementValue} padFamilly="number"></Touch>
    </div>
  )
}
