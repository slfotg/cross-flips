import React, {
  useMemo,
  useReducer,
} from "react";
import Head from "next/head";

import _ from "lodash";

import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Select from "@material-ui/core/Select";

import CrossFlips, { reducer, initialState, Action, CrossFlipContext, Mode } from "../components/CrossFlips";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState());

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  const sizeOptions: number[] = Array.from({ length: 50 }, (_, i) => i + 1);

  return (
    <div className={styles.container}>
      <Head>
        <title>Cross Flips</title>
        <meta
          name="description"
          content="An experiment for Project Euler Problem 331"
        />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Cross Flips</h1>
        <CrossFlipContext.Provider value={contextValue}>
          <div>
            <CrossFlips />
          </div>
          <div>
            <FormControl component="fieldset">
              <FormLabel component="legend">Mode</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="mode"
                value={state.mode}
                onChange={(event) => dispatch({ type: Action.SET_MODE, payload: event.target.value })}
              >
                <FormControlLabel
                  value={Mode.PLAY}
                  control={<Radio color="primary" />}
                  label="Play"
                />
                <FormControlLabel
                  value={Mode.EDIT}
                  control={<Radio color="primary" />}
                  label="Edit"
                />
              </RadioGroup>
            </FormControl>
            <Button onClick={() => dispatch({ type: Action.RESET })}>Reset</Button>
            <Button onClick={() => dispatch({ type: Action.INVERT })}>Invert</Button>
            <Button onClick={() => dispatch({ type: Action.INIT_DATA })}>Init Euler Data</Button>
            <Select
              id="select-size"
              label="Size"
              value={state.size}
              onChange={(event) => dispatch({ type: Action.SET_SIZE, payload: event.target.value })}
            >
              {sizeOptions.map((n, index) => {
                return (
                  <MenuItem key={index} value={n}>
                    {n}
                  </MenuItem>
                );
              })}
            </Select>
          </div>
        </CrossFlipContext.Provider>
      </main>
    </div>
  );
}
