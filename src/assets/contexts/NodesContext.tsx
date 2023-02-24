import React, { createContext } from "react";

//backgroundColor, setBackgroundColor, title, setTitle, font, setFont
interface IProvider {
    backgroundColor?: string,
    setBackgroundColor?: React.Dispatch<React.SetStateAction<string>>,
    title?: string,
    setTitle?: React.Dispatch<React.SetStateAction<string>>,
    font?: string,
    setFont?: React.Dispatch<React.SetStateAction<string>>
}

const NodesContext = createContext<IProvider>({});

export default NodesContext;