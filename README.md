# COMP3012_PromiseLab
This repository consists of a node.js lab I completed for a Node.js class I am taking at BCIT.  The code utilizes promises (as opposed to the standard Node.js callbacks).

The objective of the lab is to read a menu.csv data, to reformate the data, which includes a 1.8 times price increase, and print the data to a txt file.

I accomplished this lab in the following steps.

1.	The menu.csv data was read in.

2.	The data converted to elements in a 2-dimensional array, whereby:
  a.	The data was first split() on EOL (end of line), which created the first dimension of the array
  b.	The data was then split() on a comma (,) separator, which created the second dimension of the array. 

3.	The element containing the prices were: 
  a.	converted to Numbers.
  b.	The numbers were then multiplied by 1.8.
  c.	The numbers were converted back to strings, and the ‘$’ sign was added in front of the strings.

4.	The array elements were organized along the lines of Lunch, Dinner, and Dessert, with the appropriate elements placed under each values. 
  a.	The elements were added to a string.

5.	The string was written to a txt file.
