import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import Image from 'next/image';
// import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        
        
      </Head>

      <div
        className="container-fluid bg-light"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <header style={{ backgroundColor: "#F7F9FF" }}>
          <div className="header p-2" style={{ backgroundColor: "#F7F9FF" }}>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  <img
                    src="/designerr-logo.png"
                    alt="Logo"
                    width="72%"
                    height="auto"
                    class="d-inline-block align-text-top"
                  />
                </a>

                <div
                  className="collapse navbar-collapse d-flex justify-content-end"
                  id="navbarSupportedContent"
                >
                  <div className="d-flex justify-content-end">
                    <img
                      src="/user-img1.png"
                      alt="Logo"
                      width="72%"
                      height="auto"
                      class="d-inline-block align-text-top"
                    />
                    <p style={{ fontSize: 16 }}>John Doe</p>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>

        <div className="row">
          <div className="container max814-2">
            <div className="row">
              <div
                className="col-3"
                style={{
                  backgroundColor: "#fff",
                  color: "#000",
                  height: "850px",
                }}
              >
                <div style={{ backgroundColor: "transparent" }}>
                  <div class="m-3">
                    <button class="new-chat" id="sidebarNewChat_btn">
                      + New Chat
                    </button>
                  </div>

                  {/* today */}
                  <div className="mt-4">
                    <p className="tyni-heading1 mx-3 ">Today</p>
                    <ul className="text-start">
                      <li>
                        {" "}
                        <span className="custom-li-style"></span> Lorem Ipsum
                        Sit Dolor...{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="custom-li-style"></span> Lorem Ipsum
                        Sit Dolor...{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="custom-li-style"></span> Lorem Ipsum
                        Sit Dolor...{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="custom-li-style"></span> Lorem Ipsum
                        Sit Dolor...{" "}
                      </li>
                    </ul>
                  </div>
                  {/* Yesterday */}
                  <div className="mt-4">
                    <p className="tyni-heading1 mx-3 ">Yesterday</p>
                    <ul className="text-start">
                      <li>
                        {" "}
                        <span className="custom-li-style"></span> Lorem Ipsum
                        Sit Dolor...{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="custom-li-style"></span> Lorem Ipsum
                        Sit Dolor...{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="custom-li-style"></span> Lorem Ipsum
                        Sit Dolor...{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="custom-li-style"></span> Lorem Ipsum
                        Sit Dolor...{" "}
                      </li>
                    </ul>
                  </div>
                  {/* Previous 7 Days */}
                  <div className="mt-4">
                    <p className="tyni-heading1 mx-3 ">Previous 7 Days</p>
                    <ul className="text-start">
                      <li>
                        {" "}
                        <span className="custom-li-style"></span> Lorem Ipsum
                        Sit Dolor...{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="custom-li-style"></span> Lorem Ipsum
                        Sit Dolor...{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="custom-li-style"></span> Lorem Ipsum
                        Sit Dolor...{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="custom-li-style"></span> Lorem Ipsum
                        Sit Dolor...{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-9"
                style={{ backgroundColor: "#F2F5FF", color: "#000" }}
              >
                <div className="container">
                  <div className="card text-center">
                    <div
                      className="card-header "
                      style={{ backgroundColor: "white" }}
                    >
                      <ul className="nav ">
                        <li className="nav-item">
                          <a className="nav-link active" href="#">
                            Settings
                          </a>
                        </li>

                        <li className="nav-item">
                          <a className="nav-link " href="#notifcation">
                            Notification
                          </a>
                        </li>

                        <li className="nav-item">
                          <a className="nav-link " href="#">
                            Billing
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="card-body">
                      {/* ======section1  ====== */}

                      <section id="profile">
                        <div className="row" style={{ marginTop: 30 }}>
                          <div className="col-5">
                            <h4
                              className="card-title"
                              style={{ marginTop: 25 }}
                            >
                              Profile
                            </h4>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: 10,
                              }}
                            >
                              <div
                                className="img"
                                style={{
                                  backgroundColor: "blue",
                                  borderRadius: 50,
                                  width: 80,
                                  height: 80,
                                }}
                              ></div>
                              {/* <Image src="/assets/images/Ellipse 179 (1)" width={400} height={200} alt="" /> */}
                            </div>
                            <h5
                              className="card-title"
                              style={{ marginTop: 10 }}
                            >
                              Jhon Doe
                            </h5>

                            <p className="card-text" style={{ marginTop: 25 }}>
                              Admin
                            </p>
                            <button
                              style={{
                                border: 2,
                                backgroundColor: "white",
                                marginTop: 25,
                              }}
                            >
                              {" "}
                              <a
                                href="#"
                                className="btn btn-outline-dark "
                                style={{ textDecoration: "none" }}
                              >
                                Edit Profile
                              </a>
                            </button>
                          </div>

                          <div className="col-6">
                            <div className="container">
                              <p style={{ float: "left", marginBottom: 2 }}>
                                BASIC INFO
                              </p>
                              <br />
                              <hr />
                              <br />
                              <form action="/action_page.php">
                                <div className="form-group">
                                  <label
                                    for="name"
                                    style={{
                                      float: "left",
                                      marginTop: 10,
                                      marginBottom: 10,
                                    }}
                                  >
                                    Name*
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="User name"
                                    name="email"
                                  />
                                </div>

                                <div className="form-group">
                                  <label
                                    for="email"
                                    style={{
                                      float: "left",
                                      marginTop: 10,
                                      marginBottom: 10,
                                    }}
                                  >
                                    Email*
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter email address"
                                    name="email"
                                  />
                                </div>

                                <div className="form-group">
                                  <label
                                    for="pwd"
                                    style={{
                                      float: "left",
                                      marginTop: 10,
                                      marginBottom: 10,
                                    }}
                                  >
                                    Password
                                  </label>
                                  <input
                                    type="password"
                                    className="form-control"
                                    id="pwd"
                                    placeholder="Enter password"
                                    name="pwd"
                                  />
                                </div>

                                <div className="form-group">
                                  <label
                                    for="pwd-name"
                                    style={{
                                      float: "left",
                                      marginTop: 10,
                                      marginBottom: 10,
                                    }}
                                  >
                                    Name*
                                  </label>
                                  <input
                                    type="password"
                                    className="form-control"
                                    id="pwd"
                                    placeholder="Enter name"
                                    name="pwd-name"
                                  />
                                </div>

                                <div
                                  style={{
                                    display: "inline-flex",
                                    float: "right",
                                    marginTop: 20,
                                    marginBottom: 20,
                                  }}
                                >
                                  <button
                                    type="submit"
                                    className="btn btn-outline-dark"
                                    style={{ width: 100 }}
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    type="submit"
                                    className="btn btn-primary"
                                    style={{ marginLeft: 15, width: 100 }}
                                  >
                                    Save
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </section>

                      {/* ===section2===== */}
                      {/* <section id="notification">
    <div className="row" >
       <div className='row'>
         <div className="col-6">
              <div className="form-check">  <div style={{float:'left'}}>
                 <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked style={{paddingLeft:20, margin:20}} />
                 </div>
                 <label className="form-check-label" for="flexCheckChecked" style={{paddingRight:100}}>
                 
                   <h4  style={{float:'left'}}>News and updates</h4><br/>
                   <p style={{float:'left'}}>News about products and features updates.</p>
                   
                   </label>
              </div>
         </div>
         <div className="col-6">
         <div className="form-check">  <div style={{float:'left'}}>
                 <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"  style={{paddingLeft:20, margin:20}} />
                 </div>
                 <label className="form-check-label" for="flexCheckChecked" style={{paddingRight:100}}>
                 
                   <h4  style={{float:'left'}}>Tips and Tutorials</h4><br/>
                   <p style={{float:'left'}}>News about products and features updates.</p>
                   
                   </label>
              </div>
         </div>

       </div>

       <div className='row'>
         <div className="col-6">
         <div className="form-check">  <div style={{float:'left'}}>
                 <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"  style={{paddingLeft:20, margin:20}} />
                 </div>
                 <label className="form-check-label" for="flexCheckChecked" style={{paddingRight:100}}>
                 
                   <h4  style={{float:'left'}}>User research</h4><br/>
                   <p style={{float:'left'}}>News about products and features updates.</p>
                   
                   </label>
              </div>
         </div>
         <div className="col-6">
         <div className="form-check">  <div style={{float:'left'}}>
                 <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked style={{paddingLeft:20, margin:20}} />
                 </div>
                 <label className="form-check-label" for="flexCheckChecked" style={{paddingRight:100}}>
                 
                   <h4  style={{float:'left'}}>Reminders</h4><br/>
                   <p style={{float:'left'}}>News about products and features updates.</p>
                   
                   </label>
              </div>
         </div>

       </div>
   
    
    </div>
    
    <div className="row" style={{display:'flex',alignItems:'center' , justifyContent:'center' , marginTop:10,marginBottom:40}}>
     <div className="col-4">
     <button style={{border:10, borderColor:'#0F6A91', borderRadius:10 , paddingTop:10, paddingRight:15, paddingBottom: 10, paddingLeft: 15, float:'right'}}>Cancel</button>
     </div>
     <div className="col-4">
     <button style={{border:10, borderRadius:10 , paddingTop:10, paddingRight:15, paddingBottom: 10, paddingLeft: 15, float:'left', backgroundColor:'#0F6A91',color:'white'}}>Save</button>
     </div>
    </div>
    
    </section> */}

                      {/* ====section3==== */}
                      <section id="billing"></section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
