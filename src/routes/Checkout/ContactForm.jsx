import React from "react"
import styles from "./Checkout.module.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addDoc, getFirestore, collection } from "firebase/firestore";

const ContactForm = () =>{

    const [id, setId] = useState();
    const navigate = useNavigate();
    const navigateToFinish = () => {
        navigate('/finish');
    };


    const [form, setForm] = useState({
        name:'',
        email:'',
        phone:'',
        message:'',
    })

    const submitHandler = (ev) => {

        ev.preventDefault();
        const db = getFirestore()
        const formsCollection = collection(db, "forms");

        addDoc(formsCollection, form).then((snapshot) => {
            setForm({
                name:'',
                email:'',
                phone:'',
                message:'',
            });
            setId(snapshot.id);
          });
    }

    const changeHandler = (ev) => {
        const {value, name} = ev.target;
        setForm({...form, [name]: value});
    }

    return(

        <div>

        <h2 className={styles.title2}>Informacion personal</h2>


            <form onSubmit={submitHandler} className={styles.form}>
                <div>
                    <label htmlFor="name" className={styles.inputs}>Nombre</label>
                    <input name="name" id="name" value={form.name} onChange={changeHandler}></input>
                </div>
                <div>
                    <label htmlFor="email" className={styles.inputs}>Mail</label>
                    <input name="email" id="email" value={form.email} onChange={changeHandler}></input>
                </div>
                <div>
                    <label htmlFor="phone" className={styles.inputs}>Telefono</label>
                    <input name="phone" id="phone" value={form.phone} onChange={changeHandler}></input>
                </div>
                <div>
                    <label htmlFor="message" className={styles.inputs}>Mensaje</label>
                    <textarea name="message" id="message" value={form.message} onChange={changeHandler}></textarea>
                </div>    
                <div>
                <button type="button" className={styles.bttn} onClick={submitHandler}>Enviar</button>
                </div>    
                <div>
                <button type="button" className={styles.bttn} onClick={navigateToFinish}>Retornar a Home</button>
                </div>              
            </form>
        </div>
    )
}

export default ContactForm