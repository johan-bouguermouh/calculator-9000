import React from 'react'

export default function BeautifulScreen({screenResult}) {
    const [result, setResult] = React.useState('');
    const [calc, setCalc] = React.useState('');

    React.useEffect(()=>{
      setResult(screenResult.total)
      setCalc(screenResult.calcul)
    })
    
  return (
    <div className='wrapperBeautifulScreen'>
      <span className='screenTotal'>{result}</span>
      <span className='screenCalcul'>{calc}</span>
    </div>
  )
}
