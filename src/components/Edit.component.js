import React, { Component } from 'react';
import axios from 'axios';

const apiurledit = 'http://localhost:4000/business/edit/'
const apirulupdate = 'http://localhost:4000/business/update/'

export default class Edit extends Component {
  constructor(props) {
    super(props);


    this.state = {
      person_name: '',
      business_name: '',
      business_gst_number:''
    }
  }

  componentDidMount() {
      axios.get(apiurledit +this.props.match.params.id)
          .then(response => {
              this.setState({ 
                person_name: response.data.person_name, 
                business_name: response.data.business_name,
                business_number: response.data.business_number });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangePersonName = event => {
    this.setState({
      person_name: event.target.value
    });
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

  onSubmit = event => {
    event.preventDefault();

    const obj = {

      person_name: this.state.person_name,
      business_name: this.state.business_name,
      business_number: this.state.business_number

    };

    axios.post(apirulupdate +this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
  }
 
  render() {
    return (
        <div className="container"style={{ marginTop: 10 }}>
            <h3 align="center">Update Business</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Person Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.person_name}
                      onChange={this.onChangePersonName}
                      />
                </div>
                <div className="form-group">
                    <label>Business Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.business_name}
                      onChange={this.onChangeBusinessName}
                      />
                </div>
                <div className="form-group">
                    <label>Business Number: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.business_number}
                      onChange={this.onChangeNumber}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update Business" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}