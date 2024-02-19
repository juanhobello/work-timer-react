import { Cycle } from "./reducer";

export enum ActionTypes {
  ADD_CYCLE = "ADD_CYCLE",
  INTERRUPED_CYCLE = "INTERRUPED_CYCLE",
  FINISHED_CYCLE = "FINISHED_CYCLE",
}

export function markCurrentCycleAsFinishedAction() {
  return { type: ActionTypes.FINISHED_CYCLE };
}

export function createNewCycleAction(newCycle: Cycle) {
  return { type: ActionTypes.ADD_CYCLE, payload: { newCycle } };
}

export function interruptCurrrentCycleAction() {
  return { type: ActionTypes.INTERRUPED_CYCLE };
}
