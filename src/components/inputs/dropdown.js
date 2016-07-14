import React from 'react';

function Dropdown(props) {
  const options = props.options.map((x, i) => <option key={i} value={x}>{x}</option>);
  return (
    <div>
      <label>{props.label}</label>
      <select className="u-full-width">
        {options}
      </select>
    </div>
  );
}

Dropdown.propTypes = {
  label: React.PropTypes.string,
  options: React.PropTypes.array,
};

export default Dropdown;
