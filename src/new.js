import { useState } from "react"
import Axios from "axios"


function NewDjango() {
    // const[djangoData,setDjangoData]=useState(
    //     {
    //         name:null,
    //         category:null,
    //         price:null,
    //         description:null,
    //         stars:null,
    //         id_val:null
    //     }
    // )
        
    // const getDjango = async()=>{
    //     const {data} = await Axios.get('http://127.0.0.1:8000/api/product-list')
    //     console.log("data",data);
    // }
    // const viewProductDjango = async()=>{
    //     const {data} = await Axios.get(`http://127.0.0.1:8000/api/product-detail/${djangoData.id_val}`)
    //     console.log("data id",data);
    // }
    // const updateProductDjango = async()=>{
    //     const {data} = await Axios.post(`http://127.0.0.1:8000/api/product-update/${djangoData.id_val}`,djangoData)
    //     console.log("data upd",data);
    // }

    // const sendDjango = async()=>{
    //     const {data} = await Axios.post('http://127.0.0.1:8000/api/product-create',djangoData )
    //     console.log("data-jnj",data);
    // }
    // const deleteProductDjango = async()=>{
    //     const {data} = await Axios.get(`http://127.0.0.1:8000/api/product-delete/${djangoData.id_val}`)
    //     console.log("data del",data);
    // }

    return (
        <>
            
            {/* <form> */}
                {/* <input placeholder="name" onChange={(e) => setDjangoData({ ...djangoData, name: e.target.value })}></input>
                <input placeholder="category" onChange={(e) => setDjangoData({ ...djangoData, category: e.target.value })}></input>
                <input placeholder="price" onChange={(e) => setDjangoData({ ...djangoData, price: e.target.value })} ></input>
                <input placeholder="Description" onChange={(e) => setDjangoData({ ...djangoData, description: e.target.value })} ></input>
                <input placeholder="stars" type="number" onChange={(e) => setDjangoData({ ...djangoData, stars: e.target.value })}></input>
                <button type="button" onClick={sendDjango}>create</button>
                <button type="button" onClick={getDjango}>get all</button>
                <input placeholder="id" type="number" onChange={(e) => setDjangoData({ ...djangoData, id_val: e.target.value })}></input>
                <button type="button" onClick={viewProductDjango}>detail by-id</button><br/>
                <button type="button" onClick={updateProductDjango}>update</button><br/>
                <button type="button" onClick={deleteProductDjango}>delete</button><br/> */}
                {/* <input placeholder="send" ></input>
                <button type="button" >send</button><br/> */}
            {/* </form> */}
        </>
    )
}
export default NewDjango;