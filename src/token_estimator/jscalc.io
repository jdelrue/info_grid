'use strict';

var cru = inputs.cores ;
var mru = inputs.memory ;
var sru = inputs.ssd ;
var hru = inputs.hdd ;
var tokenvalue_start = inputs.tokenvalue_start ;

var cu1 = cru ;
var cu2 = mru/4 ;
var cu3 = sru/20 ;


// 3 conditions to make sure we cannot have 0 cores, 0 memory or zero SSD - if so
// calculation default to 0
if (cu1 === 0 ) {
  return {cu: 0, su: 0, tokens: 0, tokenearnings: 0 } ;
}

if (cu2 === 0 ) {
  return {cu: 0, su: 0, tokens: 0, tokenearnings: 0 } ;
}

if (cu3 === 0 ) {
  return {cu: 0, su: 0, tokens: 0, tokenearnings: 0 } ;
}

// we have met the condition for minimum cores, memory and SSD
// we need to have the minimum of the following 3 measurements to calculate the number of CU
// determine which is the lowest of three deciding CU factors.
var cunits = 0 ;

if ( cu1 < cu2 ) {
  if ( cu2 < cu3 ) {
    cunits = cu1 ;
    } else {
//    cu2 > cu3
    if ( cu1 > cu3 ) {
      cunits = cu1 ;
    } else {
// cu2 > cu3 && cu3 < cu1
      cunits = cu3 ;
    }
  }
} else {
  if ( cu2 < cu3 ) {
    cunits = cu2 ;
  } else {
    cunits = cu3;
  }
}

// overhead is 10% to run the zero-os operating system
cunits = cunits * 0.9 ;

// calculate the number of (storage units) SU's
var sunits = (sru/135 + hru/1093) ;

// calculate the number of tokens based on the presented capacity overview - 5yrs.
var ttokens = (( cunits * 12 ) + (sunits * 10 ))/(8) * 60 / tokenvalue_start ;

// calculate the potential revenue based on the exist token price and taking the assumption
// that all tokens are sold at the end of the 5yr period.
var revenue = ttokens * inputs.tokenvalue_exit ;

return {
 cu: cunits,
 su: sunits ,
 tokens: ttokens,
 tokenearnings: revenue
} ;
