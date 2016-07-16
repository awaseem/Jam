import React from 'react';

function CodeBlock(props) {
  return (
    <pre><code>
      {props.children}
    </code></pre>
  );
}

CodeBlock.propTypes = {
  children: React.PropTypes.any.isRequired,
};

export default CodeBlock;
