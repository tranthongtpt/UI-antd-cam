import React from 'react';
import { Layout, Space, Col, Divider, Row,Input ,Button,FloatButton  ,Tooltip  } from 'antd';
import { BorderOutlined,AppstoreOutlined,TableOutlined,CommentOutlined, EyeOutlined  } from "@ant-design/icons";
const { Header, Footer, Sider, Content } = Layout;
const { Search,TextArea } = Input;
const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#f5f5f5',
    zIndex: 9
  };
function Footerr() {
  return (
    <>
      <Footer style={footerStyle} className="">
        <Row>
          <Col ol xs={24} md={12} lg={12}>
            <a
              href="#"
              disabled
              className="float menu-master"
              id="menu-share"
              data-container="body"
              data-toggle="popover"
              data-placement="left"
              data-content="Menu"
            >
              <EyeOutlined className="my-float" />
            </a>

            <ul className="float-menu">
              <li
                className="sub-menu"
                data-container="body"
                data-toggle="popover"
                data-placement="left"
                data-content="Home"
              >
                <a href="/" className="menu-link">
                  <BorderOutlined className="my-float" />
                </a>
              </li>
              <li
                className="sub-menu"
                data-container="body"
                data-toggle="popover"
                data-placement="left"
                data-content="About"
              >
                <a href="/dashboard-medium" className="menu-link">
                  <AppstoreOutlined className="my-float" />
                </a>
              </li>
              <li
                className="sub-menu"
                data-container="body"
                data-toggle="popover"
                data-placement="left"
                data-content="Services"
              >
                <a href="/dashboard-more" className="menu-link">
                  <TableOutlined className="my-float" />
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={24} md={12} lg={12} style={{ color: "#000" }}>
            <Space
              direction="horizontal"
              size="middle"
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              @Nocopyright cvs
            </Space>
          </Col>
        </Row>
      </Footer>
    </>
  );
}

export default Footerr;
