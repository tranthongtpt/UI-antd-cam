import React from 'react';
    import { Layout, Space, Col, Divider, Row,Input ,Button } from 'antd';
import DashboardWrapper from './DashboardWrapper';
const style = {
    background: '#fff',
    height:'100%',
    border:'4px solid #faad14'
  };
const Dashboard = () => (
   <DashboardWrapper>
        <div class="grid-container-more">
            <div class="grid-item zoom eff9-z">screen 1</div>
            <div class="grid-item zoom eff9-z1">screen 2</div>
            <div class="grid-item zoom eff9-z2">screen 3</div>
            <div class="grid-item zoom eff9-z3">screen 4</div>
            <div class="grid-item zoom eff9-z4">screen 5</div>
            <div class="grid-item zoom eff9-z5">screen 6</div>
            <div class="grid-item zoom eff9-z6">screen 7</div>
            <div class="grid-item zoom eff9-z7">screen 8</div>
            <div class="grid-item zoom eff9-z8">screen 9</div>
        </div>
   </DashboardWrapper>
);
export default Dashboard;