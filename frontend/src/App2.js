import { useState } from "react";

export default function MyForm() {
  const [answer, setAnswer] = useState("");
  const [stage, setStage] = useState("typing");
  const [message, setMessage] = useState("");

  const submitFunc = async (e) => {
    e.preventDefault();
    setStage("submitting");

    //in real time, below operation will be time consuming
    //do answer verification and set error message
    //to simulate delay, we added await function
    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (answer == "test") setMessage("Correct answer");
    else setMessage("Wrong answer.Try again!!!");
    setStage("typing");
  };

  //   function submitForm(){

  //   }

  // onTextAreaChange = (e) =>{
  //     setAnswer(e.target.value);
  // };

  // function submitFunc(e)
  // {

  // }

  return (
    <form onSubmit={submitFunc}>
      <p>Enter the answer below</p>
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      ></textarea>
      <button>submit</button>
      {message.length != 0 && <p>{message}</p>}
    </form>
  );
}
