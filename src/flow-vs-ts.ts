/* Inference direction */

/* Top to bottom - enforced, result inferred as number */
const multiplyTop = (a: number, b: number) => a * b;

/* Top to bottom - arguments and result both are inferred as numbers
 as multiplication can only be with numbers */
const multiplyBottom = (a, b) => a * b;
