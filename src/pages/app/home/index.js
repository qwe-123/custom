import React from 'react';
import styles from './index.less';
import { connect } from 'dva';
import { Divider } from 'antd'
import OrdinaryTable from '@/components/Table/index'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    const { travelList } = this.props.travelHome
    const columns = [
      {
        title: '班次',
        dataIndex: 'busCardNo',
        render: text => <a href="javascript:;">{text}</a>,
      },
      {
        title: '司机',
        dataIndex: 'driverName',
      },
      {
        title: '起始站点',
        render: text => <div>{text.startStationTime} {text.startStationName}</div>,
      },
      {
        title: '操作',
        render: (text, record) => (
          <span>
            <a href="javascript:;">修改</a>
            <Divider type="vertical" />
            <a href="javascript:;">删除</a>
          </span>
        ),
      },
    ];
    const pagination = {
      pageSize: 10,
    }

    return (
      <div className={styles.homePage}>
        <OrdinaryTable columns={columns} data={travelList.TSY0} rowKey={'busCardNo'} pagination={pagination} bordered={true} />
      </div>
    );
  }
}

export default connect(({ loading, travelHome }) => ({loading, travelHome}))(Home);
