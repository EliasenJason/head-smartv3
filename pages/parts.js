import { useState, useEffect } from "react"
import styled from "styled-components"
import PartsTable from "../components/partsTable/partsTable"
import CreatePart from "../components/popups/createPart"


export default function Parts() {
  const [showCreatepart, setShowCreatePart] = useState(false)
  const [allParts, setAllParts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/mongodb/getParts')
        const data = await res.json()
        console.log('successfully fetched parts from database')
        setAllParts(data.mongoRes)
      } catch(error) {
        console.log('unable to fetch parts from database')
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    })()
  },[])

  useEffect(() => {
    console.log('allParts array in state has been updated or loaded:')
    console.log(allParts)
  },[allParts])
  
  return (
    <>
      {showCreatepart ? null : <button onClick={() => setShowCreatePart(true)}>Create new part</button>}
      {showCreatepart ? <CreatePart closeWindow={setShowCreatePart} setAllParts={setAllParts} /> : null}
      {isLoading}
      <PartsTable allParts={allParts} setAllParts={setAllParts}></PartsTable>
    </>
  )
}