# Code Wars 08 Alternating Uppercase
Ryan Luras @RyLuras and Kevin Grayson @grayson073

A Nice array is defined to be an array where for every value n in the array, there is also an element n-1 or n+1 in the array.

Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. You should also return false if input array has no elements.

To SOLVE:

1. for i in array;
2. if array includes i + 1 or i + 2
3. return true, else return false.