import React, { useState } from "react";
import Head from "next/head";

import _ from "lodash";

import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import CrossFlips from "../components/CrossFlips";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [size, setSize] = useState(5);
  const [mode, setMode] = useState("play");
  const [flipped, setFlipped] = useState(
    Array.from({ length: size }, (e) => Array(size).fill(false))
  );

  const onFlip = (row, col) => {
    var updatedFlipped = _.cloneDeep(flipped);
    updatedFlipped[row][col] = !updatedFlipped[row][col];
    if (mode === "play") {
      for (var i = 0; i < size; i += 1) {
        updatedFlipped[row][i] = !updatedFlipped[row][i];
        updatedFlipped[i][col] = !updatedFlipped[i][col];
      }
    }
    setFlipped(updatedFlipped);
  };

  const onModeChange = (event) => {
    setMode(event.target.value);
  };

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
        <div>
          <CrossFlips
            size={size}
            mode={mode}
            flipped={flipped}
            onFlip={onFlip}
          />
        </div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Mode</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="mode"
            value={mode}
            onChange={onModeChange}
          >
            <FormControlLabel value="play" control={<Radio color="primary" />} label="Play" />
            <FormControlLabel value="edit" control={<Radio color="primary" />} label="Edit" />
          </RadioGroup>
        </FormControl>
      </main>
    </div>
  );
}
