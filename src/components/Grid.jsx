import React, { Component, PropTypes } from 'react';
import { range } from 'lodash';

class Grid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {size} = this.props;
    const cells = range(Math.pow(size, 2)); //Returns an array from 0 to (size*size-1)
    const cellsComp = cells.map(index => {return <column key={index} />});

    return (
      <container id='grid'>
        {cellsComp}
      </container>
    );
  }
}

Grid.propTypes = {
  size: PropTypes.number.isRequired,
}

Grid.defaultProps = {
  size: 4
}

export default Grid;
