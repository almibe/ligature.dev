import { run } from "@ligature/ligature"
import { showText } from "@ligature/ligature-components/src/text/text"
import { showGraph } from "@ligature/ligature-components/src/graph/graph"
import { showTable } from "@ligature/ligature-components/src/table/table"

const entries = run(`(id { Cat is-a Mammal, Cat has Fur,})`)

showText("#text", entries)
showTable("#table", entries)
showGraph("#graph", entries)
