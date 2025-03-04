import React from 'react'
import axios from 'axios'
import setToken from '../Util/SetToken';
import swal from "sweetalert";
const ProductContext=React.createContext();

class Context extends React.Component{

    constructor(){
                                 
        super()
          
        //// define states
        this.state={
            name:"",
            email:"",
            password:"",
            password_confirmation:"",
            // product
            P_name:"",
            img_path:"",
            description:"",
            price:"",

        }
    }

componentDidMount() {
    this.GetUser_Login()
}

OnChangeHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        },console.log(e.target.value))
}
  
// Register Function
RegisterForm = async(event) => {
    event.preventDefault();
    const data={
        name:this.state.name,
        email:this.state.email,
        password:this.state.password,
        password_confirmation:this.state.password_confirmation
    }
const res=await axios.post("http://127.0.0.1:8000/api/register",data)
window.location.reload()
const token = res.data.token;
const user = res.data.user;
localStorage.setItem("token", token);
localStorage.setItem("user", JSON.stringify(user));

  };
 
// Login Functions

 LoginForm = async(event) => {
    event.preventDefault();
    const data={
        email:this.state.email,
        password:this.state.password
    }
const res=await axios.post("http://127.0.0.1:8000/api/login",data)
const token = res.data.token;
const user = res.data.user;
localStorage.setItem("token", token);
localStorage.setItem("user", JSON.stringify(user));
  };

GetUser_Login=async()=>{
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        const token = localStorage.getItem("token");
        console.log('first', "first")
    } catch (error) {
        console.log('error', error)
    }

}

// Add Product
  Add_Product = async() => {
     if  (localStorage.token) {
       setToken(localStorage.getItem("token"));
     }
     const config = {
      "content-type": "application/json",
     };
     try {
         const data={
            name:this.state.P_name,
            img_path:this.state.img_path,
            description:this.state.description,
            price:this.state.price
        }
      await axios.post(
       `http://127.0.0.1:8000/api/products`,
       data,
       config
      );
      swal({
       title: "Good job!",
       text: "Create  Product  Successfuly !",
       icon: "success",
       timer:1000
      });
     } catch (error) {
      alert(`error of Creating Product`);
     }
    };

    render(){
        return(<>

        <ProductContext.Provider   value={{
            ...this.state,
            // onchange
            OnChangeHandler:this.OnChangeHandler,
            // register
            RegisterForm:this.RegisterForm,
            // form login
            LoginForm:this.LoginForm,
            GetUser_Login:this.GetUser_Login,
            // product
            Add_Product:this.Add_Product

        }}>
            {this.props.children}
        </ProductContext.Provider>
        </>)
    }
}

const ProductConsumer=ProductContext.Consumer;

export {Context,ProductConsumer};