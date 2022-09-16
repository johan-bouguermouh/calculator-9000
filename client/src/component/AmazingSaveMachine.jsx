import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons'

export default function AmazingSaveMachine({handleSave}) {
  return (
    <button className='SaveMachine' onClick={handleSave}><FontAwesomeIcon icon={faFloppyDisk} color='#40c4fd' size='3x' /></button>
  )
}

