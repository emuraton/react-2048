import React, { Component, PropTypes } from 'react';
import Grid from './Grid';
import Tile from './Tile';
import { DIRECTIONS } from '../constants';

let queue = [];

class Game extends Component {
  constructor(props) {
    super(props);
  }

  queue = []

  componentDidMount() {
    document.addEventListener('keydown', this._handleKeyDown, false);
  }

  _handleKeyDown = (e) => {
    const direction = DIRECTIONS[e.keyCode];
    if(direction){
      this.queue.push(direction);
      this._execute();
    }
  }

  _execute = async function initalExecute() {
    if(this.queue.length > 0){
      await this.props.actions.moveTiles(this.queue[0]);
      this.queue.shift();
      if (this.queue.length > 0){
        this._execute();
      }
    }
  }

  render() {
    const {score, result, grid, tiles} = this.props;

    const tilesComp = tiles.map(tile => {
      return <Tile key={tile.get('id')} {...tile.toJS()} />;
    });

    return (
      <main>
        <div id='score'>
          <h3>Score: {score}</h3>
        </div>
        <button onClick={this._handleNewGame}>New Game</button>
        <button onClick={this._handleSaveGame}>Save Game</button>
        <div id='wrapper'>
          <div id='tiles'>
            {tilesComp}
          </div>
          <Grid size={grid.size}/>
        </div>
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
  grid: PropTypes.object.isRequired,
  result: PropTypes.number,
}

export default Game;
