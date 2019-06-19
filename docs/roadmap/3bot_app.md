# 3bot.app

is the combination of 

- FreeFlow Pages 
- FreeFlow Browser (browser running in grid): privacy & freedom for all
- FreeFlow Connect (alternative to zoom/skype/hangout but decentralized): allow anyone to communicate, everywhere
- FreeFlow Files (filemanager, alternative to e.g. dropbox)
- FreeFlow Wallet

## Why

- Timing is now: Facebook is launching their currency and this will make crypto more mainstream. Its a very good moment to launch a better alternative.
- we need better UI compared to the current FreeFlow Pages
- people don't need 10 apps, they need 1 app which is opensource/free by itself and which is the gateway to their own data
- we need something tangible to show/promote to the larger community, need an action e.g. install the 3bot on your phone...

## Comparison with Facebook
| Facebook                                        	| 3bot.app                                                                                                                              	|
|-------------------------------------------------	|---------------------------------------------------------------------------------------------------------------------------------------------	|
| centralized                                     	| 100% decentralized, everyone owns their data                                                                                                	|
| digital currency = stable coin, backed by banks 	| digital currency = stable coin backed by physical gold                                                                                      	|
| one digital currency                            	| unlimited amounts of digital currencies, everyone can create their own in all freedom, the default ones: gold & tft & stablecoins (eur,usd) 	|
| mainly a social media app                       	| integrated decentralized video conferencing (rooms)                                                                                         	|
| mainly a social media app                       	| integrated file manager (photo manager, ...)                                                                                                	|
| mainly a social media app                       	| integrated video manager (*)                                                                                                                	|
| mainly a social media app                       	| integrated blog platform                                                                                                                    	|
| mainly a social media app                       	| integrated wiki/education/info sharing platform                                                                                             	|
| mainly a social media app                       	| integrated ecommerce (make it super easy to sell a service/product)                                                                         	|
| mainly a social media app                       	| integrated callender & task management (*)                                                                                                  	|
| facebook chat                                   	| 1 messaging app (no more chat vs email vs sms)                                                                                              	|
| free = you're the product                       	| user needs to pay for IT resources used (but is small)                                                                                      	|
| unsafe (can be hijacked)                        	| integrated safe browser in private environment (browser in browser)                                                                         	|
| closed & controlled platform                    	| extendable platform, to allow any one to develop more apps in all neutrality                                                                	|

(*) roadmap

other differences

- no commercial interest
- will try to protect people against dopamine addiction syndrome

## How

- will be launched sept (if possible)
- using the bigger community e.g. https://www2.freeflownation.org/
- community will have to pay TFT to use this 3bot
- will allow us to go faster

## Implementation Details

- All in vue.js using graphql?
- Super consistent look & feel.
- Backend in 3bot actors with BCDB at back.
- Files also in 3bot interface webdav and rest (compatible with FreeFlowFiles used API)? 
- Files stored in ZDB/ZSTOR but managed by 3bot, caching on filesystem on 3bot.


## Functionality

its all seamless integrated in 1 app, so will not see different parts !!!

### FreeFlow Pages 

Start from scratch. 
Try to avoid the dopamine addiction game of facebook.

Some new ideas

- FF News
- FF Circles
- FF Rooms
- FF Blogs
- FF Edu 

### FreeFlow Connect

- part of the FF Rooms
- is seamless integrated = the FF Rooms
- every 3Node is auto part of this network of audio/video multiplexers 
- needs to be auto detection all the time (only advanced users can overrule)

### FreeFlow Files

- based on https://vuejsexamples.com/vue-based-front-end-for-file-manager/
- need to mimic rest api on 3bot backend
- gevent server using WSGI and WORKZEUG 

# research

- there are a lot of super cool admin themes available (vue.js compatible), need to choose one
- need to create example graphql backend




