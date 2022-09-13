import React from 'react'
import Touch from './util/touchableComponent'

export default function MagnificientEqualButton(props) {

  const rendervalue = (param) => {
    props.getEgual(param)
  }

  return (
    <div className='magnificientEqualButton'>
      <button className='touch touchEgual' onClick={() => rendervalue('=')}> = </button>
    </div>
  )
}
