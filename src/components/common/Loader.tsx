import React from 'react';
import { Spin } from 'antd';
const Loader: React.FC = () => (
  <div style={{ textAlign: 'center', padding: '50px' }}>
    <Spin size="large" />
  </div>
);
export default Loader;