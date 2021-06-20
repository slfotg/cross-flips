import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import LensIcon from "@material-ui/icons/Lens";
import LensOutlinedIcon from "@material-ui/icons/LensOutlined";

import clsx from 'clsx';
import _ from "lodash";

import { makeStyles } from "@material-ui/styles";
import styles from "./CrossFlips.module.css";
import { useEffect } from "react";

const CrossFlips = ({ size, mode, flipped, onFlip }) => {
  const [cellStyles, setCellStyles] = useState(Array.from({length: size}, e => Array(size).fill(styles.cell)));

  // reset the board if the size changes
  useEffect(
    () => {
      setCellStyles(Array.from({length: size}, e => Array(size).fill(styles.cell)));
    },
    [size],
  );

  const cellClick = (row, col) => {
    if (mode === "play") {
      highlightCells(row, col, true);
      window.setTimeout(() => {
        onFlip(row, col);
        highlightCells(row, col, false);
      }, 150);
    } else {
      onFlip(row, col);
    }
  };

  const highlightCells = (row, col, highlight) => {
    var updatedCellStyles = _.cloneDeep(cellStyles);
    var cellStyle = clsx(styles.cell, highlight && styles.highlightedCell);
    for (var i = 0; i < size; i += 1) {
      updatedCellStyles[row][i] = cellStyle;
      updatedCellStyles[i][col] = cellStyle;
    }
    setCellStyles(updatedCellStyles);
  };

  const Row = (row) => {
    var cells = [];
    for (var i = 0; i < size; i += 1) {
      const col = i;
      cells.push(
        <Cell
          key={col}
          onClick={() => cellClick(row, col)}
          flipped={flipped[row][col]}
          cellStyle={cellStyles[row][col]}
        />
      );
    }
    return (
      <div key={row} className={styles.row}>
        {cells}
      </div>
    );
  };

  const Grid = () => {
    var rows = [];
    for (var i = size - 1; i >= 0; i -= 1) {
      rows.push(Row(i));
    }
    return <div className={styles.grid}>{rows}</div>;
  };
  return Grid();
};

const useClasses = makeStyles((theme) => ({
  iconContainer: {
    "&:hover $icon": {
      color: "#666",
    },
  },
  icon: {
    color: "#333",
  },
}));

const Cell = ({ onClick, flipped, cellStyle }) => {
  const classes = useClasses();
  return (
    <div className={cellStyle}>
      <IconButton
        size="small"
        onClick={onClick}
        className={classes.iconContainer}
      >
        {flipped ? (
          <LensIcon className={classes.icon} />
        ) : (
          <LensOutlinedIcon className={classes.icon} />
        )}
      </IconButton>
    </div>
  );
};

export default CrossFlips;
