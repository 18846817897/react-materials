import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@alifd/next';
import styles from './index.module.scss';

const Index = ({ title, style, ...props }) => {
  return (
    <div style={{...style }} className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      {props.buttonText ? (
        <Button type="primary" size="large">
          {props.buttonText}
        </Button>
      ) : null}
    </div>
  );
};



Index.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
};

Index.defaultProps = {
  buttonText: '',
};

export default Index;