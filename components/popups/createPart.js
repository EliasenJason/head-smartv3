import { useEffect, useState } from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
  width: 50%;
  height: 50%;
  background: white;
  button {
    display: block;
    margin: 0 auto;
  }
`

const StyledBackgroundBlur = styled.div`
  backdrop-filter: blur(3px);
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function CreatePart() {
  const [isLoading, setIsLoading] = useState(false)
  const [newPart, setNewPart] = useState({})

  const handleChange = (event) => {
    let value
    if (event.target.type === "checkbox") {
      value = event.target.checked
    } else {
      value = event.target.value
    }
    const fieldName = event.target.name
    setNewPart(oldPart => ({
      ...oldPart,
      [fieldName]: value,
    }))
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
    console.log('submitting')
    console.log(newPart)
  }

  useEffect(()=> console.log(newPart),[newPart])

  return (
    <StyledBackgroundBlur>
      <StyledContainer>
        <form method="post" onSubmit={handleOnSubmit}>
              <label htmlFor="partName">Name</label>
              <input id="partName" name="partName" type="text" required onChange={handleChange}/><br/>
              <label htmlFor="tricanNum">Trican Part#</label>
              <input id="tricanNum" name="tricanNum" type="text" required onChange={handleChange}/><br/>
              <label htmlFor="vendorNum">vendor Part#</label>
              <input id="vendorNum" name="vendorNum" type="text" onChange={handleChange}/><br/>
              <label htmlFor="isTest">Test Part</label>
              <input id="isTest" name="isTest" type="checkbox" value={true} onChange={handleChange}/>
              {isLoading ? <p>Sending Data</p> : <button type="submit">Create Part</button>}
          </form>
      </StyledContainer>
    </StyledBackgroundBlur>
  )
}