import React,{useState} from "react";
import Bottom from "./Bottom";
const Add = () => {

    const [length,setLength] = useState(0);
    const [count,setCount] = useState([]);
    const[input,setInput] = useState("");
    const [checked, setChecked] = useState([]);
    const [filter,setFilter] = useState("all");
    const InputChange = (e) => {
        setInput(e.target.value);
    }

    const Remove = (index) => {
        setCount((prevCount) => {
            // copy the previous array
            const newCount = [...prevCount];
            // splice out the element at the given index
            newCount.splice(index, 1);
            // return the new array
            return newCount;
        });
        setChecked((prevChecked) => {
            // copy the previous array
            const newChecked = [...prevChecked];
            // splice out the element at the given index
            newChecked.splice(index, 1);
            // return the new array
            return newChecked;
        });
    };


    const handle = (event) => {
        if(event.charCode === 13){
            setLength(length+1);
           setCount([...count,input]);
           setInput("");
            setChecked([...checked, false]); // add this line
        }
    }

 const   handleCheck = (index) => {
     setChecked ((prevChecked) => {
         const newChecked = [...prevChecked];
         newChecked[index] = !newChecked[index];

         return newChecked;

     });
    }


    const showChecked = () => {
        setFilter("checked");
    };

    const showUnchecked = () => {
        setFilter("unchecked");
    };

    const showAll = () => {
        setFilter("all");
    };

    return (
        <>
            <input
                type="text"
                id="bar"
                className="form-control"
                value={input}
                onKeyPress ={handle}
                onChange={InputChange}
                placeholder="Add New "
            />

            {count.map((value, index) => {
                // check if the input field matches the filter
                const shouldShow =
                    filter === "all" ||
                    (filter === "checked" && checked[index]) ||
                    (filter === "unchecked" && !checked[index]);
                // render only if it matches
                return (
                    shouldShow && (
                        <div className="input-group mb-3 mt-2">
                            <div className="input-group-text">
                                <input
                                    className="form-check-input mt-0"
                                    type="checkbox"
                                    checked = {checked[index]}
                                    onChange={() => handleCheck(index)}
                                />
                            </div>
                            <input type="text" className="form-control" value={value} />
                            <button className="btn btn-outline-danger" onClick={() => Remove(index)}>
                                X
                            </button>
                        </div>
                    )
                );
            })}
            <Bottom showChecked={showChecked} showUnchecked={showUnchecked} showAll = {showAll} />
        </>
    );


}

export default Add;