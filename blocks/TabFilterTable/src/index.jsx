import React, { Component } from 'react';
import { Tab, DatePicker } from '@alifd/next';
import IceContainer from '@icedesign/container';
import Track from './Track';
import Scheme from './Scheme';
import './index.modules.scss'

const TabPane = Tab.Item;

const tabs = [
  { tab: '埋点维度', key: 'track', content: <Track /> },
  { tab: '方案维度', key: 'scheme', content: <Scheme /> },
];

function handleChange(key) {
  console.log('change', key);
}

function handleClick(key) {
  console.log('click', key);
}

export default class TabFilterTable extends Component {
  static displayName = 'TabFilterTable';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderTabExtraContent = () => {
    return <DatePicker size="large" className="datapic" />;
  };

  render() {
    return (
      <IceContainer className="stylescontainer1">
        <Tab
          onChange={handleChange}
          extra={this.renderTabExtraContent()}
        >
          {tabs.map((item) => {
            return (
              <TabPane key={item.key} title={item.tab} onClick={handleClick}>
                {item.content}
              </TabPane>
            );
          })}
        </Tab>
      </IceContainer>
    );
  }
}
