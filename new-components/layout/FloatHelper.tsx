import { ReadOutlined, SmileOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import React from 'react';

const FloatHelper: React.FC = () => {
  return (
    <FloatButton.Group trigger='hover' icon={<SmileOutlined />}>
      <FloatButton icon={<ReadOutlined />} href='http://docs.gptdb.cn' target='_blank' tooltip='Doucuments' />
    </FloatButton.Group>
  );
};
export default FloatHelper;
