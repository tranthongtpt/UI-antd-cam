import React from 'react';
    import { Layout, Space, Col, Divider, Row  } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
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
};
const Dashboard = () => (
    <Layout className='layout-dashboard'>
        <Layout>
          <Content style={contentStyle}>Content</Content>
        </Layout>
        <Layout>
          <Content style={contentStyle}>Content</Content>
        </Layout>
    </Layout>
);
export default Dashboard;