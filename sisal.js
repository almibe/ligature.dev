import { run } from "@ligature/ligature";
import { Liquid } from "liquidjs"

const templateStr = `
  <ligature-display>{{script}}</ligature-display>
  `
const engine = new Liquid();
const template = engine.parse(templateStr)

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
              if (displayType != undefined) {
                  return engine.render(template, {script: inputContent})
              } else {
                  throw "Invalid display metadata provided, only text, graph, or table display supported currently."
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
