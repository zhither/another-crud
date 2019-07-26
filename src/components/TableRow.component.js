import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'


class TableRow extends Component {

 

  delete = () => {
    axios.get('http://localhost:4000/business/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    
      this.setState({
        person_name: '',
        business_name: '',
        business_number: ''
      })
  }

  render() {
    return (
        <tr>
          <td>
            {this.props.obj.person_name}
          </td>
          <td>
            {this.props.obj.business_name}
          </td>
          <td>
            {this.props.obj.business_number}
          </td>
          <td>
             <Link to={"/edit/" + this.props.obj._id} className="btn btn-primary">Edit</Link>
            
          </td>
          <td>
            <button className="btn btn-danger" onClick={this.delete}>Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;