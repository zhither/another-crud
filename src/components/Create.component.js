// Create.component.js

import React, { Component } from 'react'
import axios from 'axios'
import { Alert } from 'reactstrap';

const urlapi = 'http://localhost:4000/business/add';

class Create extends Component {

    constructor(props){
        super(props)

        this.state ={
            person_name: '',
            business_name: '',
            business_number: '',
        }
    }

    onChangePersonName = event => {
        this.setState({
            person_name: event.target.value
        })
    }

    onChangeBusinessName = event => {

        this.setState({
            business_name: event.target.value
        })

    }

    onChangeNumber = event => {
        this.setState({
            business_number: event.target.value
        })
    }

    myAlert = () => {

        return(
            <div>
                <Alert color="danger">
                    submit it!
                </Alert>
                <h1>hola</h1>
            </div>
        )

    }

    onSubmit = event => {

        //alert('Business in added succesfully')
        

        event.preventDefault()

        const obj = {
            person_name: this.state.person_name,
            business_name: this.state.business_name,
            business_number: this.state.business_number
        }

        axios.post(urlapi, obj)
            .then(res => console.log(res.data))

            this.myAlert() 

        this.setState({
        person_name: '',
        business_name: '',
        business_number: ''
        })

        //this.onSubmit = () => alert('Click Yes')
    }




    render() {
        return (
            <div className="container" style={{marginTop: 10}}>
                <h3>Add new Business</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Person Name:  </label>
                        <input type="text" className="form-control" 
                        onChange={this.onChangePersonName}
                        value={this.person_name} />
                    </div>
                    <div className="form-group">
                        <label>Add Business Name: </label>
                        <input type="text" 
                        className="form-control"
                        value={this.state.business_name}
                        onChange={this.onChangeBusinessName}/>
                    </div>
                    <div className="form-group">
                        <label>Add GST Number: </label>
                        <input type="text" 
                            className="form-control"
                            value={this.state.business_number}
                            onChange={this.onChangeNumber} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Business" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Create