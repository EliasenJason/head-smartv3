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

export default function PartsTable() {
  const handleEdit = (partId) => {
    console.log(`editing ${partId}`)
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
        {MOCK_DATA.map((part) => {
          return (
            <tr key={part.id}>
              <td>{part.id}</td>
              <td>{part.part}</td>
              <td>{part.trican_num}</td>
              <td>{part.vendor_num}</td>
              <td>[][]</td>
              <td>{part.test && 'YES'}</td>
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