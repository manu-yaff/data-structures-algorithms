/**
 * Write a function call fib which accepts a number and returns the nth number
 * in the Fibonacci sequence
 */

function fib(num) {
  if (num < 3) return 1
  return fib(num - 1) + fib(num - 2)
}