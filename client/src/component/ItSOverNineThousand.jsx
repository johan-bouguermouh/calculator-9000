import React from 'react'

export default function ItSOverNineThousand({visibility}) {

  return (
    <>{
        visibility &&
        <span className='styleOver9000'>It’s Over 9000 !!!</span>
    }</>
  )
}
