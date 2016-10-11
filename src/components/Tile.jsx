import React, {Component, PropTypes} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';

class Tile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {x, y, id, value} = this.props;
    const tileClassNm = classNames(
      'tile': true,
      `cell-${x}-${y}`: true //Used to move tile on the grid
    );

    return (
      <ReactCSSTransitionGroup
        transitionName={'tile'}
        transitionEnterTimeout={0}
        transitionLeaveTimeout={0}
        transitionAppear={true}
        transitionAppearTimeout={50}>
          <div className={tileClassNm} key={id} >
            {value}
          </div>
      </ReactCSSTransitionGroup>
    );
  }
}

Tile.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}

export default Tile;
