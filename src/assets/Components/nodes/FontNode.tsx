import React, { useState, useEffect, useRef, useContext } from "react";
import NodesContext from "../../contexts/NodesContext";
import { Position, Handle, NodeProps } from "reactflow";

const FontNode = (props: NodeProps) => {
    const { font, setFont } = useContext(NodesContext);

    function updateFont(e: React.MouseEvent<HTMLButtonElement>) {
        const font = (e.target as HTMLButtonElement).value
        setFont ? setFont(`font-${font}`) : null;
    }

    const fonts = [
        'normal',
        'consolas',
        'cursive',
        'bahnschrift',
        'inkFree',
        'symbol',
    ];

    return ( 
        <div className="bg-indigo-500 rounded-lg w-40 border border-indigo-100 overflow-hidden shadow-lg flex flex-col">
            <div className={`w-full border-b border-b-indigo-100 bg-indigo-400 h-6 px-2 text-white ${font}`}>
                {props.data.label}
            </div>

            <div className="w-full h-full flex flex-col gap py-2">
                {fonts.map(font => {
                    return (
                        <button onClick={e => updateFont(e)} value={font} key={font} className={`${font} hover:bg-indigo-700 px-2 capitalize`} >{font}</button>
                    )
                })}
            </div>

            <Handle
                position={props.data.type === "output" ? Position.Right : Position.Left}
                type={props.data.type === "output" ? "source" : "target"}
                className="!bg-indigo-200"
            />
        </div>
    );
}
 
export default FontNode;

