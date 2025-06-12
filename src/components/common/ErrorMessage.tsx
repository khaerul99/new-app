import React from 'react';
import { Alert } from 'antd';
interface Props { message: string; }
const ErrorMessage: React.FC<Props> = ({ message }) => (
  <Alert message="Error" description={message} type="error" showIcon />
);
export default ErrorMessage;