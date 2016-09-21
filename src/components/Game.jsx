import React, {Component, PropTypes} from "react";

class Game extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {score, result} = this.props;


    return (
      <main>
        <div id="score">
          <h3>Score: {score}</h3>
        </div>
        <button onClick={this._handleNewGame}>New Game</button>
        <button onClick={this._handleSaveGame}>Save Game</button>
      </main>
    );
  }

  /**
   * Start a new game.
   */
  _handleNewGame = () => {
    this.actions.initGame();
  }

  /**
   * Save the current game`s state.
   */
  _handleSaveGame = () => {
    this.actions.saveGame();
  }
}

Game.propTypes = {
  score: PropTypes.number.isRequired,
  result: PropTypes.number,
}

export default Game;
