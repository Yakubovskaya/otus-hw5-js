import { createAdminParams } from "./task4";

describe("createAdminParams", () => {
  it("returns Admin Parameters - John, 25, admin", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "25");
    expect(createAdminParams()).toBe("John, 25, admin");
  });
});
