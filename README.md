# Pig Dice

#### Epicodus Intro to Programming: Pig Dice Objects and Constructors, 06.11.18

#### By Devin Mounts & Matt Smith

## This webpage allows players to roll a dice, accumulating points. The player can choose to hold these points, and allow a second player to roll the dice.  The value one clears any points the player has not held, and ends turn.



## Setup/Contribution Requirements

1. Clone the repo
1. Make a new branch
1. Commit and push your changes
1. Create a PR

## Specifications
### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Program returns a random number between 1 and 6 when dice is "rolled"**| User Input: "Roll Dice" | Output: "4" |
| **If Program rolls from 2 to 6, result is that number. If player rolls 1, result equals 0** | Input: "Roll one: 2,  Roll Two: 1"  | Output: "Roll one: 2, Roll 2: 0" |
| **Program returns zero when the value one is rolled, and player can no longer roll** | Input: "1" | Output: "0, turn ends" |
| **Program allows player to hold points from previous rolls, store them as players points and voluntarily ends turn.** | Input: "Roll 1: 3,  Roll 2: 4  Hold" | Output: "7, Turn ends" |
| **Program allows user to roll a second round, applying previous specifications to the roll and adding any held points to players total** | Input: "Player 1 total: 5  Round 2; Roll 1: 3, Roll 2: 2, Hold" | Output: "Player 1 total: 10" |
| **Program indicates a winner when the value 100 is reached by player** | Input: "100" | Output: "congratulations!" |

## Technologies Used

* Bootstrap 3.3.7
* jQuery 3.3.1
* Javascript


## Links

*

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Devin Mounts & Matt Smith**
