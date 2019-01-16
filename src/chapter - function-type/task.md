# Task

Write two color functions:

`rgbToHex`: `rgbToHex({255,0,0})`

- Input: three 8-bits decimal (0-255) color channels - r,g,b
- Output: a hex string

`hexToRgb`: `hexToRgb('00ff00')`

- Input: a 3 or 6-digit hex string
- Output: an r,g,b

These two functions should be named exports from color-functions file

#Hints
These functions may be needed:

- Array.map
- String.substring
- parseInt(string, 16) => converting a hexadecimal number(string) into an integer
- number.toString(16) => converting an integer into its hexadecimal representation (string)
- Math.max
- Math.min
- Array.join
