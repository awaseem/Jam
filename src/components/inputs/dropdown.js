import React from 'react';
import styles from '../../css/skeleton.css';

function Dropdown(props) {
  const options = props.options.map((x, i) => <option key={i} value={x}>{x}</option>);
  return (
    <div>
      <label>{props.label}</label>
      <select
        onChange={(e) => props.change(e.target.value)}
        className={`${styles['u-full-width']} ${styles.select}`}
        name={props.name}
        required={props.required}
        disabled={props.disabled}
      >
        {options}
      </select>
    </div>
  );
}

Dropdown.propTypes = {
  label: React.PropTypes.string,
  options: React.PropTypes.array,
  change: React.PropTypes.func.isRequired,
  disabled: React.PropTypes.bool,
  name: React.PropTypes.string,
  required: React.PropTypes.bool,
};

export default Dropdown;
