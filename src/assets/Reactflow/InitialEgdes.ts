import { Edge } from "reactflow";

const INITIAL_EDGES: Edge[] = [
    {
        id: 'e1-2',
        source: '1',
        target: '4',
        animated: true
    },
    {
        id: 'e3-4',
        source: '2',
        target: '4',
        animated: true
    },
    {
        id: 'e2-5',
        source: '3',
        target: '4',
        animated: true
    },
]

export default INITIAL_EDGES;