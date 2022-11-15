import { useEffect, useState } from "react"
import styled from "styled-components"
import MOCK_DATA from "../../public/MOCK_DATA.json"

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

export default function PartsTable({allParts}) {
  
  const handleEdit = (partId) => {
    console.log(`editing ${partId}`)
    console.log(allParts)
  }
  const handleDelete =(partId) => {
    console.log(`deleting ${partId}`)
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
        {allParts.map((part) => { //{_id: '63582217cccf26fe80ad166e', partName: 'test part', tricanNum: '123321', isTest: true, __v: 0}
          return (
            <tr key={part._id}>
              <td>{part.partName}</td>
              <td>{part.tricanNum}</td>
              <td>{part.vendorNum}</td>
              <td>[][]</td>
              <td className="test">{part.isTest && 'YES'}</td>
              <td className="button"><button onClick={() => handleEdit(part._id)}>Edit</button><button onClick={() => handleDelete(part._id)}>Delete</button></td>
            </tr>
          )
        })}
      </tbody>
    </Table>
    </>
  )
}