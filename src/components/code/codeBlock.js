import React from 'react';
import Code from './code';

function CodeBlock(props) {
  return (
    <pre><Code>
      {props.children}
    </Code></pre>
  );
}

CodeBlock.propTypes = {
  children: React.PropTypes.any.isRequired,
};

export default CodeBlock;
