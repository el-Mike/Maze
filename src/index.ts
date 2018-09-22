import './styles.css';

import { Maze } from './maze/Maze';

window.onload = () => {
  const maze = new Maze({
    parentId: 'maze-container',
    width: 1000,
    height: 600,
  });
  
  maze.startGame();  
};
