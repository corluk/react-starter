import React, {useState , useRef} from "react";
import { Button, DatePicker, version } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Menu } from "antd"; 
import {useToggle } from "ahooks";
import { Row, Col } from 'antd';
import { Layout, Breadcrumb , Image  } from 'antd';
import "./assets/style.scss";
const { Header, Content, Footer } = Layout;
const {SubMenu} = Menu;
export default ()=>{
   const [dir, { toggle, setLeft, setRight } ] = useToggle( "horizontal", "vertical");
  
  console.log(toggle);
  console.log(dir);
  return <>
    <div>

    </div>
     
     
 
  </>

  ;
};
