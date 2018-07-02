# React Calendar App

This a simple calendar app built in React.js. When the button is clicked a modal pops up and open a calendar.

The initial state is a simple button that opens a responsive modal with a background overlay greying out the background.

The app has the following functionality:
1. The ability to open the modal;
2. The ability to change the date to a selectable date;
3. The ability to dismiss the modal (using a button or clicking outside the modal).

I pre-set which dates are selectable and which ones aren't. When a selectable day is clicked an alert comes out.
The arrows show the previous and next month.

![Modal close](./public/images/1.png?raw=true)
![Modal open](./public/images/2.png?raw=true)

## My approach

I created a react app with ```create-react-app``` and I used an `npm` package for the modal. Then I create the calendar and work on the style.


## Instructions

Prerequisites
node installed

- to run the web app

```sh
$ git clone https://github.com/GiadaSimonetti/react-calendar
$ cd react-calendar
$ npm install
$ npm start
```
Your browser should open on localhost:3000, if it doesn't go directly to localhost:3000.
