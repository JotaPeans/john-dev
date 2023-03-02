import React from "react";

interface IPopup {
    title?: string,
    source?: string,
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}

const ProjectPopup = ({title, source, setShow}: IPopup) => {
    return (
        <>
            <div className="fixed w-full h-full bg-black/80 z-40"></div>

            <div className="fixed w-screen h-screen flex justify-center items-center z-50">
                <div className="flex justify-center items-center p-10 z-50">
                    <div className="relative border border-stone-600 rounded-xl overflow-hidden z-50">

                        <div className="w-auto h-8 p-2 flex gap-2 items-center z-50 bg-stone-800">

                            <div onClick={e => setShow(false)} className="h-4 w-4 rounded-full bg-red-500 hover:bg-red-600 transition-all cursor-pointer z-50"></div>
                            <div className="h-4 w-4 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-all z-50"></div>
                            <div className="h-4 w-4 rounded-full bg-green-500 hover:bg-green-600 transition-all z-50"></div>

                            <div className="absolute w-full h-full flex items-center justify-center text-slate-100">
                                <a target="_blank" href="https://www.lavateriapay.com.br">{title}</a>      
                            </div>
                        </div>

                        <video loop width="" autoPlay src={source}></video>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default ProjectPopup;