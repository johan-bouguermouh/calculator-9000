import React from 'react'
import Touch from './util/touchableComponent'

export default function GreatOperationButton({addOperator}) {
  function getOperateur(valueTouch)
  {
    addOperator(valueTouch)
  }
  return (
    <div className='greatOperationButtonPad'>
      <Touch value="+" setter={getOperateur} padFamilly="operation"></Touch>
      <Touch value="-" setter={getOperateur} padFamilly="operation"></Touch>
      <Touch value="×" setter={getOperateur} padFamilly="operation"></Touch>
      <Touch value="÷" setter={getOperateur} padFamilly="operation"></Touch>
    </div>
  )
}
