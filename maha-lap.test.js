const MathLap = require("./maha-lap");

describe("tast Maha-lap", () => {
  test("tast Tamnai with day", () => {
    const result = MathLap.tamnaiWithDay("จันทร์");
    expect(result).toEqual(2);
  });
});
