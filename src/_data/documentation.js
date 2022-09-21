const axios = require('axios')

module.exports = async () => {
  const ligature = {
    title: "Ligature",
    description: "Basic Data Model",
    content: (await axios.get("https://raw.githubusercontent.com/almibe/ligature-documentation/main/ligature.md")).data
  }
  const lig = { 
    title: "Lig",
    description: "Simple Serialization Format for Ligature",
    content: (await axios.get("https://raw.githubusercontent.com/almibe/ligature-documentation/main/lig.md")).data
  }
  const dlig = { 
    title: "DLig",
    description: "User Input Format for Ligature",
    content: (await axios.get("https://raw.githubusercontent.com/almibe/ligature-documentation/main/dlig.md")).data
  }
  return [ligature, lig, dlig]
}
