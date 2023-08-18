import React, { useState, useEffect } from "react";
import { Layout, Dropdown, Menu, Input, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import {
  UserOutlined,
  DownOutlined,
  LogoutOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import "./Header.css";
import { auth } from "../../firebase";
import { Header } from "antd/lib/layout/layout";

const HeaderComponent = ({ currentUser }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [selectedItem, setSelectedItem] = useState("Ocean Import"); // Initial selected item
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
          <div
            style={{ height: "50px", marginLeft: "60px", marginTop: "10px" }}
          >
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

          <div style={{ padding: "20px 0 0 0" }}>
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
