# flex-divider

An AngularJS directive that adds a draggable handle to adjust a flex-box layout. 

## Usage 

Just insert it between two elements with a non-zero `flex-grow` value.

## Known Bugs/Features

* The previous and next sibling elements will be forced to have flexible height/width.
* It is not implemented for `flex-direction: row;` yet.
* If there is another flexible element in the box, it's height/width will not be set correctly, so the layout will likely break.
