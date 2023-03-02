import React, { useState, useEffect, useRef, useContext } from "react";
import NodesContext from "../../contexts/NodesContext";
import { Position, Handle, NodeProps } from "reactflow";

const TitleNode = (props: NodeProps) => {
    const titleRef = useRef<HTMLInputElement>(null);
    const { title, setTitle, font } = useContext(NodesContext);

    useEffect(() => {
        if(titleRef.current) {
            titleRef.current.value = title || "John.dev()";
        }
    }, [title]);

    function changeTitle(e: React.FormEvent) {
        e.preventDefault();
        if(titleRef.current) {
            setTitle ? setTitle(titleRef.current.value) : null;
        }
    }

    return ( 
        <div className="relative bg-indigo-500 rounded-lg w-40 h-32 border border-indigo-100 shadow-lg flex flex-col">
            <div className={`w-full border-b border-b-indigo-100 bg-indigo-400 h-6 px-2 text-white rounded-t-lg ${font}`}>
                {props.data.label}
            </div>

            <div className="absolute flex justify-center items-center gap-2 -top-12 -right-8 -rotate-6 text-stone-400/60">
                <span className="text-3xl rotate-[25deg]">⤹</span> <span>Change Me!</span>
            </div>

            <form onSubmit={e => changeTitle(e)} className="w-full h-full flex flex-col justify-between gap-2 p-2">
                <input className="rounded-lg bg-indigo-800 px-2 py-1 flex items-center shadow-md" ref={titleRef} type="text" />
                <input className="cursor-pointer px-2 bg-indigo-700 hover:bg-indigo-800 py-1 rounded-lg transition-colors" type="submit" value="Change" />
            </form>

            <Handle
                position={props.data.type === "output" ? Position.Right : Position.Left}
                type={props.data.type === "output" ? "source" : "target"}
                className="!bg-indigo-200"
            />
        </div>
    );
}
 
export default TitleNode;

