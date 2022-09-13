import React from 'react'

export default function BeautifulScreen({screenResult}) {
    // const [result, setResult] = React.useState;
    // const [calc, setCalc] = React.useState;
    
  return (
    <div className='wrapperBeautifulScreen'>
      <span className='screenTotal'>{screenResult.total}</span>
      <span className='screenCalcul'>{screenResult.calcul}</span>
    </div>
  )
}
