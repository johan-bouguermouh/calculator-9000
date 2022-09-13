import React from 'react'
import Touch from './util/touchableComponent'

export default function AmazingNumberButton({getData}) {

  function incrementValue(valueTouch){


    if(valueTouch === "←")
    {
      getData('back')
    }
    else getData(valueTouch)
  }


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
