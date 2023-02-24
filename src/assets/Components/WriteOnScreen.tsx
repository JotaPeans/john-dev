import React, { useEffect, useState, useContext } from "react";
import NodesContext from "../contexts/NodesContext";
import "../css/bounce.css";

interface IWriteScreen {
    textToWrite: string,
    change?: string,
    timeMs?: number,
    cursor?: boolean,
    hover?: boolean
}

const WriteOnScreen = ({textToWrite, change, timeMs = 150, cursor = true, hover = true}: IWriteScreen) => {
    const [text, setText] = useState("");
    const { font } = useContext(NodesContext);

    const write = (arg: string, i = 0) => {
        if (i < arg.length) {
            setText(arg.slice(0, i + 1));
            setTimeout(() => write(arg, i + 1), timeMs);
        }
    }

    useEffect(() => {
        setTimeout(() => write(textToWrite));
    }, [change]);

    return (
        <div className="flex gap-4 items-center">
            {/* <span>>></span>  */}
            <div className="flex">
                {[...text].map((item, index) => {
                    return (
                        <span className={`${hover ? "hover:-translate-y-2 hover:text-slate-700" : null} ${item === " " ? "w-12" : null} ${font} transition-all cursor-default`} key={index}>{item}</span>
                    )
                })}
            </div>
            {cursor ? <div className="h-14 w-7 xl:h-28 xl:w-14 bg-slate-100 bounce"></div> : null}
        </div>
    )
}

export default WriteOnScreen;