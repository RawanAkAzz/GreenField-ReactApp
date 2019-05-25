import React, { Component } from 'react';

class CustopmerHomepage extends Component {

  constructor(props){
    super(props)
  
    this.state = {
       shops : [{
        shopname:"",
        shoplocation:"",
        workkinghour:"",
        phoneNumber : "" 

       }]
    }
  }
componentWillMount(){
  this.getInfo();
}
  getInfo() {

    // event.preventDefault();

    fetch('http://localhost:3500/getshops', {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    }).then(response => response.json())
      .then(newData => {
        console.log(newData)
        this.setState({shops: newData})});

  }
  render() {
    
 
    return (
        <div className="form-style-7">
      
    {this.state.shops.map(shop => <div>{shop.shopname }<br></br>{shop.shoplocation}<br></br>{shop.workkinghour}<b></b>{shop.specialties}<br></br>{shop.phoneNumber}</div>)}
      
      </div>
    );
  }
}

export default CustopmerHomepage;