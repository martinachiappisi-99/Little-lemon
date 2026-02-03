import { initializeTimes, updateTimes } from "./Main";

// Mock della funzione fetchAPI globale
beforeAll(() => {
  window.fetchAPI = jest.fn(() => ["17:00", "18:00", "19:00", "20:00", "21:00"]);
});

describe("Booking times functions", () => {
  test("initializeTimes returns times from API", async () => {
    const times = await initializeTimes();
    expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
    expect(window.fetchAPI).toHaveBeenCalled();
  });

  test("updateTimes returns the same times if action type is unknown", () => {
    const currentTimes = ["17:00", "18:00"];
    const newTimes = updateTimes(currentTimes, { type: "UNKNOWN_ACTION" });
    expect(newTimes).toEqual(currentTimes);
  });

  test("updateTimes returns new times on UPDATE_TIMES action", () => {
    const currentTimes = ["17:00", "18:00"];
    const actionTimes = ["19:00", "20:00"];
    const newTimes = updateTimes(currentTimes, { type: "UPDATE_TIMES", times: actionTimes });
    expect(newTimes).toEqual(actionTimes);
  });
});
