import React, { Fragment, useState } from 'react';
import './App.css';


const CELLS_COUNT = 16;
const CELLS = new Array(CELLS_COUNT).fill(0).reduce(
  (memo, _, index) => ({
    ...memo,
    [index]: {
      id: index,
      type: (index + 1) % 2 > 0 ? 'red' : 'black',
    },
  }),
  {},
);

const toggleCells = (ids, prev) => {
  const next = prev;
  ids.forEach(
    (id) => {
      next.has(id) ? next.delete(id) : next.add(id);
    }
  );
  return next;
};

const updateBlockCells = (ids, prev) => {
  const next = prev;
  ids.forEach(
    (id) => {
      next.add(id);
    }
  );
  return next;
};

const isOpen = (id, { openedCells }) => openedCells.has(id);
const isBlock = (id, { blockCells }) => blockCells.has(id);
const isFinish = ({ blockCells }) => blockCells.size === CELLS_COUNT;
const isDirty = ({ blockCells }) => blockCells.size > 0;

const checkingCell = (id, { checkCell, openedCells, blockCells, cells }, setState) => {
  let newCheckCell, newOpenedCells, newBlockCells = blockCells;
  
  const { id: checkingId, type: checkingType } = cells[id];
  if (checkCell !== null) {
    if (checkCell === checkingId) {
      newOpenedCells = toggleCells([checkingId], openedCells);
      newCheckCell = null
    } else {
      const { id: currentId, type: currentType } = cells[checkCell];
      if (currentType === checkingType) {
        newOpenedCells = toggleCells([checkingId], openedCells);
        newCheckCell = null;
        newBlockCells = updateBlockCells([checkingId, currentId], blockCells)
      } else {
        newOpenedCells = toggleCells([currentId], openedCells);
        newCheckCell = null;
      }
    }
  } else {
    newOpenedCells = toggleCells([checkingId], openedCells);
    newCheckCell = checkingId;
  }
  
  setState({
    cells,
    checkCell: newCheckCell,
    openedCells: newOpenedCells,
    blockCells: newBlockCells,
  });
};

const Cell = ({ id, type, isOpen, onClick }) => (
  <div
    className={`Cell ${type} ${isOpen ? 'open' : ''}`}
    onClick={() => onClick(id)}
  />
);

const Game = () => {
  const initialState = {
    cells: CELLS,
    checkCell: null,
    openedCells: new Set(),
    blockCells: new Set()
  };
  
  const [state, setState] = useState(initialState);
  const startNewGame = () => setState(initialState);
  
  const { cells } = state;
  return (
    <Fragment>
      <div className="Game">
        {Object.values(cells).map(cell => (
          <Cell
            key={cell.id}
            {...cell}
            isOpen={isOpen(cell.id, state)}
            onClick={id => !isBlock(id, state) && checkingCell(id, state, setState)}
          />)
        )}
      </div>
      <div className="Actions">
        <button onClick={startNewGame} disabled={!isFinish(state)}>New game</button>
        <button onClick={startNewGame} disabled={!isDirty(state) || isFinish(state)}>Clear</button>
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
