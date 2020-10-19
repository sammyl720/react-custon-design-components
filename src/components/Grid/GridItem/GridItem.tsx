import React, { useEffect, useState } from 'react'
import classes from './GridItem.module.scss'

type ItemProps = {
  rowStart: number;
  rowEnd: number;
  colStart: number;
  colEnd: number;
}
const GridItem:React.FC<ItemProps> = (props) => {
  const { rowStart, colStart, rowEnd, colEnd } = props
  const [width, setWidth] = useState(window.innerWidth)
  
  return (
    <div className={`${classes.gridItem}
      ${classes['row-' + rowStart + '-' + rowEnd]}
      ${classes['col-' + colStart + '-' + colEnd]}
    `}>
      {props.children}
    </div>
  )
}

export default GridItem
