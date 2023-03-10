import React from 'react';
    import { Layout, Space, Col, Divider, Row,Input ,Button,FloatButton  ,Tooltip  } from 'antd';
    import { BorderOutlined,AppstoreOutlined,TableOutlined,CommentOutlined, EyeOutlined  } from "@ant-design/icons";
    import DashboardWrapper from './DashboardWrapper';
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
  backgroundColor: '#fff',
  border: '2px solid rgba(218, 196, 4, 0.897)'
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
const onSearch = (value) => console.log(value);
const Dashboard = () => (
  <DashboardWrapper>
     <div></div>
  </DashboardWrapper>
);
export default Dashboard;