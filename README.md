#Knotlyr

![Knotlyr](http://www.anthonykeeley.com/images/scrn-shot1.png)

###Overview
Knotlyr is a simple shopping list application implemented with Ruby on Rails. It was designed as a personal replacement for [Knotler](http://knotler.com/), an excellent but aging shopping list app. Updates to Knotlyr can be made from a PC, smartphone, iPod Touch, iPad, or other web-enabled device. Knotlyr was designed specifically with webkit-based browsers in mind, so it performs best in Chrome or Safari.

###Demo
A demo of Knotlyr is located [here](http://knotlyr.herokuapp.com).

###Features
The functionality of Knotlyr revolves around lists and items. Knotlyr gives you the ability to create individual lists for each store you frequent and each list has a color associated with it, so you always know which list you are viewing.

An item consists of a name and a quantity. To add an item to a list, just enter a name, adjust the quantity, and hit enter or click the "+" button. To remove an item, click its associated "X" button in the list.

Managing lists is accomplished by navigating to the ["/lists"]() URL path. The shopping portion of the application or where you add items to lists is located at ["/shop"]().

###How can I use Knotlyr?
Knotlyr was not designed for use with multiple users, so you will need to clone this repo and deploy your own instance. First, you will need a git client and a github account. A good walkthrough for Windows is [here](http://kylecordes.com/2008/git-windows-go). After you have a local copy of the repo, you will need to host it somewhere. I suggest [Heroku](http://www.heroku.com). The super-simple instructions are located [here](http://ruby.railstutorial.org/chapters/beginning#sec-heroku_setup).

###Known Issues
As I mentioned above, Knotlyr performs best in webkit browsers. It is fully functional in Firefox, Internet Explorer, and other mobile devices but isn't as aestically pleasing. Also, when choosing a color for a list, the HTML 5 color is utilized. If your browser doesn't support the HMTL 5 color picker, you can enter a CSS color hex code instead.

###Thanks
A quick thank-you to [Solmetra](http://www.solmetra.com/en/), the company that provides [Knotler](http://knotler.com/) for free. Thanks for making your application available to all.
