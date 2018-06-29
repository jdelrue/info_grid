# Do you use RAID?

## Question

The way ThreeFold stores data, is it done somewhat like in a RAID system?

## Answer

No - this is very different, but is has elements that are similar. Cutting objects into small pieces of data and storing those on different disks to cope with disk failures is similar. The generic term for the technology is [erasure coding](https://en.wikipedia.org/wiki/Erasure_code).

