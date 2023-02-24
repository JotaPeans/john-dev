import React, { useState, useEffect, useRef, useContext } from "react";
import NodesContext from "../../contexts/NodesContext";
import { Position, Handle, NodeProps } from "reactflow";

const ScreenNode = (props: NodeProps) => {
    const { backgroundColor, font, title, } = useContext(NodesContext)

    return ( 
        <div className="bg-indigo-500 rounded-lg border border-indigo-100 overflow-hidden shadow-lg flex flex-col">
            <div className={`w-full border-b border-b-indigo-100 bg-indigo-400 h-6 px-2 text-white ${font}`}>
                {props.data.label}
            </div>

            <div className="w-full h-full flex flex-col justify-center items-center gap-2 px-4 py-3">
                <h2 className={`${font} text-xl`}>{title}</h2>
                <div className="flex gap-2">
                    <input type="color" value={backgroundColor} disabled/>
                    <h2 className={`${font} text-xl`}>{backgroundColor}</h2>
                </div>
                <h2 className={`${font} text-xl`}>{font}</h2>
            </div>

            <Handle
                position={props.data.type === "output" ? Position.Right : Position.Left}
                type={props.data.type === "output" ? "source" : "target"}
                className="!bg-indigo-200"
            />
        </div>
    );
}
 
export default ScreenNode;

