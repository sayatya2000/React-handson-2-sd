import {Component} from "react"
import './App.css';


class App extends Component{

    state={
        name:"",
        department:"",
        rating:"",
        clicked: true, 
        data:[]
    }
        
    
    handelChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    handeleClick=()=>{
        const obj={
            name:this.state.name,
            department:this.state.department,
            rating:this.state.rating
        }
        this.state.data.push(obj);
        this.setState({data:this.state.data,name:"", department:"", rating:""})
    }
    render(){
        return(
            <>
                <span className="feedback-form">
                    <h1 data-text="EMPLOYEE FEEDBACK FROM">Employee Feedback From</h1>
                    <span className="name"> <ion-icon name="person-circle-outline"></ion-icon>NAME:</span> <input className="name1" type="text" name="name" onChange={this.handelChange} 
                    placeholder="                Enter Your Name" required value={this.state.name}></input>

                    <span className="name"> <ion-icon name="storefront-outline"></ion-icon>DEPARTMENT:</span>  <input className="name1" type="text" name="department" onChange={this.handelChange} 
                    placeholder="                     Department" required value={this.state.department}></input>


                    <span className="name"><ion-icon name="ribbon-outline"></ion-icon>RATING:</span><input className="name1" type="number" name="rating" onChange={this.handelChange} 
                    placeholder="                         Rating" required value={this.state.rating}></input>

                    <button className="button" onClick={this.handeleClick}>SUBMIT</button>
                </span>
                
               


                <span className="lastBox">
                    {this.state.data.map((item,index)=>{
                       return(
                            <h5 className="ans" key ={index}>  <span className="name2">NAME:</span>{item.name} | <span className="name2">  DEPT:</span>{item.department} | <span className="name2"> RATING:</span>{item.rating}</h5>  
                        )
                
                    
             })}</span>
            </>
        )
    }
}
export default App