import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import LensIcon from "@material-ui/icons/Lens";
import LensOutlinedIcon from "@material-ui/icons/LensOutlined";

import _ from "lodash";

import { makeStyles } from "@material-ui/styles";
import styles from "./CrossFlips.module.css";
import { Action, CrossFlipContext, Mode } from "./State";

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

const CrossFlips = () => {
  const { state, dispatch } = useContext(CrossFlipContext);

  const handleClick = (row: number, col: number) => {
    if (state.mode === Mode.PLAY) {
      dispatch({ type: Action.CROSS_FLIP, payload: { row, col } });
    } else {
      dispatch({ type: Action.FLIP, payload: { row, col } });
    }
  };

  const Cell = ({ row, col }) => {
    const classes = useClasses();
    return (
      <div className={styles.cell}>
        <IconButton
          size="small"
          onClick={(event) => { handleClick(row, col) }}
          className={classes.iconContainer}
        >
          {state.flipped[row][col] ? (
            <LensIcon className={classes.icon} />
          ) : (
            <LensOutlinedIcon className={classes.icon} />
          )}
        </IconButton>
      </div>
    );
  };

  const Row = (row: number) => {
    var cells = [];
    for (var i = 0; i < state.size; i += 1) {
      const col = i;
      cells.push(
        <Cell
          key={col}
          row={row}
          col={col}
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
    for (var i = state.size - 1; i >= 0; i -= 1) {
      rows.push(Row(i));
    }
    return <div className={styles.grid}>{rows}</div>;
  };
  return Grid();
};

export default CrossFlips;
