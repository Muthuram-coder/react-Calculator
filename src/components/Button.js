import React from 'react'
import classes from './Button.module.css'

function Buttons({value,handler}) {
  return (
    <div className={value === "C" || value === "=" ? `${classes.calcbtns} ${classes.res}`: `${classes.calcbtns}`} onClick={()=>handler(value)}>
            {value}
    </div>
    
  )
}

export default Buttons