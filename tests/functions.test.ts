import { describe, expect, test } from "bun:test";
import {
  addHistory,
  checkWinner,
  initialScore,
  randomShot,
  updateScore,
} from "../src/functional-core/functions";
import type { History, Score } from "../src/functional-core/types";

describe("Séance de Tirs au But", () => {
  test("initialScore devrait être 0/0", () => {
    expect(initialScore).toEqual({ teamA: 0, teamB: 0 });
  });

  test("randomShot devrait retourner un booléen", () => {
    expect(typeof randomShot()).toBe("boolean");
  });

});
