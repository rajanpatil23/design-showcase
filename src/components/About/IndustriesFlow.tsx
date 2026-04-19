import { useMemo } from "react";
import {
  ReactFlow,
  Background,
  Handle,
  Position,
  BaseEdge,
  type Node,
  type Edge,
  type NodeProps,
  type EdgeProps,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import {
  Code2,
  GraduationCap,
  Briefcase,
  Building2,
  Building,
  HeartPulse,
} from "lucide-react";
import connecttlyMark from "@/assets/connecttly-mark.svg";

type IndustryData = { name: string; icon: React.ReactNode; side: "left" | "right" };

const IndustryNode = ({ data }: NodeProps<Node<IndustryData>>) => {
  const isLeft = data.side === "left";
  return (
    <div className="bg-background rounded-xl border border-border/60 shadow-[0_4px_18px_hsl(var(--foreground)/0.06)] px-5 py-4 flex items-center gap-4 w-[260px]">
      {isLeft ? (
        <>
          <p className="text-sm font-heading font-semibold leading-tight flex-1">{data.name}</p>
          <div className="p-2 rounded-lg bg-ct-blue-light shrink-0">{data.icon}</div>
        </>
      ) : (
        <>
          <div className="p-2 rounded-lg bg-ct-blue-light shrink-0">{data.icon}</div>
          <p className="text-sm font-heading font-semibold leading-tight flex-1">{data.name}</p>
        </>
      )}
      <Handle
        type="source"
        position={isLeft ? Position.Right : Position.Left}
        className="!opacity-0 !pointer-events-none"
      />
    </div>
  );
};

const HubNode = () => (
  <div className="relative">
    <div className="w-24 h-24 rounded-3xl bg-primary flex items-center justify-center shadow-[0_10px_30px_-8px_hsl(var(--primary)/0.6)]">
      <img src={connecttlyMark} alt="Connecttly" className="w-10 h-auto" />
    </div>
    {/* All targets on left/right edges, vertically centered */}
    {(["left", "right"] as const).map((side) => (
      <Handle
        key={side}
        id={side}
        type="target"
        position={side === "left" ? Position.Left : Position.Right}
        className="!opacity-0 !pointer-events-none"
        style={{ top: "50%" }}
      />
    ))}
  </div>
);

/** Custom edge: horizontal from card, then smooth curve into hub side */
const HorizCurveEdge = ({ id, sourceX, sourceY, targetX, targetY, markerEnd, style }: EdgeProps) => {
  // Move horizontally from source for ~60% of horizontal distance, then curve to target
  const dx = targetX - sourceX;
  const midX = sourceX + dx * 0.55;
  // Cubic bezier: control points keep horizontal exit from source and approach target on a curve
  const c1x = sourceX + dx * 0.35;
  const c1y = sourceY;
  const c2x = midX;
  const c2y = targetY;
  const path = `M ${sourceX},${sourceY} C ${c1x},${c1y} ${c2x},${c2y} ${targetX},${targetY}`;
  return <BaseEdge id={id} path={path} markerEnd={markerEnd} style={style} />;
};

const nodeTypes = { industry: IndustryNode, hub: HubNode };
const edgeTypes = { horizCurve: HorizCurveEdge };

const leftItems: IndustryData[] = [
  { name: "SaaS & Technology", icon: <Code2 className="w-5 h-5 text-primary" />, side: "left" },
  { name: "EdTech & E-Learning", icon: <GraduationCap className="w-5 h-5 text-primary" />, side: "left" },
  { name: "Professional Services", icon: <Briefcase className="w-5 h-5 text-primary" />, side: "left" },
];
const rightItems: IndustryData[] = [
  { name: "Enterprise Automation", icon: <Building2 className="w-5 h-5 text-primary" />, side: "right" },
  { name: "Real Estate & Co-Working", icon: <Building className="w-5 h-5 text-primary" />, side: "right" },
  { name: "Healthcare & Wellness", icon: <HeartPulse className="w-5 h-5 text-primary" />, side: "right" },
];

const CARD_W = 260;
const CARD_H = 64;
const HUB_W = 96;
const HUB_H = 96;
const CANVAS_W = 980;
const CANVAS_H = 380;
const ROW_YS = [40, (CANVAS_H - CARD_H) / 2, CANVAS_H - CARD_H - 40];

const IndustriesFlow = () => {
  const { nodes, edges } = useMemo(() => {
    const ns: Node[] = [];
    const es: Edge[] = [];

    const edgeStyle = {
      stroke: "hsl(var(--primary))",
      strokeWidth: 1.5,
      strokeDasharray: "4 3",
    };

    leftItems.forEach((d, i) => {
      ns.push({
        id: `L${i}`,
        type: "industry",
        position: { x: 0, y: ROW_YS[i] },
        data: d,
        draggable: false,
        selectable: false,
      });
      es.push({
        id: `e-L${i}`,
        source: `L${i}`,
        target: "hub",
        targetHandle: "left",
        type: "horizCurve",
        animated: true,
        style: edgeStyle,
      });
    });

    rightItems.forEach((d, i) => {
      ns.push({
        id: `R${i}`,
        type: "industry",
        position: { x: CANVAS_W - CARD_W, y: ROW_YS[i] },
        data: d,
        draggable: false,
        selectable: false,
      });
      es.push({
        id: `e-R${i}`,
        source: `R${i}`,
        target: "hub",
        targetHandle: "right",
        type: "horizCurve",
        animated: true,
        style: edgeStyle,
      });
    });

    ns.push({
      id: "hub",
      type: "hub",
      position: { x: (CANVAS_W - HUB_W) / 2, y: (CANVAS_H - HUB_H) / 2 },
      data: {},
      draggable: false,
      selectable: false,
    });

    return { nodes: ns, edges: es };
  }, []);

  return (
    <div style={{ width: "100%", height: CANVAS_H }} className="[&_.react-flow__attribution]:hidden">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        fitViewOptions={{ padding: 0.05 }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        proOptions={{ hideAttribution: true }}
      >
        <Background gap={24} size={1} color="hsl(var(--border))" />
      </ReactFlow>
    </div>
  );
};

export default IndustriesFlow;
