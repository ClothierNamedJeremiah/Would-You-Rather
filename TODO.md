# TODO
## Components

## Questions
* Why does the NavLink reset controlled component state?

## CSS
* Leaderboard
* Leaderboard Entry
* New Question

# Done
* LeaderboardEntry: a user entry on the leaderboard, contains the following information: name, picture, number of questions asked, number of questions answered.
* Leaderboard: available at `/leaderboard` ordered list of LeaderboardEntry that are sorted in descending order `sortBy((questions_answered) + (questions_asked))`
* Navbar: Home, Create New Poll, Leaderboard
* ListQuestions: a list of all the polls created

# Components

* Question: available at `questions/:question_id`


# Controlled Component
* Dashboard: home page, with buttons to view different polled unanswered questions, unaswered questions showed by default
* Login: page for the user to login, this will update the store's `authUser` and allow us to access all other pages. Login submission redirects us to the home page
* NewQuestion: available at `/add`. A form with 'would you rather' and two input fields for text. On submit we will use the users id to correctly update our backend and then redirect the user to the home page

# Stateless Functional Components
* 404: error page for question not found

# Store
* authedUser: need to keep track of which user is logged in. Defaults to `null`
* questions: question objects as specified in the API `src/utils/api.js `
* users: user objects as specified in the API `src/utils/api.js `

# Improvements
- Deterime best way to now allow users to visit pages
