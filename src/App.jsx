import { useState, useEffect } from "react";

function App() {
  let btn = Array.from(
    document.querySelectorAll("button.food")
  );
  const [checkAll, setCheckAll] = useState(false)
  const [checkButtonIce, setCheckButtonIce] = useState(false)
  const [checkButtonHot, setCheckButtonHot] = useState(false)
  const [checkButtonPop, setCheckButtonPop] = useState(false)
  const [checkButtonCookie, setCheckButtonCookie] = useState(false)
  const [text, setText]= useState("")
  const arrSetters = [setCheckAll, setCheckButtonIce, setCheckButtonHot, setCheckButtonCookie, setCheckButtonPop];

  const checkAllHandler = () => {
    // setCheckAll(!checkAll);
    arrSetters.map((items) => {
      items(prevCheck => !prevCheck);
    })
  }





  return (
    <main className="bg-white py-3 px-8 rounded-md w-[30rem] pb-10">
      <p className="border-b-[1px] py-3 mb-6 text-[1.2rem] font-semibold transition-all ease-in-out duration-150">{checkAll? "Ice-Cream, Hot-Dog, and 2 more":
       "Please select food"}</p>
      <div className="flex flex-col items-baseline gap-3 text-[1rem] font-semibold">
        <button className={`font-bold btn ${checkAll? "bg-gray-200" : ""}`} onClick={checkAllHandler}>Check all</button>
        <button className={`food btn ${checkAll? "bg-gray-200 " : ""}`}>Ice-Cream</button>
        <button className={`food btn ${checkAll? "bg-gray-200 " : ""}`}>Hot-Dog</button>
        <button className={`food btn ${checkAll? "bg-gray-200 " : ""}`}>Popcorn</button>
        <button className={`food btn ${checkAll? "bg-gray-200 " : ""}`}>Cookie</button>
      </div>
    </main>
  );
}

export default App;
