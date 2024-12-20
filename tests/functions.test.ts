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

  test("addHistory devrait ajouter une nouvelle entrée à l'historique", () => {
    let history: History = [];
    const score: Score = { teamA: 1, teamB: 0 };
    
    history = addHistory(history, 1, score, true, "A");
    expect(history).toEqual([{ shot: 1, score, result: "Équipe A : +1" }]);
  });

  test("checkWinner devrait retourner le gagnant correctement", () => {
    let score: Score = { teamA: 3, teamB: 2 };
    expect(checkWinner(score, 5)).toBe("Équipe A");
    
    score = { teamA: 2, teamB: 3 };
    expect(checkWinner(score, 5)).toBe("Équipe B");
    
    score = { teamA: 2, teamB: 2 };
    expect(checkWinner(score, 5)).toBeNull();
  });
});
