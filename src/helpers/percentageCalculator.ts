/**
 * @description This method is handy to easly find the percantage of two numbers
 *
 *
 * @param referenceNumber This number used to be a reference of the percentage calculation
 * @param otherNumber This number is used to find the percentage according to the reference number
 */

export function percentageCalculator(
  referenceNumber: number,
  otherNumber: number,
): number {
  return (otherNumber / referenceNumber) * 100;
}
