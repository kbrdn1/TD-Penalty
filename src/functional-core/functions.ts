import type { History, Score } from "./types";

export const initialScore: Score = { teamA: 0, teamB: 0 };
export const randomShot = (): boolean => Math.random() < 0.5;

