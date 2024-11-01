import { run } from "@ligature/ligature";
import { toGraph } from "@ligature/ligature"
import Graph from "graphology";
import markdownit from 'markdown-it'
import { Liquid } from "liquidjs"

const md = markdownit()

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
                  //console.log(processNotebook(scriptResult["result"]))
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


function getType(graph, node) {
    let res = null
    graph.edges(node).forEach(edge => {
        const target = graph.target(edge)
        const attrs = graph.getEdgeAttributes(edge)
        if (attrs.type == "extension" && target == "MarkdownCell") {
            res = "MarkdownCell"
        }
        if (attrs.type == "extension" && target == "WanderCell") {
            res = "WanderCell"
        }
    })
    return res
}

function getSource(graph, node) {
    let source = null
    graph.edges(node).forEach(edge => {
        const attrs = graph.getEdgeAttributes(edge)
        if (attrs.type == "role" && attrs.roleName == "source") {
            source = graph.target(edge)
        }
    })
    return source
}

function getNext(graph, node) {
    let next = null
    graph.edges(node).forEach(edge => {
        const attrs = graph.getEdgeAttributes(edge)
        const source = graph.source(edge)
        if (source == node && attrs.type == "role" && attrs.roleName == "next") {
            next = graph.target(edge)
        }
    })
    return next
}

/**
 * Takes a network and returns a data structure that is easier to process.
 * 
 * [
 *   {
 *     name: string,
 *     type: "MarkdownCell" | "WanderCell" | "NetworkCell"
 *     source: any
 *     display: string
 *   }
 * ]
 */
export function processNotebook(network) {
    const graph = toGraph(network)
    let start = null;
    let results = []
    graph.forEachEdge((edgeKey) => {
        const source = graph.source(edgeKey)
        const target = graph.target(edgeKey)
        const attrs = graph.getEdgeAttributes(edgeKey)
        if (attrs.type == "extension" && target == 'NotebookStart') {
            start = source
        }
    })
    if (start != null) {
        let currentNode = start
        while (currentNode != null) {
            const type = getType(graph, currentNode)
            if (type == "MarkdownCell") {
              const source = getSource(graph, currentNode)
              results.push({ name: "cell0", type: type, source: md.render(source) })
            } else if (type == "WanderCell") {
//                throw "TODO"
            } else if (type == "NetworkCell") {
//                throw "TODO"
            } else {
//                throw "TODO"
            }
            currentNode = getNext(graph, currentNode)
        }
        return results;
    } else {
        return [ { name: "cell0", type: "MarkdownCell", source: "*Invalid network passed to showNotebook*" } ]
    }
}
