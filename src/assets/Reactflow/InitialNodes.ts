import { Node } from "reactflow";

const INITIAL_NODES_FULLSCREEN: Node[] = [
    {
        id: "1",
        position: { x: 1200, y: 500 },
        data: { label: "Background", type: "output" },
        type: "backgroundNode",
    },
    {
        id: "2",
        position: { x: 1230, y: 300 },
        data: { label: "Title", type: "output" },
        type: "titleNode"
    },
    {
        id: "3",
        position: { x: 1250, y: 660   },
        data: { label: "Font", type: "output" },
        type: "fontNode"
    },
    {
        id: "4",
        position: { x: 1680, y: 460   },
        data: { label: "Screen", type: "input" },
        type: "screenNode"
    },
];

const INITIAL_NODES_MOBILE: Node[] = [
    {
        id: "1",
        position: { x: 0, y: 0 },
        data: { label: "Background", type: "output" },
        type: "backgroundNode",
    },
    {
        id: "2",
        position: { x: 30, y: 170 },
        data: { label: "Title", type: "output" },
        type: "titleNode"
    },
    {
        id: "3",
        position: { x: 10, y: 340   },
        data: { label: "Font", type: "output" },
        type: "fontNode"
    },
    {
        id: "4",
        position: { x: 400, y: 150   },
        data: { label: "Screen", type: "input" },
        type: "screenNode"
    },
];

export {INITIAL_NODES_FULLSCREEN, INITIAL_NODES_MOBILE};