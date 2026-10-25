#include <stddef.h>
#include <stdio.h>
#include <math.h> 
​
size_t countBits(unsigned value)
{
  size_t bins =0;
  while (value != 0){
    int rem = value % 2;
    if(rem == 1){
        bins++;
    }
    value = floor(value / 2);
  }
  return bins;
}