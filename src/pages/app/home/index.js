import React from 'react';
import styles from './index.less';
import { connect } from 'dva';
import OrdinaryTable from '@/components/Table/index'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    const { travelList } = this.props.travelHome
    console.log(travelList)
    const columns = [
      {
        title: '班次',
        dataIndex: 'busCardNo',
        key: 'name',
        render: text => <a href="javascript:;">{text}</a>,
      },
      {
        title: '司机',
        dataIndex: 'driverName',
        key: 'age',
      },
      {
        title: '起始站点',
        render: text => <div>{text.startStationTime} {text.startStationName}</div>,
      },
      {
        title: '删除',
        render: (text, record) => (
          <span>
            <a href="javascript:;">修改</a>
            <Divider type="vertical" />
            <a href="javascript:;">删除</a>
          </span>
        ),
      },
    ];

    return (
      <div className={styles.noticePage}>
        <OrdinaryTable columns={columns} data={travelList.TSY0}  />
      </div>
    );
  }
}

export default connect(({ loading, travelHome }) => ({loading, travelHome}))(Home);
