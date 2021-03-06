import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from 'actions'
import Game from 'components/Game'

const mapStateToProps = (state) => {
  return {
    score: state.game.get('score'),
    result: state.game.get('result'),
    grid: state.game.get('grid'),
    tiles: state.game.get('tiles'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

const Root = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)

export default Root
