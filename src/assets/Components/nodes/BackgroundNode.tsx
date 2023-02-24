import React, { useState, useEffect, useRef, useContext } from "react";
import NodesContext from "../../contexts/NodesContext";
import { Position, Handle, NodeProps } from "reactflow";

const BackgroundNode = (props: NodeProps) => {
    const colorRef = useRef<HTMLInputElement>(null);
    const { backgroundColor, setBackgroundColor, font } = useContext(NodesContext);

    useEffect(() => {
        if(colorRef.current) {
            colorRef.current.value = backgroundColor ? backgroundColor : "#0f172a";
        }
    }, [backgroundColor]);

    function changeBackgroundColor(e: React.FormEvent) {
        e.preventDefault();
        if(colorRef.current) {
            setBackgroundColor ? setBackgroundColor(colorRef.current.value): null;
        }
    }

    return ( 
        <div className="bg-indigo-500 rounded-lg w-40 h-20 border border-indigo-100 overflow-hidden shadow-lg flex flex-col">
            <div className={`w-full border-b border-b-indigo-100 bg-indigo-400 h-6 px-2 text-white ${font}`}>
                {props.data.label}
            </div>

            <div className="w-full h-full flex flex-col justify-center items-center gap-2 p-2">
                <input onChange={e => changeBackgroundColor(e)} className=" bg-indigo-500 flex items-center shadow-md overflow-clip " ref={colorRef} type="color" />
            </div>

            <Handle
                position={props.data.type === "output" ? Position.Right : Position.Left}
                type={props.data.type === "output" ? "source" : "target"}
                className="!bg-indigo-200"
            />
        </div>
    );
}
 
export default BackgroundNode;

