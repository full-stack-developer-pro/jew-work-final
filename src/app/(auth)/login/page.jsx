"use client"; 
import React, { useState } from "react";
import Link from "next/link";
import AuthService from "@/services/auth.service";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export default function page() {


//Fields States Here 


const [username,setUserName] = useState("");

 const [password,setPassword] = useState("");

  const handleLogin = (e) => {
    //console.log(
     // username,password
    //)
    e.preventDefault();
      AuthService.login(username,password).then(
       () => {
         toast.success("Login Successfull!!")
         setTimeout(()=>{
          window.location.href = "/my-profile"
         },2000)
       },
       (error) => {
                const resMessage = 
                  (error.response && 
                    error.response.data &&
                    error.message.data.message) ||
                    error.message ||
                    error.toString();
                    toast.error(resMessage,{
                     position:toast.POSITION.TOP_RIGHT,
                    });
       
       }
      )
 }

  return (
    <>
    <ToastContainer/>
      <section className="our-login">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 m-auto wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="main-title text-center">
                <h2 className="title">Log In</h2>
                <p className="paragraph">
                  Give your visitor a smooth online experience with a solid UX
                  design
                </p>
              </div>
            </div>
          </div>
          <div className="row wow fadeInRight" data-wow-delay="300ms">
            <div className="col-xl-6 mx-auto">
              <div className="log-reg-form search-modal form-style1 bgc-white p50 p30-sm default-box-shadow1 bdrs12">
                <div className="mb30">
                  <h4>We're glad to see you again!</h4>
                  <p className="text">
                    Don't have an account?{" "}
                    <Link href="/register" className="text-thm">
                      Sign Up!
                    </Link>
                  </p>
                </div>
                <div className="mb20">
                  <label className="form-label fw600 dark-color">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="alitfn58@gmail.com"
                    onChange={(e)=>setUserName(e.target.value)}
                  />
                </div>
                <div className="mb15">
                  <label className="form-label fw600 dark-color">
                    Password
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="*******"
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </div>
                <div className="checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb20">
                  <label className="custom_checkbox fz14 ff-heading">
                    Remember me
                    <input type="checkbox" defaultChecked="checked" />
                    <span className="checkmark" />
                  </label>
                  <a className="fz14 ff-heading">Lost your password?</a>
                </div>
                <div className="d-grid mb20">
                  <button className="ud-btn btn-thm" type="button" onClick={handleLogin}>
                    Log In <i className="fal fa-arrow-right-long" />
                  </button>
                </div>
                <div className="hr_content mb20">
                  <hr />
                  <span className="hr_top_text">OR</span>
                </div>
                <div className="d-md-flex justify-content-between">
                  <button
                    className="ud-btn btn-fb fz14 fw400 mb-2 mb-md-0"
                    type="button"
                  >
                    <i className="fab fa-facebook-f pr10" /> Continue Facebook
                  </button>
                  <button
                    className="ud-btn btn-google fz14 fw400 mb-2 mb-md-0"
                    type="button"
                  >
                    <i className="fab fa-google" /> Continue Google
                  </button>
                  <button className="ud-btn btn-apple fz14 fw400" type="button">
                    <i className="fab fa-apple" /> Continue Apple
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
