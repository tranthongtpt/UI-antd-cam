import React from 'react';
    import { Layout, Space, Col, Divider, Row,Input ,Button } from 'antd';
    import { BorderOutlined,AppstoreOutlined,TableOutlined } from "@ant-design/icons";
const { Header, Footer, Sider, Content } = Layout;
const { Search,TextArea } = Input;

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#ccc',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
  width:'100%'
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
  zIndex: 9
};
const onSearch = (value) => console.log(value);
const Dashboard = () => (
    <Layout className='layout-dashboard'>
        <Layout>
          <Content style={contentStyle}></Content>
          <Sider className="sider-primary ant-layout-sider-primary">
          < Search
          placeholder = "input search text"
          allowClear
          onSearch = {
            onSearch
          }
          style = {
            {
              width: 200,
            }
          }
      />
       
       
      <Input.Group size="large">
      <Col className="gutter-row" span={6}>
          <Col span={6}><Input  style={{
          maxWidth: '100%',
        }} placeholder="Basic usage" /></Col>
          <Col span={6}><Input  style={{
          maxWidth: '100%',
        }} placeholder="Basic usage" /></Col>
          <Col span={6}><Input  style={{
          maxWidth: '100%',
        }} placeholder="Basic usage" /></Col>
          <Col span={6}><Input  style={{
          maxWidth: '100%',
        }} placeholder="Basic usage" /></Col>
          <Col span={6}><Input  style={{
          maxWidth: '100%',
        }} placeholder="Basic usage" /></Col>
      </Col>
    </Input.Group>
      <Input.Group>
      <nav>
  <a class="button top" href="#"><i class="icon-play"></i></a>
  <a class="button right" href="#"><i class="icon-forward"></i></a>
  <a class="button left" href="#"><i class="icon-backward"></i></a>
  <a class="button bottom" href="#"><i class="icon-pause"></i></a>
  <a class="center-button" href="#"><i class="icon-stop"></i></a>
</nav>
      </Input.Group>
      <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <Button type="primary" block>
      Primary
    </Button>
    <Button block>Default</Button>
    
  </Space>
          </Sider>
        </Layout>
        <Footer style={footerStyle} className="">
        <Row>
          <Col xs={24} md={12} lg={12}>
              <Row>
              <BorderOutlined />
<AppstoreOutlined />
<TableOutlined />
              </Row>
          </Col>
          <Col xs={24} md={12} lg={12}>
            trung tam cvs
          </Col>
        </Row>
        </Footer>
    </Layout>
);
export default Dashboard;