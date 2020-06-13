# Module Project: React Components and Components State - American Football Scoreboard

This project allows you to build with concepts and techniques learned on React components and component state.

## Project Set Up

- [ ] Clone your OWN version of the repository in your terminal
- [ ] CD into the project base directory `cd american-football-scoreboard`
- [ ] Download project dependencies by running `npm install`
- [ ] Start up the app using `npm start`

## Task Goal - Achieved 100%

1. Hold each team's current score in a state value
2. Render each team's current score that is in state to the DOM.
3. Be able to click the different buttons to increment the appropriate team's score by the correct amount

  - [ ] A touchdown is worth 7 points (assume the following extra point is made)
  - [ ] A field goal is worth 3 points

4. Break out parts of App component into smaller components and compose multiple components together to make the UI
5. Write a "handler" function in App component that takes in a team name and an amount. This function will then be passed to each button's click handler. It will increment the correct team's score by the passed in amount


- [*] Add a button that changes which quarter the game is in, and then render the state quarter value on the scoreboard