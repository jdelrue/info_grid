'use strict';

// Input variables from sliders / input boxes
var nr_cu = inputs.number_of_cu;
var nr_su = inputs.number_of_su;
var average_usage = inputs.average_usage/100 ;
var price_erosion = inputs.price_erosion/100 ;
var cu_price = inputs.cu_price ;
var su_price = inputs.su_price;
var a_token_price = inputs.a_token_price;

// Definition of constants
var nr_months = 60;

// Calculate the number of tokens earned
var cultivation_dollars = ( average_usage * price_erosion * ( nr_cu * cu_price + nr_su * su_price)) * nr_months;
var cultivation_tokens = (cultivation_dollars / a_token_price ) ;

return {
 c_revenue_dollar: cultivation_dollars,
 c_revenue_tokens: cultivation_tokens ,
} ;
