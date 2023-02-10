import React from 'react';
import { Layout, Space, Col, Divider, Row,Input ,Button,FloatButton  ,Tooltip  } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const { Search,TextArea } = Input;
function Sidenav() {
  return (
    <>
      <Sider className="sider-primary ant-layout-sider-primary">
        <Search
          placeholder="input search text"
          allowClear
          onSearch
          style={{ width: "100%" }}
        />
        <Input.Group size="large" className="input-group">
          <Col className="gutter-col" span={6}>
            <Col span={6} className="gutter-col p-10">
              <Input style={{ maxWidth: "100%" }} placeholder="Basic usage" />
            </Col>
            <Col span={6} className="gutter-col  p-10">
              <Input style={{ maxWidth: "100%" }} placeholder="Basic usage" />
            </Col>
            <Col span={6} className="gutter-col  p-10">
              <Input style={{ maxWidth: "100%" }} placeholder="Basic usage" />
            </Col>
            <Col span={6} className="gutter-col  p-10">
              <Input style={{ maxWidth: "100%" }} placeholder="Basic usage" />
            </Col>
            <Col span={6} className="gutter-col  p-10">
              <Input style={{ maxWidth: "100%" }} placeholder="Basic usage" />
            </Col>
          </Col>
        </Input.Group>
        <Input.Group className="t-100">
          <nav>
            <a className="button top" href="#">
              <i className="icon-play"></i>
            </a>
            <a className="button right" href="#">
              <i className="icon-forward"></i>
            </a>
            <a className="button left" href="#">
              <i className="icon-backward"></i>
            </a>
            <a className="button bottom" href="#">
              <i className="icon-pause"></i>
            </a>
            <a className="center-button" href="#">
              <i className="icon-stop"></i>
            </a>
          </nav>
        </Input.Group>
        <Input.Group className="t-200">
          <Space
            direction="vertical"
            style={{
              width: "100%",
            }}
          >
            <Button type="primary" block>
              Nuts
            </Button>
            <Button block>Nuts</Button>
          </Space>
        </Input.Group>
      </Sider>
    </>
  );
}

export default Sidenav;
