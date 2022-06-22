import 'blueprint-css/dist/blueprint.css'
import { createSignal } from 'solid-js'
import { render } from 'solid-js/web'
import { LigatureInstance, LigatureDataset } from '@ligature/ligature-components'
//import LigatureDataset from '@ligature/ligature-components'
import '@shoelace-style/shoelace/dist/themes/light.css'
import '@shoelace-style/shoelace/dist/components/button/button.js'
import '@shoelace-style/shoelace/dist/components/textarea/textarea.js'
import '@shoelace-style/shoelace/dist/components/input/input.js'
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js'
import '@shoelace-style/shoelace/dist/components/badge/badge.js'
import '../css/ligature-components.css'

const [datasets, setDatasets] = createSignal(["hello", "world"])

render(() =>
  <>
    <LigatureInstance 
      datasets={datasets}
      addDataset={
        async (dataset: string) => {
          //this is some dummy validation code just for testing
          if (dataset.includes(" ")) {
            throw new Error("Invalid Dataset name.")
          } else {
            setDatasets([dataset, ...datasets()])
            return null
          }
        }
      }
      removeDataset={
        async (dataset: string) => {
          console.log("Removing:", dataset)
          setDatasets(datasets().filter(e => e != dataset))
          return null
        } 
      }
      refreshDatasets={
        async () => {
          console.log("Refreshing Datasets.")
        } 
      }
      selectDataset={
        async (dataset: string) => {
          console.log("Selected:", dataset)
        }
      }/>

      <hr></hr>

      <LigatureDataset
        datasetName='test'
        writer={
          async (input: string) => {
            console.log("Writing:", input)
            return "Writing response. Input Length = " + input.length
          }
        }
        interpreter={
          async (input: string) => {
            console.log("Running:", input)
            return "Query response. Input Length = " + input.length
          }
        }
      />
  </>,
  document.getElementById('root') as HTMLElement
)
