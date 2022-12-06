import { useEffect, useState } from "react"
import styled from "styled-components"

//will need to use initial props and load from mongodb data to map thru

const Table = styled.table`
width: 100%;
outline: 2px solid white;
outline-offset: -2px;
padding: 2em;
  th {
    background: lightgrey;
    outline: 1px solid black;
  }
  td {
    text-align: center;
    outline: 1px solid black;
  }
  .test {
    width: 3%;
  }
  .button {
    width: 5%;
    padding: 0;
    margin: 0;
  }
  button {
    width: 100%;
    height: 100%;
    margin: 0;
  }
`

export default function PartsTable({allParts, setAllParts}) {
  
  const handleEdit = (partId) => {
    console.log(`editing ${partId}`)
    console.log(allParts)
  }

  const handleDelete = async (part) => {
    console.log(part)
    //set loading true
      try {
        const res = await fetch('/api/mongodb/deletePart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(part)
        })
        const data = await res.json()
        console.log(`deleting ${part.partName} from database`)
        console.log(data)
        if (data.mongoRes._id) {
          setAllParts((oldParts) => {
            return oldParts.filter((part) => part._id !== data.mongoRes._id)
          })
        }
        console.log(data.mongoRes._id)
      } catch(error) {
        console.log(error)
      } finally {
        //set loading false
      }
  }
  
  return (
    <>
    <Table>
      <thead>
        <tr>
          <th>NAME</th>
          <th>TRICAN #</th>
          <th>VENDOR #</th>
          <th>PICTURES</th>
          <th>TEST?</th>
        </tr>
      </thead>
      <tbody>
        {allParts.map((part) => {
          return (
            <tr key={part._id}>
              <td>{part.partName}</td>
              <td>{part.tricanNum}</td>
              <td>{part.vendorNum}</td>
              <td>[][]</td>
              <td className="test">{part.isTest && 'YES'}</td>
              <td className="button"><button onClick={() => handleEdit(part._id)}>Edit</button><button onClick={() => handleDelete(part)}>Delete</button></td>
            </tr>
          )
        })}
      </tbody>
    </Table>
    </>
  )
}