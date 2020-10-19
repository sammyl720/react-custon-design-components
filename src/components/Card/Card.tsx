import React from 'react'
import classes from './card.module.scss'

type CardProps = {

  bgImageUrl?: string;
}
const Card:React.FC<CardProps> = (props) => {
  return (
    <div style={{
      backgroundImage: props.bgImageUrl ? `url(${props.bgImageUrl})` : ''
    }} className={classes.card}>
      {props.children}
    </div>
  )
}

export default Card
