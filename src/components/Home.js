import React, {useState} from 'react'
import classes from'./Home.module.css' 
import Button from './Button'
import ButtonBox from './ButtonBox'
function Home() {
    const [res, setres] = useState("")

    const buttons = ["C","9","/","8","7","6", "*","5","4","3", "+","2","1","0","-",".","del","="]
    const findval = () => {
      let result = Function("return "+res)();
      // console.log(result);
      setres(result.toString());
    }

    const handler = (arg) => {
      if(res === "infinity"){
        setres("");
        return;
      }
      
      if (arg === "C") setres("");
      else if(arg === "=") findval();
      else if(arg === "Del") {
        let n = res.length;
        if(n>0)
        setres(res.slice(0,n-1));
      } else setres(res.concat(arg))
    }

  return (
    <div className={classes.home}>
        <div className={classes.inner}>
          <div className={classes.result}>
            <div className={classes.resbox}>
              {res}
            </div>
        </div>
        <ButtonBox>
       
        {buttons.map((ele,index)=>{return <Button handler={handler}  value={ele} key={index}/>})}
          
       
          </ButtonBox>
        
           
        
        </div>
    </div>


  )
}

export default Home