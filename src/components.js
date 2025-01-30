import { runWithActions } from "@ligature/ligature"
import { createComponentActions, showEditor } from '@ligature/ligature-components'

let initalScript = 
`{ Doodle subconcept-of Dog, 
  GreatPyrenees subconcept-of Dog, 
  Dog subconcept-of Animal, 
  Munchkin subconcept-of Cat,
  Cat subconcept-of Animal, }
*animal-info merge

{ megan : Doodle,
  anna : GreatPyrenees,
  clarice : Munchkin }
*pets merge

*pets *animal-info infer 
{ ?name : Dog } filter 
display-table
`

let editor = showEditor(document.querySelector("#editor"), initalScript)

let actions = createComponentActions(document.querySelector("#results"))

document.querySelector("#runButton")?.addEventListener("click", () => {
    document.querySelector("#results").innerHTML = ""

    runWithActions(actions, editor.state.doc.toString())
})
