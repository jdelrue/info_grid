# How is redundancy achieved?

## Question

How does the distributed data storage achieve redundancy?  

## Answer

The ThreeFold grid presents raw capacity in the form of primitives. The actual Zero-OS does not know how to store objects in a redundant manner, it provides storage primitives to read and write data. Primitives are best described as building blocks by which one can create a service. For example the S3 service uses the storage primitives to build a software defined storage service.

Redundancy is achieved by the storage service by doing the following things:
 - cut the original object (document, photo, movie) into small pieces
 - by using a certain algorithm create additional (redundant) pieces of data. Depending on the algorithm a small or larger number of redundant pieces of data can be created. Think of this process as completing a [sudoku](https://en.wikipedia.org/wiki/Sudoku] puzzle). The unsolved puzzle resembles the original object to store (photo etc.) the algorithms to create additional redundant data is the solving algorithm for the puzzle (numbers 1 - 9 can only appear once in a row, column and 3x3 number square). The further solved the puzzle is the more data redundancy is created.  
   - unsolved puzzle + 4 additional numbers
   - unsolved puzzle + 8 additional numbers
   - etc.
  
  The individual numbers are then stored on a disk in a single zero-os node, on a number of disks on a Zero-OS node, on multiple Zero-OS nodes in the same location or on a number of Zero-OS nodes in multiple locations.

By adjusting the amount of redundant data created and where the data pieces are stored you can create very redundant storage solutions.