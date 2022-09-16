import React from 'react'

export default function Touch({value, setter, padFamilly}) {

    function assignClassPadFamilly(padFamilly){
        switch(padFamilly){
            case "number":
                return 'touch touchNumber';
            case "operation":
                return 'touch touchOperation';
            case "egual":
                return 'touch touchEgual';
            default:
                return 'touch'
        }
    }

  return (
    <button className={assignClassPadFamilly(padFamilly)} onClick={() => setter(value)}>{value}</button>
  )
}


