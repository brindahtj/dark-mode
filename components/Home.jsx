import Image from 'next/image';
import styles from '../styles/Home.module.css';
import DarkStatus from './DarkStatus';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { toogle } from '@/pages/reducers/dark';

function Home() {
  const [darkStatus, setDarkstatus]=useState('')
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.dark.value);
  const handleClick= () => {
    dispatch(toogle())
  }
  let style={}
  if(dark){
    style={backgroundColor:'#fff'}
  }else{
    style= {backgroundColor:'#000'}
  }



  return (
    <div className={styles.container } style={style} >

      <Image
        src={dark?'/light.png':'/dark.png'}
        alt={dark?'Light':'Dark'}
        width={128}
        height={128}
        onClick={()=>handleClick()}
        className={styles.switch}
      />
      <DarkStatus />
    </div>
  );
}

export default Home;