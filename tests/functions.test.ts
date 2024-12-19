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

  test("updateScore devrait mettre à jour le score correctement", () => {
    let score: Score = { teamA: 0, teamB: 0 };
    
    score = updateScore(score, "A", true);
    expect(score).toEqual({ teamA: 1, teamB: 0 });
    
    score = updateScore(score, "B", false);
    expect(score).toEqual({ teamA: 1, teamB: 0 });
  });
});
