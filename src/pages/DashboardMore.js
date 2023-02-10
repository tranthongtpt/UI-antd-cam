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
  backgroundColor: '#f5f5f5',
  zIndex: 9
};
const style = {
    background: '#fff',
    height:'100%',
    border:'4px solid #faad14'
  };
const onSearch = (value) => console.log(value);
const Dashboard = () => (
    <Layout className='layout-dashboard'>
        <Layout>
          <Content style={contentStyle}>
            <Row gutter={[8, 8]} style={{height:'100%',rowGap:'7px'}}>
                <Col className="gutter-row pr-0" span={8}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row pr-0" span={8}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row pr-0" span={8}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row pr-0" span={8}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row pr-0" span={8}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row pr-0" span={8}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row pr-0" span={8}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row pr-0" span={8}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row pr-0" span={8}>
                    <div style={style}>col-6</div>
                </Col>
            </Row>
          </Content>
          <Sider className="sider-primary ant-layout-sider-primary">
            < Search
            placeholder = "input search text"
            allowClear
            onSearch = {
              onSearch
            }
              style = {{width: '100%'}}
            />
            <Input.Group size="large" className='input-group'>
              <Col className="gutter-col" span={6} >
                  <Col span={6} className="gutter-col p-10">
                    <Input  style={{maxWidth: '100%'}} placeholder="Basic usage" />
                  </Col>
                  <Col span={6} className="gutter-col  p-10">
                    <Input  style={{maxWidth: '100%'}} placeholder="Basic usage" />
                  </Col>
                  <Col span={6} className="gutter-col  p-10">
                    <Input  style={{maxWidth: '100%'}} placeholder="Basic usage" />
                  </Col>
                  <Col span={6} className="gutter-col  p-10">
                    <Input  style={{maxWidth: '100%'}} placeholder="Basic usage" />
                  </Col>
                  <Col span={6} className="gutter-col  p-10">
                    <Input  style={{maxWidth: '100%'}} placeholder="Basic usage" />
                  </Col>
              </Col>
          </Input.Group>
          <Input.Group className='t-100'>
            <nav>
              <a class="button top" href="#"><i class="icon-play"></i></a>
              <a class="button right" href="#"><i class="icon-forward"></i></a>
              <a class="button left" href="#"><i class="icon-backward"></i></a>
              <a class="button bottom" href="#"><i class="icon-pause"></i></a>
              <a class="center-button" href="#"><i class="icon-stop"></i></a>
            </nav>
          </Input.Group>
          <Input.Group className='t-200'>
            <Space
              direction="vertical"
              style={{
                width: '100%',
              }}
            >
              <Button type="primary" block>
                Nuts
              </Button>
              <Button block>Nuts</Button>
            </Space>
          </Input.Group>
        </Sider>
      </Layout>
        <Footer style={footerStyle} className="">
          <Row>
            <Col xs={24} md={12} lg={12}>
              <Space
                direction="horizontal"
                size="middle"
                style={{
                  display: 'flex',
                }}
              >
                <a class="icon-footer" href="#"><BorderOutlined style={{fontSize:'25px'}}/></a>
                <a class="icon-footer" href="#"><AppstoreOutlined style={{fontSize:'25px'}}/></a>
                <a class="icon-footer" href="#"><TableOutlined style={{fontSize:'25px'}}/></a>       
              </Space>  
            </Col>
            <Col xs={24} md={12} lg={12} style={{color:'#000'}}>
            <Space
                direction="horizontal"
                size="middle"
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end'
                }}
                >
                      @Nocopyright cvs
                </Space>
         
            </Col>
          </Row>
        </Footer>
    </Layout>
);
export default Dashboard;