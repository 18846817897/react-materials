import React from 'react';
import styles from './index.module.scss';

export default () => {
  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        <a href="#" className={styles.link}>
          帮助
        </a>
        <a href="#" className={styles.link}>
          隐私
        </a>
        <a href="#" className={styles.sty}>
          条款
        </a>
      </div>
      <div style={styles.copyright}>阿里巴巴集团 © 2018 版权所有</div>
    </div>
  );
};
