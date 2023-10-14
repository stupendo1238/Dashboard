import React from "react"
import ColumnChart from "./ColumnChart"
import CircularChart from "./CircularChart"
import Table from "./Table"
export default function Sidebar() {
  return (
    <div class="wrapper">
      <div class="sidebar">
        <p className="dashboard"><i style={{ marginRight: "7px" }} class="fas fa-heart"></i>Dashboard</p>
        <ul>
          <li><a href="#"><i class="fas fa-home"></i>Dashboard</a></li>
          <li><a href="#"><i class="fas fa-user"></i>Product <i style={{ marginLeft: "70px" }} class="fas fa-angle-right"></i></a></li>
          <li><a href="#"><i class="fas fa-address-card"></i>Customers <i style={{ marginLeft: "47px" }} class="fas fa-angle-right"></i></a></li>
          <li><a href="#"><i class="fas fa-blog"></i>Income <i style={{ marginLeft: "70px" }} class="fas fa-angle-right"></i></a></li>
          <li><a href="#"><i class="fas fa-address-book"></i>Promote <i style={{ marginLeft: "63px" }} class="fas fa-angle-right"></i></a></li>
          <li><a href="#"><i class="fas fa-info-circle"></i>Help <i style={{ marginLeft: "91px" }} class="fas fa-angle-right"></i></a></li>
        </ul>
        <div class="profile">
          <img className="pic" src="profile.jpg"></img>
          <div>
            <p className="name">Mohit</p>
            <p className="designation">Frontend Developer</p>
          </div>
          <i style={{ margin: "auto", color: "grey" }} class="fas fa-angle-down"></i>
        </div>
      </div>
      <div className="rightside">
        <div className="header">
          <p style={{ fontWeight: "bold",marginTop:"3px" }}>Hello Mohit <img className="hand" src="handwave.png"></img>,</p>
          <input className="searchbox" placeholder="🔍 Search" type="search"></input>
        </div>
        <div className="boxes">
          <div className="innerbox">
            <i class="fas fa-3x fa-dollar-sign" style={{ color: "#24c236", margin: "auto", padding: "30px 40px", backgroundColor: "#d2eedb", borderRadius: "100px" }}></i>
            <div style={{ margin: "auto" }}>
              <p style={{ fontSize: "11px", color: "grey" }}>Earning</p>
              <p style={{ fontWeight: "bolder" }}>$198K</p>
              <p style={{ fontSize: "11px", color: "grey", marginTop: "1px" }}><span style={{ color: "#24c236", fontWeight: "bold" }}><i class="fas fa-arrow-up" style={{ color: "#24a84b" }}></i> 3%</span> this month</p>
            </div>
          </div>
          <div className="innerbox">
            <i class="fas fa-3x fa-file" style={{ color: "#7b47ff", margin: "auto", padding: "30px 36px", backgroundColor: "#ddcff2", borderRadius: "100px" }}></i>
            <div style={{ margin: "auto" }}>
              <p style={{ fontSize: "11px", color: "grey" }}>Orders</p>
              <p style={{ fontWeight: "bolder" }}>$2.4K</p>
              <p style={{ fontSize: "11px", color: "grey", marginTop: "1px" }}><span style={{ color: "red", fontWeight: "bold" }}><i class="fas fa-arrow-down" style={{ color: "red" }}></i> 2%</span> this month</p>
            </div>
          </div>
          <div className="innerbox">
            <i class="fas fa-3x fa-piggy-bank" style={{ color: "#4747ae", margin: "auto", padding: "32px 28px", backgroundColor: "#aee0ff", borderRadius: "100px" }}></i>
            <div style={{ margin: "auto" }}>
              <p style={{ fontSize: "11px", color: "grey" }}>Balance</p>
              <p style={{ fontWeight: "bolder" }}>$2.4K</p>
              <p style={{ fontSize: "11px", color: "grey", marginTop: "1px" }}><span style={{ color: "red", fontWeight: "bold" }}><i class="fas fa-arrow-down" style={{ color: "red" }}></i> 2%</span> this month</p>
            </div>
          </div>
          <div className="innerbox">
            <i class="fas fa-3x fa-suitcase" style={{ color: "#d52941", margin: "auto", padding: "30px 30px", backgroundColor: "#fbdadc", borderRadius: "100px" }}></i>
            <div style={{ margin: "auto" }}>
              <p style={{ fontSize: "11px", color: "grey" }}>Total Sales</p>
              <p style={{ fontWeight: "bolder" }}>$89K</p>
              <p style={{ fontSize: "11px", color: "grey", marginTop: "1px" }}><span style={{ color: "#24c236", fontWeight: "bold" }}><i class="fas fa-arrow-up" style={{ color: "#24a84b" }}></i> 11%</span> this month</p>
            </div>
          </div>
        </div>
        <div className="graphcontainer">
        <div className="columnchart">
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <div>
            <p style={{fontWeight:"bold"}}>Overview</p>
            <p style={{color:"grey",fontSize:"10px"}}>Monthly Earning</p>
              </div>
            <p style={{color:"grey",fontSize:"12px",backgroundColor:"#e1dff7",margin:"auto 0",padding:"4px 8px",borderRadius:"6px"}}>Quarterly <i style={{ margin: "auto", color: "grey" }} class="fas fa-angle-down"></i></p>
          </div>
         <ColumnChart/>
        </div>
        <div className="circularchart">
          <p style={{fontWeight:"bold"}}>Customers</p>
           <p style={{fontSize:"13px",color:"grey",marginBottom:"1.5vh"}}>Customers that buy products</p>
           <CircularChart/>
          <p className="para1">50%</p>
          <p className="para2">Total New</p>
          <p className="para3">Customers</p>
        </div>
        </div>
        <div className="table">
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 10px 0 8px"}}>
            <p style={{fontWeight:"bold"}}>Product Sell</p>
            <div style={{display:"flex",gap:"10px",marginRight:"2vw"}}>
              <input className="searchbox1" placeholder="🔍 Search" type="search"></input>
               <p style={{color:"grey",fontSize:"12px",backgroundColor:"#e5e5f1",margin:"auto 0",padding:"3px 8px",borderRadius:"6px"}}>Quarterly <i style={{ margin: "auto", color: "grey" }} class="fas fa-angle-down"></i></p>
            </div>
          </div>
        <Table/></div>
      </div>
    </div>
  )
}
