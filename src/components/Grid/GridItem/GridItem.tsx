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
  const resize = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.onresize = resize
  }, [])
  const style: {  gridRow?: string, gridColumn?: string} = {}
  let gridRow: string = `${rowStart} / ${rowEnd}`;
  let gridColumn: string = `${colStart} / ${colEnd}`;
  useEffect(() => {
    if ( Number(width) < 800) {
      gridColumn = '1/13'
      console.log(gridColumn)
    }
    console.log(width)
  }, [width])
  
  return (
    <div style={{ gridRow, gridColumn}} className={classes.gridItem}>
      {props.children}
    </div>
  )
}

export default GridItem
