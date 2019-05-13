import React from '_react@16.8.6@react';
import styles from './index.module.scss';

const LoginIntro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>学生管理系统</div>
        <p className={styles.description}>管控一体化的整合式服务平台</p>
        <p className={styles.description}>一起解构数字世界，碰撞科技创新思想</p>
      </div>
    </div>
  );
};

export default LoginIntro;
