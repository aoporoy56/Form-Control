import React, {Component} from 'react';
import BUTTON from 'react-bootstrap/Button';
import FORM from 'react-bootstrap/Form';
import CARD from 'react-bootstrap/Card';

class MyForm extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         username : "",
         password : "",
         dataShow : false
      }
    }
    print = () =>{
        console.log("Your login information")
        console.log("Your Username is : "+this.state.username);
        console.log("Your Password is : "+this.state.password);
        console.log(" ");
    }
    
    usernameEvent = (e) =>{
        this.setState({
            username : e.target.value
        })
    }
    passwordEvent = (e) =>{
        this.setState({
            password : e.target.value
        })
    }
    submitEven = (e) =>{
        e.preventDefault();
        this.print();
        this.setState({
            dataShow : true
        })
    }
    cleanData = () =>{
        this.setState({
            username : "",
            password : "",
            dataShow : false
        })
    }

    render(){
        let {username, password, dataShow} = this.state;
        return(
            <div className='body'>
                <FORM action='' className='border p-4 mt-5'>
                    <h2 className='mb-3'>Login Form</h2>
                    <FORM.Group>
                        <FORM.Label>User Name : </FORM.Label>
                        <FORM.Control type="text" name='username'onChange={this.usernameEvent} value={username}/>
                    </FORM.Group>
                    <FORM.Group className='mt-3'>
                        <FORM.Label>Password : </FORM.Label>
                        <FORM.Control type="password" name='password' onChange={this.passwordEvent}  value={password}/>
                    </FORM.Group>
                    <div className='mt-3'>
                        <BUTTON className='me-3' varient="" onClick={this.submitEven}>Submit</BUTTON>
                        <BUTTON variant="danger" onClick={this.cleanData}>Clean</BUTTON>
                    </div>
                    </FORM>
                    <CARD className= {(dataShow) ? 'd-block mt-4' : 'd-none'}>
                        <CARD.Header>Your Login Info</CARD.Header>
                        <CARD.Body>
                            <p className='resultText'>Your username is : <b>{this.state.username}</b></p>
                            <p className='resultText'>Your password is : <b>{this.state.password}</b></p>
                        </CARD.Body>
                    </CARD>
                
            </div>
        )
    }
    
}

export default MyForm;