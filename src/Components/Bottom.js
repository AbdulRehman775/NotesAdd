import React from "react";

const Bottom = (props) => {






    return(
        <div class="row mt-4 mb-0 bg-light">
        <div class="col">
            <button class="btn">
                <i class="fa-solid fa-plus"></i>
            </button>
        </div>
        <div class="col">
            <button class="btn">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>

        <div class="col border-start">

            <p class="text-nowrap">Things to do</p>
        </div>
        <div class="col">
            <button class="btn" onClick = {props.showAll}>
                All
            </button>
        </div>
        <div class="col">
            <button class="btn" onClick = {props.showUnchecked}>
                Active
            </button>
        </div>
        <div class="col" onClick = {props.showChecked}>
            <button class="btn">
                Completed
            </button>
        </div>
    </div>

 );
}

export default Bottom;