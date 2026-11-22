import { useState } from "react";
const res = ["Friends","Love","Affection","Marriage","Enemy","Siblings"];
function App(){
  const [text1,setText1] = useState("");
  const [text2,setText2] = useState("");
  const [answer,displayAnswer] = useState("");
  function calculateBestRelationship(){    
     const map1 = new Map();
     const map2 = new Map();
     for(let i=0;i<text1.length;i++){
      map1.set(text1[i], map1.get(text1[i])+1 || 1);
     }
     for(let i=0; i<text2.length; i++){
      map2.set(text2[i], map2.get(text2[i])+1 || 1);
     }
     for(let i=0;i<text1.length;i++){
      let ch = text1[i];
      if(map2.has(ch)){
        const count = map2.get(ch);
        map2.set(ch,count-1);
        if(count-1<=0) map2.delete(ch);
      }
     }
     for(let i=0;i<text2.length;i++){
       let ch = text2[i];
      if(map1.has(ch)){
        const count = map1.get(ch);
        map1.set(ch,count-1);
        if(count-1<=0) map1.delete(ch);
      }
    }
    let newText1 = "", newText2 = "";
    for(const [key,value] of map1){
      if(value===1)
         newText1+=key;
      else{
        for(let i=0;i<value;i++){
          newText1+=key;
        }
      }
     }
    for(const [key,value] of map2){
      if(value===1)
         newText2+=key;
      else{
        for(let i=0;i<value;i++){
          newText2+=key;
        }
      }
    }
     let sum = newText1.length+newText2.length;
     let mod = sum%6;
     if(mod>0)
     displayAnswer(res[mod-1]);
    else
      displayAnswer(res[mod]);
  }
  function clearEverything(){
      setText1("");
      setText2("");
      displayAnswer("");
  }
  return(
    <>
      <input type="text" data-testid="input1" name="name1" value={text1} placeholder="Enter first name" onChange={(e)=>{setText1(e.target.value)}}/>
      <input type="text" data-testid="input2" name="name2" value={text2} placeholder="Enter second name" onChange={(e)=>{setText2(e.target.value)}} />
      <button data-testid="calculate_relationship" name="calculate_relationship" onClick={calculateBestRelationship}>Calculate Relationship Future</button>
      <button data-testid="clear" name="clear" onClick={clearEverything}>Clear</button>
      <div className="answer-container">
         <h3 data-testid="answer">{answer}</h3>
      </div>
    </>
  )
}

export default App;