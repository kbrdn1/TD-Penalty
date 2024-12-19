import {
  addHistory,
  checkWinner,
  displayHistory,
  initialScore,
  randomShot,
  updateScore,
} from "../functional-core/functions";
import type { History, Score } from "../functional-core/types";

const simulatePenaltyShootout = (): void => {
  let score: Score = initialScore;
  let history: History = [];
  let shots = 0;
  let winner: string | null = null;

  while (!winner) {
    const team = shots % 2 === 0 ? "A" : "B";
    const result = randomShot();

    score = updateScore(score, team, result);
    history = addHistory(history, shots + 1, score, result, team);
    winner = checkWinner(score, shots + 1);

    shots++;
  }

  displayHistory(history);
  console.log(`Victoire : ${winner} (Score : ${score.teamA}/${score.teamB})`);
};

simulatePenaltyShootout();
