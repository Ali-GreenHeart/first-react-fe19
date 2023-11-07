import axios from "axios";
import React, { useEffect } from "react";
import { connect } from 'react-redux'
const url = 'https://dummyjson.com/products'

const Products = ({ contacts, dispatch }) => {

    useEffect(() => {
        axios.get(url).then(({ data }) => {
            dispatch({ type: 'get_contacts', payload: data })
        })
    }, [])

    return (
        <>
            <button onClick={() => dispatch({ type: 'add_contact' })}>add new contact</button>
            {
                contacts.map((c) => {
                    return (
                        <React.Fragment key={c.id}>
                            <img src={c.photo} alt="" />
                            <h1>{c.name}</h1>
                        </React.Fragment>
                    )
                })
            }
        </>
    )
}

const mapStoreToProps = (s) => s;
export default connect(mapStoreToProps)(Products)
