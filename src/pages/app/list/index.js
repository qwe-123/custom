import React from 'react';
import styles from './index.less';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className={styles.noticePage}>
        这是第一个列表页面
      </div>
    );
  }
}

export default List;
