# datastructure
This is a redo of week 1, day 3-6 from hackreactor.

## My Recollection:
We worked on data structure and js classes.  
I jumped back to this exercise, because I think we worked a bit with "this".  
After using python and ruby the past year, I am rusty on how "this" works.

## What I (re)learned:
- functional class
  - PROS:
    - no need for 'this' ever
    - easy to understand
    - takes full advantage of closures (can access private variables) forever (slight exaggeration)
  - CONS:
    - takes up a bunch of unncessary space (100 instances will create 100n methods where n is # of methods)
    
- functional-shared class
  - PROS:
    - save a lot of space (100 instances will re-use the same methods)
  - CONS:
    - private variables are not private (they are accessible from the outside)
