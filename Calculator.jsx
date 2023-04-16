import React, { useEffect, useState } from "react";
function Calculator() {
  const [drop, setDrop] = useState();
  console.log(drop);
  const [input1, setInput1] = useState(5);
  const [input2, setInput2] = useState(Number);
  const [output, setOutput] = useState(0);
  console.log(input1);
  console.log(input2);
  console.log(output);
  useEffect(() => {
    switch (drop) {
      case "add":
        // let add = +;
        setOutput(parseInt(input1) + parseInt(input2));
        // parseInt(setOutput);
        break;
      case "sub":
        setOutput(input1 - input2);

        break;
      case "mul":
        setOutput(input1 * input2);

        break;
      case "div":
        setOutput(input1 / input2);

        break;

      default:
        break;
    }
  }, [drop, input1, input2, output]);
  return (
    <>
      <div className="">
        <div className="flex flex-col justify-center items-center space-y-10">
          <div>
            select:
            <select
              className="border"
              onChange={(e) => {
                setDrop(e.target.value);
              }}
            >
              <option value={""}>choose</option>
              <option value={"add"}>add</option>
              <option value={"sub"}>sub</option>
              <option value={"mul"}>mul</option>
              <option value={"div"}>division</option>
            </select>
          </div>
          <div>
            input1:
            <input
              className=" border"
              type={"number"}
              onChange={(e) => setInput1(e.target.value)}
            />
          </div>
          <div>
            input2:
            <input
              className=" border"
              type={"number"}
              onChange={(e) => setInput2(e.target.value)}
            />
          </div>
          <div>
            result:
            <input className="border" value={output} type={"text"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
