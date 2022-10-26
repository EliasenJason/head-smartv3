import { useState } from "react"
import styled from "styled-components"
import PartsTable from "../components/partsTable/partsTable"
import CreatePart from "../components/popups/createPart"


export default function Parts() {
  const [showCreatepart, setShowCreatePart] = useState(false)

  const closeCreatepart = () => {
    setShowCreatePart(false)
  }
  
  return (
    <>
      {showCreatepart ? null : <button onClick={() => setShowCreatePart(true)}>Create new part</button>}
      {showCreatepart ? <CreatePart closeWindow={setShowCreatePart} /> : null}
      <PartsTable></PartsTable>
    </>
  )
}