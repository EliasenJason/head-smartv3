import { useEffect, useState } from "react"
import styled from "styled-components"
import MOCK_DATA from "../../public/MOCK_DATA.json"

//will need to use initial props and load from mongodb data to map thru

const Table = styled.table`
width: 100%;
padding: 2em;
  th {
    background: lightgrey;
  }
  td {
    width: 12.5%;
    text-align: center;
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
          <th>ID</th>
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
              <td>{part._id}</td>
              <td>{part.partName}</td>
              <td>{part.tricanNum}</td>
              <td>{part.vendorNum}</td>
              <td>[][]</td>
              <td>{part.isTest && 'YES'}</td>
              <td><button onClick={() => handleEdit(part.id)}>Edit</button></td>
              <td><button onClick={() => handleDelete(part.id)}>Delete</button></td>
            </tr>
          )
        })}
      </tbody>
    </Table>
    </>
  )
}