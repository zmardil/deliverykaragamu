import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
// @desc import Components
import UserLogin from "../Login/UserLogin/userlogin.component";
import UserRegistration from "../Register/registration.component";
// import ForgotPassword from "../Forgotpassword/forgotpassword.component";
import ProfileUpdate from "../ProfileUpdate/profileUpdate.component";

// @desc import Components
import Footer from "../../components/Footer/Footer.component";

// @desc import Components
import InventoryGrid from "../Inventory/InventoryList/Inventory.component";
import ItemList from "../ItemList/InventoryList/Inventory.component";
import InsertInventoryItems from "../Inventory/InsertItems/InsertInventoryItems.component";
import UpdateInventoryItems from "../Inventory/UpdateItems/UpdateInventoryItems";
import ViewInventoryItems from "../ItemList/ViewItems/ViewInventoryItems";
import PurchasesListView from "../Purchases/PurchasesTable/PurchasesTable.component";
import ViewPurchases from "../Purchases/ManagePurchases/ManagePurchases.component";


export default function MenuAppBar() {
  const [token, setToken] = useState(0);
  const [NoticeList, setNoticeList] = useState([]);
  const [NoticeCount, setNoticeCount] = useState([]);
  let userType = localStorage.getItem("userType");
  let userName= localStorage.getItem("userName");
  

  function x(){
    localStorage.clear();
    window.location.replace("/userlogin");
  }
  return (
    <Router>
      <div id="wrapper">
        <nav
          style={{
            backgroundImage: "linear-gradient(to bottom, #064564, #73b3fb)",
          }}
          className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion p-0"
        >
          <div className="container-fluid d-flex flex-column p-0">
            <Link className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0">
              <div className="sidebar-brand-icon logo-Desktop">
                
                {/* <i className="fas fa-laugh-wink"></i> */}
              </div>

             
            </Link>

            <hr className="sidebar-divider my-0" />

            <ul className="nav navbar-nav text-light" id="accordionSidebar">
            

              {userType !=undefined ? <li className="nav-item" role="presentation">
                <Link className="nav-link" to="profileUpdate">
                  <i className="fas fa-user"></i>
                  <span>Profile</span>
                </Link>
              </li> : ""}
              
              {userType == "admin" ?
              <li className="nav-item" role="presentation">
                <Link className="nav-link" to="inventory">
                  <i className="fas fa-table"></i>
                  <span>Items</span>
                </Link>
              </li>: ""}

              { userType != "admin" ?
              <li className="nav-item" role="presentation">
                <Link className="nav-link" to="items">
                  <i className="fas fa-table"></i>
                  <span>Items List</span>
                </Link>
              </li>: ""}
              {userType == "admin" ?
              <li className="nav-item" role="presentation">
                <Link className="nav-link" to="PurchasesList">
                  <i className="fas fa-clipboard-check"></i>
                  <span>Purchases</span>
                </Link>
              </li> : ""}
              <li className="nav-item" role="presentation">
                <Link className="nav-link" onClick={x}>
                  <i className="far fa-user-circle"></i>
                  <span>{userType !=undefined ? "Log Out" :"Log In"}</span>
                </Link>
              </li>
             
            </ul>
            <div className="text-center d-none d-md-inline">
              <button
                className="btn rounded-circle border-0"
                id="sidebarToggle"
                type="button"
              ></button>
            </div>
          </div>
        </nav>

        {/* Header Nav bar  */}
        <div className="d-flex flex-column" id="content-wrapper">
          <div id="content">
            <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
              <div className="container-fluid">
                <button
                  className="btn btn-link d-md-none rounded-circle mr-3"
                  id="sidebarToggleTop"
                  type="button"
                >
                  <i className="fas fa-bars"></i>
                </button>
             
                <ul className="nav navbar-nav flex-nowrap ml-auto">
                  <li className="nav-item dropdown d-sm-none no-arrow">
                    <Link
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fas fa-search"></i>
                    </Link>
                    <div
                      className="dropdown-menu dropdown-menu-right p-3 animated--grow-in"
                      role="menu"
                      aria-labelledby="searchDropdown"
                    >
                      
                    </div>
                  </li>
                  <li
                    className="nav-item dropdown no-arrow mx-1"
                    role="presentation"
                  >
                    <div className="nav-item dropdown no-arrow">
                      <Link
                        className="dropdown-toggle nav-link"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="badge badge-danger badge-counter">
                          {NoticeCount}
                        </span>
                        <i className="fas fa-bell fa-fw"></i>
                      </Link>
                      <div
                        className="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in"
                        role="menu"
                      >
                        <h6 className="dropdown-header">notices</h6>
                        {NoticeList.map((pack,index)=>(
                          <Link className="d-flex align-items-center dropdown-item">
                          <div className="mr-3">
                            <div className="bg-primary icon-circle">
                              <i className="fas fa-file-alt text-white"></i>
                            </div>
                          </div>
                          <div>
                            <span className="small text-gray-500">
                              {pack.Date.substring(0, 10)}
                            </span>
                            <p>{pack.NoticeTitle}</p>
                          </div>
                        </Link>
                        ))}
                        <Link className="text-center dropdown-item small text-gray-500">
                          Show All Notices
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li
                    className="nav-item dropdown no-arrow mx-1"
                    role="presentation"
                  >
                    <div className="nav-item dropdown no-arrow">
                      <Link
                        className="dropdown-toggle nav-link"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fas fa-envelope fa-fw"></i>
                        <span className="badge badge-danger badge-counter">
                          
                        </span>
                      </Link>
                      <div
                        className="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in"
                        role="menu"
                      >
                        <h6 className="dropdown-header">alerts center</h6>
                        
                        <Link className="text-center dropdown-item small text-gray-500">
                          Show All Alerts
                        </Link>
                      </div>
                    </div>
                    <div
                      className="shadow dropdown-list dropdown-menu dropdown-menu-right"
                      aria-labelledby="alertsDropdown"
                    ></div>
                  </li>
                  <div className="d-none d-sm-block topbar-divider"></div>
                  <li
                    className="nav-item dropdown no-arrow"
                    role="presentation"
                  >
                     {userType !=undefined ? <div className="nav-item dropdown no-arrow">
                      <Link
                        className="dropdown-toggle nav-link"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="d-none d-lg-inline mr-2 text-gray-600 small">
                          {userName == undefined ? "" :userName }
                        </span>
                        
                      </Link>
                      <div
                        className="dropdown-menu shadow dropdown-menu-right animated--grow-in"
                        role="menu"
                      >
                        <Link className="dropdown-item" role="presentation" to="profileUpdate">
                          <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                          &nbsp;Profile
                        </Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" role="presentation" onClick={x}>
                          <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                          &nbsp;Logout
                        </Link>
                      </div>
                    </div>
                    :""}
                  </li>
                </ul>
              </div>
            </nav>

            <div className="container-fluid">
              <Route path="/registration" exact component={UserRegistration} />
              <Route path="/profileUpdate" exact component={ProfileUpdate} />
              <Route path="/userlogin" exact component={UserLogin} />


              <Route path="/inventory" exact component={InventoryGrid} />
              <Route path="/items" exact component={ItemList} />
              <Route path="/" exact component={ItemList} />
              <Route
                path="/inventoryitems"
                exact
                component={InsertInventoryItems}
              />
              <Route
                path="/UpdateInventoryitems"
                exact
                component={UpdateInventoryItems}
              />
              <Route
                path="/ViewInventoryItems"
                exact
                component={ViewInventoryItems}
              />
              <Route
                path="/PurchasesList"
                exact
                component={PurchasesListView}
              />
              <Route
                path="/ViewPurchases"
                exact
                component={ViewPurchases}
              />

            </div>
          </div>

          <Footer />
        </div>
        <a class="border rounded d-inline scroll-to-top" href="#page-top">
          <i class="fas fa-angle-up"></i>
        </a>
      </div>
    </Router>
  );
}
