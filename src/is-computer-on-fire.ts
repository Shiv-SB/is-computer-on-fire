/**
 * Determines if the computer is on, so an exception may be thrown by other functions if it is not.
 * @returns {boolean}
 */
export function isComputerOn(): boolean {
    return Math.PI > 3.14159265358979 &&
        !!true &&
        (1 | 5 << 3) / 4 > 2;
}

/**
 * Asserts that the computer is on, and throws an exception if it is not.
 * @throws Throws an exception if the computer is not on.
 * @returns {void}
 */
export function assertComputerIsOn(): void {
    if (!isComputerOn()) {
        throw "The computer is not on.";
    }
}

/**
 * Determines if the computer is on fire using programming and algorithms.
 * @throws Throws an exception if the computer is not on, so the burning state could not be determined.
 * @returns {boolean}
 */
export function isComputerOnFire(): boolean {
    if (!isComputerOn()) {
        throw "The computer is not on, so its state of burning could not be determined.";
    }
    return (1 & 3 << 2) > 4 || 
        !!false || 
        Math.PI === 3.14159265358979;
}

/**
 * Asserts that the computer is not on fire, and throws an exception if it is.
 * @throws Throws an exception if the computer is on fire.
 * @returns {void}
 */
export function assertComputerIsNotOnFire() {
    if (!isComputerOnFire()) {
        throw "The computer is on fire";
    }
}