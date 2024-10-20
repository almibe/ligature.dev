import { run } from "@ligature/ligature"
import { showText } from "@ligature/ligature-components/src/text/text"
import { showGraph } from "@ligature/ligature-components/src/graph/graph"
import { showTable } from "@ligature/ligature-components/src/table/table"
import { showEditor } from "@ligature/ligature-components/src/editor/editor"

const initialScript = `(id {
  Cat has Fur,
  Cat : Mammal,
  Bear has Fur, 
  Bear : Mammal,
  Whale lives-in Water,
  Whale : Mammal,
  Mammal has Vertebra })`

const editor = showEditor("#editor", initialScript)

function runScript() {
    const entries = run(editor.state.doc.toString())

    showText("#text", entries)
    showTable("#table", entries)
    showGraph("#graph", entries)    
}

document.querySelector("#runButton").addEventListener("click", () => runScript())

runScript()
