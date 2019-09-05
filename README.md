# TriviaGame

The deployed webpage can be found here: https://shodges201.github.io/TriviaGame/

## Summary

This trivia game was created using HTML, CSS, Javascript, and jquery. Javascript and jquery are used to swap in and out each new question. Each question is timed, and when a question is answered, a GIF pulled from the GIPHY website is displayed to fit the answer of the question. A running tally is kept of the number of correct answers, and incorrect answers which is displayed at the end of the game to the user, and the game will restart.

### Javascript and jquery

There is a list corresponding the each question

```var questionList = ["What was the first full length CGI movie?",... ```

as well as a list where each questions' index corresponds to the list of answers in the answer list as such

```var answerList = [["Monster's Inc.", "Toy Story", "A Bug's Life", "Snow White", 1],... ``` 

where each list contains four strings with an integer as the last index which contains the index of the correct answer in the answer list.
