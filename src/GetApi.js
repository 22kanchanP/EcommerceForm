import { useEffect, useState } from "react"

function GetApi()
{
    const [apidata, setapidata] = useState([])

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/categories").then((result) => {
            result.json().then((data) => {
                setapidata(data)

            })
        })
    },)


    return(
       
        <div>
    <Table striped bordered hover variant="dark">
      <tbody>
      <tr>
      <td>id</td>
      <td>title</td>
      <td>price</td>
      <td>description</td>
      <td>category</td>
      <td>image</td>
      </tr>
       {
        apidata.map((item)=>
        <tr>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.price*80}</td>
        <td>{item.description}</td>
        <td>{item.category}</td>
        <td><img src={item.image} width="100px" height="100px"></img></td>
        </tr>
        )
       }
      </tbody>
      </Table>
    </div>
    )
}
export default GetApi