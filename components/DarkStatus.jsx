import { useDispatch, useSelector } from "react-redux";


function DarkStatus() {
  const dark = useSelector((state) => state.dark.value);
  let style={}

  if(dark){
    style= {color:'#000'}

  }else{
    style={color:'#fff'}

  }

    return (
      <div>
        <p style={style}>Light is {dark?'on !':'off !'}</p>
      </div>
    );
  }
  
  export default DarkStatus;