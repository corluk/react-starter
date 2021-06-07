import React, {useState , useRef} from "react";
import { Button, DatePicker, version } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Menu } from "antd"; 
import {useToggle } from "ahooks";
import { Row, Col } from 'antd';
import { Layout, Breadcrumb , Image  } from 'antd';

const { Header, Content, Footer } = Layout;
const {SubMenu} = Menu;
export default ()=>{
   const [dir, { toggle, setLeft, setRight } ] = useToggle( "horizontal", "vertical");
  
  console.log(toggle);
  console.log(dir);
  return <>
    <Layout className="layout">
    <Header>
      <Row>
        <Col flex={2}> <Image
      width={200}
      height={64}
      style={{overflow: "hidden"}}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    /></Col>
    <Col flex={3}>
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Col>
        </Row>
    
     
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">   <DatePicker /></div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
     
     
 
  </>

  ;
};
