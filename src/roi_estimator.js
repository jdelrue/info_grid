'use strict';

// Input variables from sliders / input boxes
var farmed_tokens = inputs.farmed_tokens;
var cultivated_tokens = inputs.cultivated_tokens;
var av_token_value = inputs.av_token_value ;
var hardware_cost = inputs.hardware_cost;
var monthly_cost = inputs.monthly_cost ;


// Definition of constants
var nr_months = 60;

var total_tokens = (farmed_tokens + cultivated_tokens) ;
var total_dollars = total_tokens * av_token_value ;

// standard ROI definition:  ( total income - (CAPEX + OPEX) ) / CAPEX
var roi = (total_dollars -(hardware_cost + nr_months * monthly_cost )) / hardware_cost

return {
 total_tokens: total_tokens,
 av_exit_token_value: av_token_value ,
 total_dollars: total_dollars ,
 roi: roi ,
} ;
