import { identifyYoungUser } from "./task8.3";

describe("identifyYoungUser", () => {
  it("returns 'The First User is Younger' ", () => {
    expect(identifyYoungUser("23.10.2000", "12.03.1987")).toBe(
      "The First User is Younger"
    );
  });
  it("returns 'The Second User is Younger' ", () => {
    expect(identifyYoungUser("20.06.1975", "28.06.1975")).toBe(
      "The Second User is Younger"
    );
  });
});
