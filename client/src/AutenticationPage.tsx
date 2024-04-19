import { FC, useEffect } from "react";
import { Button, Form } from "react-bootstrap";



export default function AutenticationPage() {


    useEffect(()=>{

    },[])

    return <>
        <Form>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>User name</Form.Label>
                <Form.Control type="text" placeholder="user name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="pass">
                <Form.Label>pass</Form.Label>
                <Form.Control type="password" placeholder="password"/>
            </Form.Group>
            <Button>login</Button>
        </Form>
    </>

}


function fetchData(){
    
    
}