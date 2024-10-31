import '@ligature/ligature-components/src/display/display'
import { showGraph } from '@ligature/ligature-components/src/graph/graph'
import { showNotebook } from '@ligature/ligature-components/src/notebook/notebook'
import { showTable } from '@ligature/ligature-components/src/table/table'

const tables = document.querySelectorAll(".ligature-display-table")
tables.forEach(v => {
    const data = JSON.parse(document.querySelector("#data-" + v.id.slice(6)).textContent) 
    showTable(document.querySelector("#" + v.id), data)
})
const graphs = document.querySelectorAll(".ligature-display-graph")
graphs.forEach(v => {
    const data = JSON.parse(document.querySelector("#data-" + v.id.slice(6)).textContent) 
    showGraph(document.querySelector("#" + v.id), data)
})
const notebooks = document.querySelectorAll(".ligature-display-notebook")
notebooks.forEach(v => {
    const data = JSON.parse(document.querySelector("#data-" + v.id.slice(9)).textContent) 
    showNotebook(document.querySelector("#" + v.id), data)
})
