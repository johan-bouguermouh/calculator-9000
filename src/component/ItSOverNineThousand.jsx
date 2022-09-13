import React from 'react'

export default function ItSOverNineThousand({visibility}) {
  return (
    <div>{
        visibility &&
        <span>It’s Over 9000 !!!</span>
    }</div>
  )
}
