import React, { Component } from 'react';
import { Button } from '@alifd/next';
import './index.modules.scss'

export default class ProductIntro extends Component {
  static displayName = 'ProductIntro';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="styleswrapper">
        <div className="stylesproductContent">
          <div className="stylesproductInfo">
            <h3 className="stylestitle">Iceworks</h3>
            <div className="stylestitleLine">
              <div className="stylestitleHighlightLine" />
            </div>
            <p className="stylesdesc">
              丰富模板一键创建，提供多种垂直领域模板，快速创建项目，支持风格切换，满足个性化需求；轻松操作页面管理，海量物料自由搭配，页面组合可视化操作更得心应手；开发调试一体化，集成运行环境零配置运行，开箱即用。
            </p>
            <Button
              component="a"
              href="#"
              target="_blank"
              className="stylesextraButton"
            >
              了解更多 &gt;
            </Button>
          </div>
          <div>
            <img
              src={require('./images/TB1SbvpgQyWBuNjy0FpXXassXXa-1392-1054.png')}
              alt=""
              className="proimg"
            />
          </div>
        </div>
        <div className="stylesclipBackground" />
      </div>
    );
  }
}