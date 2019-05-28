import React from 'react';
import { Table } from 'antd';


const OrdinaryTable = ({columns, data}) => {
  return (
    <Table columns={columns} dataSource={data} />

  );
};

export default OrdinaryTable;
