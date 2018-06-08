import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Button.css';

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func,
  tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Button.defaultProps = {
  className: undefined,
  children: undefined,
  color: 'primary',
  onClick: undefined,
  tabIndex: 0,
};

function Button(props) {
  return (
    <button
      className={classNames(styles.button, props.className, {
        [styles.primary]: props.color === 'primary',
        [styles.secondary]: props.color === 'secondary',
      })}
      onClick={props.onClick}
      tabIndex={props.tabIndex}
    >
      {props.children}
    </button>
  );
}

export default Button;
