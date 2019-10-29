import React, { Fragment, useState } from 'react';
import './App.css';


const CELLS_COUNT = 16;
const CELLS = new Array(CELLS_COUNT).fill(0).reduce(
  (memo, _, index) => ({
    ...memo,
    [index]: {
      id: index,
      type: (index + 1) % 2 > 0 ? 'red' : 'black',
      isOpen: false,
    },
  }),
  {},
);

const Cell = ({ id, type, isOpen, toggleHandler, block }) => (
  <div
    className={`Cell ${type} ${isOpen ? 'open' : ''}`}
    onClick={() => !block && toggleHandler(id)}
  />
);

const Game = () => {
  const initialState = { cells: CELLS, openedCell: null, blockCells: {} };
  const [{ cells, openedCell, blockCells }, setState] = useState(initialState);
  const startNewGame = () => setState(initialState);
  
  const toggleCells = (ids, cells, withBlock = false) => ({
    ...cells,
    ...ids.reduce(
      (memo, id) => ({
        ...memo,
        [id]: {
          ...cells[id],
          isOpen: !cells[id].isOpen,
          block: withBlock
        },
      }),
      {},
    ),
  });
  
  const checkCell = (id, openedCell, blockCells, cells) => {
    let newCells, newOpenedCell, newBlockCells = blockCells;

    const { id: checkingId, type: checkingType } = cells[id];
    if (openedCell !== null) {
      if (openedCell === checkingId) {
        newCells = toggleCells([checkingId], cells);
        newOpenedCell = null
      } else {
        const { id: currentId, type: currentType } = cells[openedCell];
        if (currentType === checkingType) {
          newCells = toggleCells([checkingId], cells, true);
          newOpenedCell = null;
          newBlockCells = { ...blockCells, [checkingId]: true, [currentId]: true }
        } else {
          newCells = toggleCells([currentId], cells);
          newOpenedCell = null;
        }
      }
    } else {
      newCells = toggleCells([checkingId], cells);
      newOpenedCell = checkingId;
    }
    
    setState({
      cells: newCells,
      openedCell: newOpenedCell,
      blockCells: newBlockCells,
    });
  };
  
  const isFinish = blockCells => Object.keys(blockCells).length === CELLS_COUNT;
  const isDirty = blockCells => Object.keys(blockCells).length > 0;
  
  return (
    <Fragment>
      <div className="Game">
        {Object.values(cells).map(cell => (
          <Cell
            key={cell.id}
            {...cell}
            block={!!blockCells[cell.id]}
            toggleHandler={(id) => checkCell(id, openedCell, blockCells, cells)}
          />)
        )}
      </div>
      <div className="Actions">
        <button onClick={startNewGame} disabled={!isFinish(blockCells)}>New game</button>
        <button onClick={startNewGame} disabled={!isDirty(blockCells) || isFinish(blockCells)}>Clear</button>
      </div>
    </Fragment>
  );
};

const App = () => {
  return (
    <div className="App">
      <Game/>
    </div>
  );
};

export default App;
