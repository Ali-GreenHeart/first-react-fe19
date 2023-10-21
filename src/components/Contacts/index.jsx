import axios from "axios"
import React, { useEffect, useState } from "react"
import { Outlet, useParams } from "react-router"

const _url = 'https://651e64e844a3a8aa4768416c.mockapi.io/api/v0/contacts'

const getContacts = async (_setContacts) => {
    const { data } = await axios.get(_url)
    _setContacts(data)
}

const Contacts = ({ }) => {
    const [contacts, setContacts] = useState([])
    const [name, setName] = useState('')
    useEffect(() => {
        getContacts(setContacts)
    }, [])

    const onSubmit = (e) => {
        e.preventDefault()
        axios.post(_url, { name }).then(() => {
            setName('')
            getContacts(setContacts)
        })
    }
    const onEdit = (id) => {
        let newName = prompt('enter new name')
        axios.put(`${_url}/${id}`, { name: newName }).then(() => {
            getContacts(setContacts)
        })
    }
    const onDelete = (id) => {
        axios.delete(`${_url}/${id}`).then(() => {
            getContacts(setContacts)
        })
    }

    return (
        <>
            <Outlet />
            <form onSubmit={onSubmit}>
                <input type="text" value={name} onChange={setName} />
                <button>add contact</button>
            </form>
            {
                contacts.map(({ id, name }) => {
                    return <React.Fragment key={id}>
                        <p>{name}</p>
                        <hr />
                        <div>
                            <button onClick={() => onEdit(id)}>🖋</button>
                            <button onClick={() => onDelete(id)}>❌</button>
                        </div>
                    </React.Fragment>
                })
            }
        </>
    )
}


export function SingleContact() {
    const { id } = useParams()
    return (
        <div>
            <h1>Contact with id {id}</h1>
        </div >
    )
}


export default Contacts
