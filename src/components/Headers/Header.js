import React, { useState, useEffect } from "react";
import {
  Layout,
  Dropdown,
  Menu,
  Input,
  Button,
  Collapse,
  Checkbox,
  Alert,
  Space,
} from "antd";
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import { FaListUl } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import {
  UserOutlined,
  DownOutlined,
  UpOutlined,
  LogoutOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import "./Header.css";
import { auth } from "../../firebase";
import { Header } from "antd/lib/layout/layout";

const HeaderComponent = ({ currentUser }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [selectedItem, setSelectedItem] = useState("Ocean Import");
  const [isNewBoxOpen, setIsNewBoxOpen] = useState(false); // Initial selected item
  const [isTodoBoxOpen, setIsTodoBoxOpen] = useState(false);
  const items = [
    "Ocean Import",
    "Ocean Export",
    "Air Import",
    "Air Export",
    "Trade Partner",
    "Sales",
  ];
  const colorBgContainer = "#38323d";
  const { Search } = Input;

  useEffect(() => {
    // ... other code

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentUser]);

  const handleScroll = () => {
    const header = document.querySelector(".headerrr");
    if (header) {
      if (window.scrollY > 0) {
        header.classList.add("scroll");
      } else {
        header.classList.remove("scroll");
      }
    }
  };

  const handleNewBoxToggle = () => {
    setIsNewBoxOpen(!isNewBoxOpen);
  };

  const handleTodoBoxToggle = () => {
    setIsTodoBoxOpen(!isTodoBoxOpen);
  };

  useEffect(() => {
    if (currentUser && currentUser.displayName) {
      setUserData(currentUser.displayName);
    }
  }, [currentUser]);

  const handleLogout = async () => {
    console.log("Attempting to log out...");
    try {
      await auth.signOut();
      console.log("User logged out successfully.");
      navigate("/login");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const handleItemSelect = ({ key }) => {
    setSelectedItem(key);
  };
  const menu = (
    <Menu onClick={handleItemSelect}>
      {items.map((item) => (
        <Menu.Item key={item}>{item}</Menu.Item>
      ))}
    </Menu>
  );

  const userMenu = (
    <Menu>
      <Menu.Item key="profile">
        <UserOutlined />
        My Profile
      </Menu.Item>
      <Menu.Item key="logout" onClick={() => handleLogout()}>
        <LogoutOutlined />
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Layout>
        <Header
          className="headerrr"
          style={{
            paddingBottom: "15px 0px ",
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: colorBgContainer,
          }}
        >
          <div style={{ height: "100%", padding:'8px'}}>
            <Link to="/gofreight">
              {" "}
              <img
                src="/logo.png"
                alt="Go Freight Logo"
                className="logoheader"
              />
            </Link>
          </div>

          <div style={{ display: "flex", marginLeft: "160px" }}>
            {/* Dropdown for selecting an item */}
            <div
              style={{
                height: "100%",
                backgroundColor: "#0E223E",
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* Dropdown for selecting an item */}
              <Dropdown overlay={menu}>
                <Button
                  className="item-button"
                  style={{ background: "transparent", border: "0" }}
                >
                  {selectedItem} <DownOutlined />
                </Button>
              </Dropdown>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "white",
                padding: "25px",
              }}
            >
              {/* Ant Design Search Bar */}
              <Search
                placeholder="Search"
                size="large"
                onSearch={(value) => console.log("Search triggered:", value)}
                className="custom-search"
                style={{ "--placeholder-color": "black" }}
                enterButton={
                  <Button
                    style={{ background: "transparent", border: "0" }}
                    shape="circle"
                  >
                    <SearchOutlined className="search-button" />
                  </Button>
                }
              />
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            {/* New 'What's New' Dropdown */}
            <Dropdown
              overlay={
                <Collapse in={isNewBoxOpen}>
                  <div
                    style={{
                      width: "400px",
                      height: isNewBoxOpen ? "290px" : "0",
                      backgroundColor: "#FFFFFF",
                      transition: "height 1s ease-in-out",
                      overflow: "hidden",
                      backgroundColor: "#26A69A",
                      border: "1px solid #E3E7ED",
                      boxShadow:
                        "10px 11px 1px 0px rgba(0, 0, 0, 0.1019607843)",
                      borderRadius: "5px",
                    }}
                  >
                    <div
                      style={{
                        height: "40px",
                        display: "flex",
                        justifyContent: "space-between",
                        borderBottom: "1px solid white",
                        alignItems: "center",
                        fontWeight: "700",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        color: "white",
                      }}
                    >
                      <span>New Feature(s)</span>
                      <Checkbox style={{ color: "white", fontWeight: "200" }}>
                        {" "}
                        Don’t show until next new feature
                      </Checkbox>
                    </div>
                    <div
                      style={{
                        height: "200px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "10px",
                        borderBottom: "1px solid white",
                      }}
                    >
                      <img src="/lightbulb.png" className="lightbulb" />
                      <span
                        style={{
                          fontWeight: "700",
                          textAlign: "center",
                          color: "white",
                        }}
                      >
                        You activate most of the new features
                        <br />
                        Find out more on our website!
                      </span>
                      <Button style={{ marginBottom: "10px" }}>
                        Explore Now
                        <LiaExternalLinkSquareAltSolid />
                      </Button>
                    </div>
                    <div
                      style={{
                        paddingRight: "10px",
                        paddingTop: "7px",
                        color: "white",
                      }}
                    >
                      <span style={{ float: "right", alignItems: "center" }}>
                        Find more new features
                        <LiaExternalLinkSquareAltSolid />
                      </span>
                    </div>
                  </div>
                </Collapse>
              }
              trigger={["click"]}
              placement="bottomCenter"
              onVisibleChange={handleNewBoxToggle}
            >
              <Button
                className={`item-button ${isNewBoxOpen ? "open" : ""}`}
                style={{ background: "transparent", border: "0" }}
              >
                What's New{" "}
                <DownOutlined
                  className={`dropdown-icon ${isNewBoxOpen ? "open" : ""}`}
                />
              </Button>
            </Dropdown>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            {/* New 'To do list' Dropdown */}
            <Dropdown
              overlay={
                <Collapse in={isTodoBoxOpen}>
                  <div
                    style={{
                      width: "400px",
                      height: isTodoBoxOpen ? "290px" : "0",
                      backgroundColor: "#FFFFFF",
                      transition: "height 1s ease-in-out",
                      overflow: "hidden",
                      border: "1px solid #E3E7ED",
                      boxShadow:
                        "10px 11px 1px 0px rgba(0, 0, 0, 0.1019607843)",
                      borderRadius: "5px",
                    }}
                  >
                    <div
                      style={{
                        height: "40px",
                        display: "flex",
                        justifyContent: "left",
                        borderBottom: "1px solid black",
                        alignItems: "center",
                        fontWeight: "700",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                      }}
                    >
                      <span>To-do list&nbsp;&nbsp;</span>
                      <Space direction="horizontal">
                        <Alert
                          message="0 errors"
                          type="error"
                          style={{
                            width: "fit-content",
                            padding: "1px",
                            fontWeight: "400",
                            borderRadius: 0,
                          }}
                        />
                        <Alert
                          message="0 warnings"
                          type="warning"
                          style={{
                            width: "fit-content",
                            padding: "1px",
                            fontWeight: "400",
                            borderRadius: 0,
                          }}
                        />
                      </Space>
                    </div>
                    <div
                      style={{
                        height: "200px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "10px",
                        borderBottom: "1px solid white",
                      }}
                    >
                      <img src="/to-do-empty.png" className="to-do-empty" />
                      <span
                        style={{
                          fontWeight: "500",
                          textAlign: "center"
                        }}
                      >
                        You don't have any To-dos
                      </span>
                    </div>
                  </div>
                </Collapse>
              }
              trigger={["click"]}
              placement="bottomCenter"
              onVisibleChange={handleTodoBoxToggle}
            >
              <Button
                className={`item-button ${isTodoBoxOpen ? "open" : ""}`}
                style={{ background: "transparent", border: "0" }}
              >
                <FaListUl  style={{fontSize:'20px'}}/>
              </Button>
            </Dropdown>
          </div>

<div style={{ display: "flex", alignItems: "center" }}>
  {/* New 'To do list' Dropdown */}
  <Dropdown
    overlay={
      <Collapse in={isTodoBoxOpen}>
        <div
          style={{
            width: "400px",
            height: isTodoBoxOpen ? "290px" : "0",
            backgroundColor: "#FFFFFF",
            transition: "height 1s ease-in-out",
            overflow: "hidden",
            border: "1px solid #E3E7ED",
            boxShadow:
              "10px 11px 1px 0px rgba(0, 0, 0, 0.1019607843)",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              height: "40px",
              display: "flex",
              justifyContent: "left",
              borderBottom: "1px solid black",
              alignItems: "center",
              fontWeight: "700",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            <span>Notifications&nbsp;&nbsp;</span>
            <a href="" style={{fontWeight:'400'}}>Mark all as read</a>
          </div>
          <div
            style={{
              height: "200px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "10px",
              borderBottom: "1px solid white",
            }}
          >
            <img src="/notification-empty.png" className="notification-empty" />
            <span
              style={{
                fontWeight: "500",
                textAlign: "center"
              }}
            >
              You don't have any notification
            </span>
          </div>
        </div>
      </Collapse>
    }
    trigger={["click"]}
    placement="bottomCenter"
    onVisibleChange={handleTodoBoxToggle}
  >
    <Button
      className={`item-button ${isTodoBoxOpen ? "open" : ""}`}
      style={{ background: "transparent", border: "0" }}
    >
      <IoMdNotificationsOutline style={{fontSize:'25px'}}/>
    </Button>
  </Dropdown>
</div>

          <div style={{ padding: "12px 0 0 0" }}>
            {/* Ant Design Dropdown */}
            <Dropdown overlay={userMenu} style={{ color: "white" }}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
                style={{ color: "white" }}
              >
                <UserOutlined
                  style={{ fontSize: "18px", marginRight: "5px" }}
                />
                {userData ? userData : "user"}
                <DownOutlined style={{ fontSize: "12px" }} />
              </a>
            </Dropdown>
          </div>
        </Header>
      </Layout>
    </div>
  );
};

export default HeaderComponent;
