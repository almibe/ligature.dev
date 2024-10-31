import { run } from "@ligature/ligature";
import { Liquid } from "liquidjs"

export function printNetwork(result) {
  let res = "{\n"
  for (let entry of result) {
      if (entry.type == "extension") {
          res += "  " + entry.element.symbol + " : " + entry.concept.symbol + ",\n"
      } else if (entry.type == "nonextension") {
          res += "  " + entry.element.symbol + " :¬ " + entry.element.symbol + ",\n"
      } else {
          res += "  " + entry.first.symbol + " " + entry.role.symbol + " " + entry.second.symbol + ",\n"
      }
  }
  return res + "}"
}

function randId() {
  return Math.random().toString(36).replace(/[^a-z]+/g, '');
}

const engine = new Liquid();
const textTemplate = engine.parse(`
  <pre><code>{{output}}</code></pre>
`)
const tableTemplate = engine.parse(`
  <div id="table-{{id}}" class="ligature-display-table"></div>
  <script id="data-{{id}}" type="application/json">{{data}}</script>
`)
const graphTemplate = engine.parse(`
  <div id="graph-{{id}}" class="ligature-display-graph"></div>
  <script id="data-{{id}}" type="application/json">{{data}}</script>
`)
const notebookTemplate = engine.parse(`
  <div id="notebook-{{id}}" class="ligature-display-notebook"></div>
  <script id="data-{{id}}" type="application/json">{{data}}</script>  
`)

export default function sisalPlugin(eleventyConfig, pluginOptions) {
  eleventyConfig.addTemplateFormats("wander")
  eleventyConfig.addExtension("wander", {
    compile: async (inputContent) => {
      return async () => {
        const scriptResult = run(inputContent)
        if (scriptResult["meta"] != undefined && scriptResult["result"] != undefined) {
          const meta = scriptResult["meta"]
          const res = meta.filter((entry) => 
              entry.type == "role" && 
              entry.first.symbol == "display" && 
              entry.role.symbol == "=")
          if (res.length == 1) {
              const displayType = (res[0]).second.symbol
              if (displayType == "text") {
                  return engine.render(textTemplate, {output: printNetwork(scriptResult["result"])})
              } else if (displayType == "table") {
                  return engine.render(tableTemplate, { id: randId(), data: JSON.stringify(scriptResult["result"]) })
              } else if (displayType == "graph") {
                  return engine.render(graphTemplate, { id: randId(), data: JSON.stringify(scriptResult["result"]) })
              } else if (displayType == "notebook") {
                  return engine.render(notebookTemplate, { id: randId(), data: JSON.stringify(scriptResult["result"]) } )
              } else {
                  throw "Invalid display metadata provided, only text, graph, table, or notebook display supported currently."
              }
          } else {
              throw "Invalid display metadata provided."
          }
        } else {
            throw "No display metadata provided."
        }
      };
    },
  });
}

// import { Entry, Role, run } from "@ligature/ligature";
// import { toGraph } from "@ligature/ligature"
// import Graph from "graphology";
// import markdownit from 'markdown-it'
// const md = markdownit()

// function getType(graph, node) {
//     let res = null
//     graph.edges(node).forEach(edge => {
//         const target = graph.target(edge)
//         const attrs = graph.getEdgeAttributes(edge)
//         if (attrs.type == "extension" && target == "MarkdownCell") {
//             res = "MarkdownCell"
//         }
//         if (attrs.type == "extension" && target == "WanderCell") {
//             res = "WanderCell"
//         }
//     })
//     return res
// }

// function getSource(graph, node) {
//     let source = null
//     graph.edges(node).forEach(edge => {
//         const attrs = graph.getEdgeAttributes(edge)
//         if (attrs.type == "role" && attrs.roleName == "source") {
//             source = graph.target(edge)
//         }
//     })
//     return source
// }

// function getNext(graph, node) {
//     let next = null
//     graph.edges(node).forEach(edge => {
//         const attrs = graph.getEdgeAttributes(edge)
//         const source = graph.source(edge)
//         if (source == node && attrs.type == "role" && attrs.roleName == "next") {
//             next = graph.target(edge)
//         }
//     })
//     return next
// }

// export function showNotebook(el, network) {
//     if (el == null) {
//         throw "Illegal arg to showNotebook"
//     }
//     const graph = toGraph(network)
//     let start = null;
//     graph.forEachEdge((edgeKey) => {
//         const source = graph.source(edgeKey)
//         const target = graph.target(edgeKey)
//         const attrs = graph.getEdgeAttributes(edgeKey)
//         if (attrs.type == "extension" && target == 'NotebookStart') {
//             start = source
//         }
//     })
//     if (start != null) {
//         let currentNode = start
//         while (currentNode != null) {
//             const type = getType(graph, currentNode)
//             if (type == "MarkdownCell") {
//                 const div = document.createElement("div")
//                 const source = getSource(graph, currentNode)
//                 div.innerHTML = md.render(source)
//                 el.appendChild(div)
//             } else if (type == "WanderCell") {
//                 const display = document.createElement("ligature-display")
//                 display.innerText = getSource(graph, currentNode)
//                 el.appendChild(display)
//             } else if (type == "NetworkCell") {
//                 throw "TODO"
//             } else {
//                 throw "TODO"
//             }
//             currentNode = getNext(graph, currentNode)
//         }
//     } else {
//         const root = document.createElement("div")
//         root.textContent = "Invalid network passed to showNotebook."
//         el.appendChild(root)
//     }
// }
