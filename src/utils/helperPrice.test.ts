import { formatPrice, removeSpace } from "./helperPrice";
import "@testing-library/jest-dom";

describe("check function removeSpace", () => {
  it("space in center should be remove", async () => {
    expect(removeSpace("11 11 11")).toBe("111111");
    expect(removeSpace("11   11   11")).toBe("111111");
    expect(removeSpace("1 1  1 1   1 1")).toBe("111111");
  });
  it("space in start should be remove", async () => {
    expect(removeSpace(" 111111")).toBe("111111");
    expect(removeSpace("  111111")).toBe("111111");
    expect(removeSpace("    111111")).toBe("111111");
  });
  it("space in the end should be remove", async () => {
    expect(removeSpace("111111 ")).toBe("111111");
    expect(removeSpace("111111  ")).toBe("111111");
    expect(removeSpace("111111   ")).toBe("111111");
  });
  it("tab in center should be remove", async () => {
    expect(removeSpace("11      11      11")).toBe("111111");
    expect(removeSpace("11  11 11")).toBe("111111");
    expect(removeSpace("1   1   1   1   1   1")).toBe("111111");
  });
  it("tab in start should be remove", async () => {
    expect(removeSpace("    111111")).toBe("111111");
    expect(removeSpace("        111111")).toBe("111111");
    expect(removeSpace("            111111")).toBe("111111");
  });
  it("tab in the end should be remove", async () => {
    expect(removeSpace("111111  ")).toBe("111111");
    expect(removeSpace("111111      ")).toBe("111111");
    expect(removeSpace("111111          ")).toBe("111111");
  });
});

describe("check function formatPrice", () => {
  it("if we send number smaller than 9999, we should return the same one", async () => {
    expect(formatPrice("1")).toBe("1");
    expect(formatPrice("11")).toBe("11");
    expect(formatPrice("111")).toBe("111");
    expect(formatPrice("9999")).toBe("9999");
    expect(formatPrice("5000")).toBe("5000");
  });
  it("if we send negative number bigger than 10000 and smaller than 1000000, we should return number with 1 space", async () => {
    expect(formatPrice("10000")).toHaveLength(6);
    expect(formatPrice("999999")).toHaveLength(7);
  });
  it("if we send negative number bigger than 1000000 and smaller than 10000000, we should return number with 1 space", async () => {
    expect(formatPrice("1000000")).toHaveLength(9);
    expect(formatPrice("9999999")).toHaveLength(9);
  });
  it("if we send negative number smaller than 99999, we shold return negative", async () => {
    expect(formatPrice("-1")).toBe("-1");
    expect(formatPrice("-11")).toBe("-11");
    expect(formatPrice("-111")).toBe("-111");
    expect(formatPrice("-9999")).toBe("-9999");
    expect(formatPrice("-5000")).toBe("-5000");
  });
});
