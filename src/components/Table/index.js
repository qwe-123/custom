import React from 'react';
import { Table } from 'antd';


const OrdinaryTable = ({columns, data, rowKey, pagination, bordered }) => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey={rowKey || 'index'}
      pagination={pagination}
      bordered={bordered}
    />

  );
};

export default OrdinaryTable;
