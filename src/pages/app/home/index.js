import React from 'react';
import styles from './index.less';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className={styles.noticePage}>
        这是第一个页面
      </div>
    );
  }
}

export default Home;
