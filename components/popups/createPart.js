import { useEffect, useState } from "react"
import styled from "styled-components"

const StyledBackgroundBlur = styled.div`
  backdrop-filter: blur(3px);
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledCloseButton = styled.button`
  position: absolute;
  width: 35px;
  height: 35px;
  text-align: center;
  right: 0;
  top: 0;
  border-radius: 100%;
  border: solid white 3px;
  background-color: #80aaed;
  font-size: 1.2em;
`
const StyledSubmitButton = styled.button`
  
`
const StyledContainer = styled.div`
  width: 50%;
  height: 50%;
  background: white;
  border: solid black 2px;
  position: relative;
  h3 {
    text-align: center;
    padding-top: 15px;
    padding-bottom: 15px;
    color: #fff;
    background-color: #80aaed;
  }
  form {
    display: flex;
    flex-direction: column;
    padding: .5em;
  }
  input {
    width: 75%;
    border: solid black 1px;
  }
`



export default function CreatePart({closeWindow, setAllParts}) {
  const [isLoading, setIsLoading] = useState(false)
  const [newPart, setNewPart] = useState(
    {
      partName: null,
      tricanNum: null,
      vendorNum: null,
      isTest: false
    }
    )
  

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

  const handleOnSubmit = async (event) => {
    event.preventDefault();
        setIsLoading(true)
        const res = await fetch('/api/mongodb/createPart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPart)
        })
        const data = await res.json()
        setAllParts((oldParts) => {
          return [...oldParts, newPart]
        })
        console.log('this has been added to the parts database')
        console.log(data)
        setIsLoading(false)
        closeWindow()
  }

  useEffect(()=> console.log(newPart),[newPart])

  return (
    <StyledBackgroundBlur>
      <StyledContainer>
      <StyledCloseButton href="#" onClick={() => closeWindow()}>&#10006;</StyledCloseButton>
      <h3>Create New Part</h3>
        <form method="post" onSubmit={handleOnSubmit}>
              <label htmlFor="partName">Name</label>
              <input id="partName" name="partName" type="text" required onChange={handleChange}/>
              <label htmlFor="tricanNum">Trican Part#</label>
              <input id="tricanNum" name="tricanNum" type="text" required onChange={handleChange}/>
              <label htmlFor="vendorNum">vendor Part#</label>
              <input id="vendorNum" name="vendorNum" type="text" onChange={handleChange}/>
              <label htmlFor="isTest">Test Part
              <input id="isTest" name="isTest" type="checkbox" value={true} onChange={handleChange}/>
              </label>
              {isLoading ? <p>Sending Data</p> : <StyledSubmitButton type="submit">Create Part</StyledSubmitButton>}
          </form>
      </StyledContainer>
    </StyledBackgroundBlur>
  )
}