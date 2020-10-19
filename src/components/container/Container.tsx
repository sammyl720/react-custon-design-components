import React from 'react'
import classes from './container.module.scss'

type ContainerProps = {
  addClasses?: string;
}
const Container:React.FC<ContainerProps> = ({ children, addClasses }) => {
  return (
    <div className={classes.container + ' ' + addClasses}>
      {children}
    </div>
  )
}

export default Container
