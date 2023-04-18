import 'bootstrap/dist/css/bootstrap.min.css';
import RouterComponents from './Route';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,sendEmailVerification, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import './App.css';
import React, { Component } from 'react'
import Login from './Components/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Components/Register';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAue_UcZ9cbD5jeWmVxe5snCiz8F4V_u-Q",
  authDomain: "filmyweb-c6ad9.firebaseapp.com",
  projectId: "filmyweb-c6ad9",
  storageBucket: "filmyweb-c6ad9.appspot.com",
  messagingSenderId: "36324390366",
  appId: "1:36324390366:web:f96cd2d5b366da5152d94f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();


export default class App extends Component {
      constructor(props) {
        super(props)
      
        this.state = {
           page :1,
           message:"",

           type:1,
        }
      }
      pageSwitchHandler = (e) =>{
        this.setState({page : !this.state.page});
        e.preventDefault();
      };


   registrationHandler =(event) =>{
    event.preventDefault();
   const email=event.target.email.value;
   const password=event.target.password.value;
   const confirmpassowrd=event.target.confirmpassowrd.value;
   if(password !== confirmpassowrd){
     this.setState({message: "password does not match"});
     return ;
   }


   createUserWithEmailAndPassword(auth, email, password)
   .then((data) => {
    const auth = getAuth();
        sendEmailVerification(auth.currentUser);
      this.setState({message:" register succesfully"} ,
        ()=>{
          const name=event.target.name.value="";
          const email=event.target.email.value="";
          const password=event.target.password.value="";
          const econfirmpassword= event.target.confirmpassowrd.value="";
        }
      );
     
   })
   .catch((error) => {
   this.setState({message:error.message});
   console.log(error);
   });
   
    

   };


   loginHandler=(event)=>{
    event.preventDefault();
    const auth = getAuth();
    const email=event.target.email.value;
    const password=event.target.password.value;
    

    signInWithEmailAndPassword(auth, email, password)
    .then((data) => {
       console.log(data);
       if(data.user.emailVerified===true){
        this.setState({message:"login Successful",type:1});
       }
       else{
        this.setState({message:"your email is not verified yet",type:0});
       }
      
    })

    .catch((error) => {
      this.setState({message:error.message,type:0});
      console.log(error);
      });

   };

   googleloginHandler=(event)=>{
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
      signInWithPopup(auth, provider)
      .then((response) => {
        
       }).catch((error) => {
    
       });
  }
  render() {
    return (
      
      <div>
        <RouterComponents />
      </div>
    );
  }
}


