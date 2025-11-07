import * as icof from "../src/is-computer-on-fire";
import { describe, expect, test } from "bun:test";

describe("is-computer-on-fire-funcs", () => {
    test("base case", () => {
        expect(true).toBeTrue();
    });

    test("isComputerOn()", () => {
        expect(icof.isComputerOn()).toBeTrue();
    });

    test("assertComputerIsOn()", () => {
        expect(() => {
            icof.assertComputerIsOn()
        }).not.toThrow();
    });

    test("isComputerOnFire()", () => {
        expect(icof.isComputerOnFire()).toBeFalse();
    });

    test("assertComputerIsNotOnFire()", () => {
        expect(() => {
            icof.assertComputerIsNotOnFire()
        }).not.toThrow();
    }); 
});