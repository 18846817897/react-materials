import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export default class Logo extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Link to="/" className={styles.logoText}>
          算法模型管理系统
        </Link>
      </div>
    );
  }
}