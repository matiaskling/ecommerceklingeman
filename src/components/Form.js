import React from "react";
import {  addDoc, collection, getFirestore, Timestamp } from "firebase/firestore"
import { useCartContext } from "../Context/CartContext"
import {useState} from "react"
import { Formik } from "formik"
import '../styles/form.css'
import { Button} from "react-bootstrap"
import {Link} from "react-router-dom"

const Form = () => {
  

  const [idOrder, setIdOrder] = useState('')
  const [dataForm, setDataForm] = useState({
      name:"", email:"", phone:""
  })

  const {  cartList, totalAmount } = useCartContext()

  const handleChange = (e) => {
       
    setDataForm({
        ...dataForm,
        [e.target.name]: e.target.value
    })
}

const generateOrder = async (e) =>{
    e.preventDefault()      
    
 
    let order = {}
    order.date = Timestamp.fromDate(new Date())        

    order.buyer = dataForm
    order.total = totalAmount()

    order.items = cartList.map(cartProd => {
        const id = cartProd.id;
        const name = cartProd.name;
        const price = cartProd.price * cartProd.quantity;
        
        return {id, name, price}   
    })

  
    const db = getFirestore()
    const ordenColeccion = collection(db, 'orders')
    await addDoc(ordenColeccion, order)
    .then(resp => setIdOrder(resp.id))
    .finally(()=> {
  
        setDataForm({
            name:"", email:"", phone:""
        })
    })
};     



  return (
    <>
      <h1>Ingrese sus datos para generar la orden</h1>
     
      <Formik
        initialValues={{
          name:dataForm.name,
          email: dataForm.email
        }}

        validate={(values) => {

        let error = {};

          if(!values.name) {

            error.name = "Por favor, ingrese un nombre";

          } else if (!/^[a-zA-ZÀ-ÿ\s]{3,40}$/.test(values.name)) {

            error.name = "El nombre solo debe tener letras y espacios. "

          }

          if(!values.email) {

            error.email = "Por favor, ingrese un correo electronico";

          } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {

            error.email = ""

          }


          return error;
        }}

        onSubmit={(valores, {resetForm}) => {
          resetForm();
        }}
      >
        {({values, errors,touched, handleBlur}) => (
        <form className="formulario" onSubmit={generateOrder}>
              <div>
                  <label htmlFor="name">Nombre</label>
                  <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder="Mark" 
                      value={dataForm.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    {touched.name && errors.name && <div className="error">{errors.name}</div>}
              </div>

              <div>

                  <label htmlFor="email">Email</label>
                  <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="email@example.com"
                      value={dataForm.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                  {touched.email && errors.email && <div className="error">{errors.email}</div>}
              </div>

              <Button type="submit" onClick={generateOrder}>Generar Orden</Button> 
             
          </form>
          )}

      

      </Formik>

      {idOrder.length !== 0  ? 
         <section className="container">
          
          
          <p>Gracias por comprar. Tu orden es {idOrder}</p><Button type="submit"><Link className="ButtonBack" to="/">Volver</Link></Button>  </section> : null
          
    
}
     
       

    </>

  );
}


export default Form


