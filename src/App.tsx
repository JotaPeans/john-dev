import React, { useState, useCallback, useContext, useEffect } from "react";
import NodesContext from './assets/contexts/NodesContext';

//icons
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTypescript } from "react-icons/si";
import { GrStripe } from "react-icons/gr";
import { IoArrowUndo } from "react-icons/io5";

//images / videos
import flip1 from "./assets/images/flip-1.png";
import flip2 from "./assets/images/flip-2.png";
import asaas from "./assets/images/asaas.png";
import preview1 from "./assets/images/preview-1.png";
import preview1Video from "./assets/videos/lavateriaPay-preview.mp4";

//Nodes
import TitleNode from "./assets/Components/nodes/TitleNode";
import BackgroundNode from "./assets/Components/nodes/BackgroundNode";
import FontNode from "./assets/Components/nodes/FontNode";
import ScreenNode from "./assets/Components/nodes/ScreenNode";

//components
import ParticleCanvas from "./assets/Components/ParticleCanvas";
import WriteOnScreen from "./assets/Components/WriteOnScreen";
import Card from "./assets/Components/Card";
import { Tooltip } from "@nextui-org/react";
import ProjectPopup from "./assets/Components/ProjectPopup";
import { INITIAL_NODES_FULLSCREEN, INITIAL_NODES_MOBILE } from "./assets/Reactflow/InitialNodes";
import INITIAL_EDGES from "./assets/Reactflow/InitialEgdes"

//libs
import ReactCardFlip from "react-card-flip";
import ReactFlow, { Background, applyNodeChanges, applyEdgeChanges, addEdge, useEdgesState, ConnectionMode, useNodesState, Node, Edge, Connection} from "reactflow";
import "reactflow/dist/style.css";

const NODE_TYPES = {
    titleNode: TitleNode,
    backgroundNode: BackgroundNode,
    fontNode: FontNode,
    screenNode: ScreenNode
}

interface IProjectPopupData {
    title: string,
    source: string
}

const App = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [showProject, setShowProject] = useState(false);
    const [projectPopupData, setProjectPopupData] = useState<IProjectPopupData>();

    const [title, setTitle] = useState("Pedro.dev()");
    const [backgroundColor, setBackgroundColor] = useState<string>("#0f172a");
    const [font, setFont] = useState<string>("font-normal");

    const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>(INITIAL_EDGES);
    const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>(window.screen.width < 1500 ?  INITIAL_NODES_MOBILE : INITIAL_NODES_FULLSCREEN);
    
    const onConnect = useCallback((connection: Connection) => setEdges(eds => addEdge(connection, eds)), []);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    function handleClickProject(title: string, source: string) {
        let data = {
            title: title,
            source: source
        };

        setProjectPopupData(data);
        setShowProject(!showProject);
    }

    useEffect(() => {
        setFont("font-consolas");
        setFont("font-cursive");
        setFont("font-bahnschrift");
        setFont("font-inkFree");
        setFont("font-symbol");
        setFont("font-normal");
    }, []);

    return (
        <NodesContext.Provider value={{ backgroundColor, setBackgroundColor, title, setTitle, font, setFont }}>
            <div className="w-full h-full text-white">

                <ParticleCanvas/>

                { showProject ? <ProjectPopup setShow={setShowProject} title={projectPopupData?.title} source={projectPopupData?.source}/> : null}

                <div className="relative w-full h-full z-10 flex flex-col items-center gap-5 sm:gap-10 backdrop-blur-[2px] py-5 sm:py-10">

                    <div className="text-4xl xl:text-8xl text-slate-200 font-mono z-20">
                        <WriteOnScreen textToWrite={title} change={title}/>
                    </div>

                    <div className="w-full flex flex-col-reverse sm:flex-row justify-center px-5 pb-10 gap-2">
                        
                        <div className="flex flex-col gap-2 w-full">
                            <h2 className=" text-slate-100 font-mono font-medium text-3xl flex justify-center sm:block z-20">
                                <WriteOnScreen timeMs={50} cursor={false} hover={false} textToWrite={"Projetos"}/>
                            </h2>
                            
                            <div className="relative flex flex-wrap gap-4 justify-center sm:justify-start z-20">
                                <Card onClick={e => handleClickProject("Lavateria Pay", preview1Video)} text={"Lavateria Pay"} image={preview1}>
                                    <Tooltip content="React.js">
                                        <FaReact className="text-cyan-400 text-2xl"/>
                                    </Tooltip>

                                    <Tooltip content="Typescript">
                                        <div className="relative flex justify-center items-center">
                                            <span className="w-6 h-4 absolute bottom-0 right-0 bg-white rounded-lg"></span>
                                            <SiTypescript className="text-blue-700 text-2xl rounded-sm relative"/>
                                        </div>
                                    </Tooltip>

                                    <Tooltip content="node.js">
                                        <FaNodeJs className="text-green-500 text-2xl"/>
                                    </Tooltip>

                                    <Tooltip content="mongoDB">
                                        <SiMongodb className="text-green-600 text-2xl"/>
                                    </Tooltip>

                                    <Tooltip content="Stripe">
                                        <a target="_blank" href="https://stripe.com/br" className="relative flex justify-center items-center">
                                            <span className="w-4 h-4 absolute bg-white"></span>
                                            <GrStripe className="text-indigo-500 text-2xl rounded-lg relative"/>
                                        </a>
                                    </Tooltip>

                                    <Tooltip content="Asaas">
                                        <a target="_blank" href="https://www.asaas.com/" className=" w-[25.5px] h-[25.5px] rounded-lg overflow-clip">
                                            <img src={asaas} alt="" className="h-full" />
                                        </a>
                                    </Tooltip>
                                </Card>
                            </div>
                        </div>

                        <div className="w-full h-[400px] z-0 p-2 sm:hidden">
                            <ReactFlow
                                nodes={nodes}
                                onNodesChange={onNodesChange}
                                edges={edges}
                                onEdgesChange={onEdgesChange}
                                onConnect={onConnect}
                                nodeTypes={NODE_TYPES}
                                fitView
                                attributionPosition="bottom-right"
                            >
                                
                            </ReactFlow>
                        </div>

                        <div className="w-full lg:w-1/2 flex flex-col justify-start items-center gap-4 z-20">
                            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                                <div onClick={handleFlip} className="text-white flex gap-4 h-40 rounded-2xl overflow-hidden shadow-xl cursor-pointer z-10 min-h-[160px] min-w-[160px]">
                                    <img className="h-full" src={flip1} alt="" />
                                </div>

                                <div onClick={handleFlip} className="text-white flex gap-4 h-40 rounded-2xl overflow-hidden shadow-xl cursor-pointer z-10">
                                    <img className="h-full" src={flip2} alt="" />
                                </div>
                            </ReactCardFlip>
                            
                            <p className={`text-justify ${font}`}>
                                Olá, meu nome é João Pedro e eu sou um desenvolvedor de software apaixonado por resolver problemas com tecnologia. Desde que descobri a programação, há 2 anos, tenho me dedicado a aprender e aprimorar minhas habilidades em diferentes linguagens e tecnologias.
                            </p>
                            <p className={`text-justify ${font}`}>
                                Minha experiência profissional inclui trabalhos em projetos de desenvolvimento web e, atualmente, estou estudando mobile, usando ferramentas como React.js, node.js, python, fastAPI, mongoDB e firebase. Eu também tenho conhecimento em metodologias ágeis e práticas de desenvolvimento, o que me permite trabalhar em equipe de forma eficaz e eficiente.
                            </p>
                            <p className={`text-justify ${font}`}>
                                Além disso, adoro aprender coisas novas e experimentar tecnologias emergentes. Sempre estou buscando expandir meu conhecimento e aplicá-lo em meus projetos. Quando não estou programando, gosto de participar de eventos e comunidades de programadores para estar sempre atualizado sobre as novidades da área.
                            </p>
                        </div>

                        <div className="hidden 2xl:block w-full z-0">
                            
                        </div>

                        <div className="hidden 2xl:block w-full h-full absolute top-0 left-0 p-2 z-10">
                            <ReactFlow
                                nodes={nodes}
                                onNodesChange={onNodesChange}
                                edges={edges}
                                onEdgesChange={onEdgesChange}
                                onConnect={onConnect}
                                nodeTypes={NODE_TYPES}
                                attributionPosition="bottom-right"
                                zoomOnScroll={false}
                                zoomOnDoubleClick={false}
                            >
                                <Background/>
                            </ReactFlow>
                        </div>
                    </div>

                </div>
            </div>
        </NodesContext.Provider>
    )
}

export default App;