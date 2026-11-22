import { useState } from "react";
const res = ["Friends","Love","Affection","Marriage","Enemy","Siblings"];
function App(){
  const [text1,setText1] = useState("");
  const [text2,setText2] = useState("");
  const [answer,displayAnswer] = useState("");
  function calculateBestRelationship(){
     const firstText = text1.toLowerCase(), secondText = text2.toLowerCase();
     const freq1 = new Array(26).fill(0);
     const freq2 = new Array(26).fill(0);
     for(let i=0;i<firstText.length;i++){
       let ch = firstText.charCodeAt(i)-'a'.charCodeAt(0);
       freq1[ch]++;
     }
     for(let i=0;i<secondText.length;i++){
         let ch = secondText.charCodeAt(i)-'a'.charCodeAt(0);
         freq2[ch]++;
     }
     let sum = 0;
     for(let i=0;i<freq1.length;i++){
      sum = sum + Math.abs(freq1[i]-freq2[i]);
     }
     let mod = sum%6;
     displayAnswer(res[mod-1]); 
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