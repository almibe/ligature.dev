import { initializeGraph } from "@ligature/ligature-components/src/graph/LigatureGraph.ts"

initializeGraph(document.querySelector("#demo-graph"), "{`Cat` {`has` `Fur`, `isa` `Mammal`},`Bear` {`has` `Fur`, `isa` `Mammal`},`Whale` {`lives-in` `Water`, `isa` `Mammal`},`Mammal` { `has` `Vertebra`, `isa` `Animal`},`Fish` { `lives-in` `Water`, `isa` `Animal`},}")
