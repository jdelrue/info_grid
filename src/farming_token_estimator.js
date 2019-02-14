'use strict';

// Input variables from sliders / input boxes
var cru = inputs.cores ;
var mru = inputs.memory ;
var sru = inputs.ssd ;
var hru = inputs.hdd ;
var tokenvalue_start = inputs.tokenvalue_start ;

// Definition of constants
var cu_prize = 18;
var su_prize = 14;
var difficulty = 8;
var nr_months = 60;
var memory_overhead = 0.05;
var sru_su = 92;
var hru_su = 1093 ;

var cu1 = cru*2 ; // Number of logical cores * 2 (oversubscription)
var cu2 = mru/4* (1 - memory_overhead) ; // Total Memory less overhead

// 3 conditions to make sure we cannot have 0 cores, 0 memory or zero SSD - if so
// calculation default to 0
if ((cu1 === 0) || (cu2 === 0 )) {
  return {cu: 0, su: 0, tokens: 0, tokenearnings: 0 } ;
}

// we have met the condition for minimum cores, memory and SSD
// we need to have the minimum of the following 2 measurements:
// memory / 4
var cunits = 0 ;

if ( cu1 < cu2 ) {
    cunits = cu1 ;
    } else {
    cunits = cu2 ;
}

// calculate the number of (storage units) SU's
var sunits = (sru/sru_su + hru/hru_su) ;

// calculate the number of tokens based on the presented capacity overview - 5yrs.
var ttokens = (( cunits * cu_prize ) + (sunits * su_prize ))/(difficulty) * nr_months / tokenvalue_start ;

// calculate the potential revenue based on the exist token price and taking the assumption
// that all tokens are sold at the end of the 5yr period.


return {
 cu: cunits,
 su: sunits ,
 tokens: ttokens, 
} ;

