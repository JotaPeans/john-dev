import React, { useEffect, useState, useContext } from "react";
import NodesContext from "../contexts/NodesContext";

interface ICard {
    image: string,
    onClick: React.ReactEventHandler<HTMLDivElement>,
    text: string,
    children: React.ReactNode
}

const Card = ({image, onClick, text, children}: ICard) => {
    //simulating a async requisition a API or backend.
    const [wait, setWait] = useState(true);
    const { font } = useContext(NodesContext);

    useEffect(() => {
        setTimeout(() => {
            setWait(false);
        }, 700)
    }, []);

    return (
        <div onClick={onClick} className="cursor-pointer hover:scale-105 transition-transform w-72 h-auto bg-slate-800 rounded-xl border border-slate-600 p-2 flex flex-col gap-2 text-slate-100 shadow-xl">
            {wait ? <span className="w-full h-[168px] rounded-lg animate-pulse bg-slate-700"></span> : <img className="w-full rounded-lg" src={image} alt="" />}
            {wait ? <span className="w-full h-7 rounded-md animate-pulse bg-slate-700"></span> : <h2 className={`text-xl ${font === "font-normal" ? "font-normal" : font}`}>{text}</h2>}
            {wait ? (
                <div className="flex items-center gap-2">
                    {[0, 1, 2, 3, 4, 5].map((item, index) => {
                        return (
                            <span className=" w-6 h-6 rounded-md animate-pulse bg-slate-700"></span>
                        )
                    })}
                </div>
            ) : (
                <div className="flex items-center gap-2">
                    {children}
                </div>
            )}
        </div>
    );
}
 
export default Card;