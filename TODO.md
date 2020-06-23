# Components
* Navbar: Home, Create New Poll, Leaderboard
* Question: available at `questions/:question_id`
* UnAnsweredQuestion: text "would you rather" the picture of the user who posted the polling question, and the two optiions
* AnsweredQuestion: text of the option, num votes, percentage votes for each of the options. Also should display the option selected in by `authedUser`.

# Controlled Component
* Home: home page, with buttons to view different polled unanswered questions, unaswered questions showed by default
* Login: page for the user to login, this will update the store's `authUser` and allow us to access all other pages. Login submission redirects us to the home page
* NewQuestion: available at `/add`. A form with 'would you rather' and two input fields for text. On submit we will use the users id to correctly update our backend and then redirect the user to the home page

# Stateless Functional Components
* Leaderboard: available at `/leaderboard` ordered list of LeaderboardEntry that are sorted in descending order `sortBy((questions_answered) + (questions_asked))`
* LeaderboardEntry: a user entry on the leaderboard, contains the following information: name, picture, number of questions asked, number of questions answered.
* 404: error page for question not found

# Store
* authedUser: need to keep track of which user is logged in. Defaults to `null`
* questions: question objects as specified in the API `src/utils/_DATA.js`
* users: user objects as specified in the API `src/utils/_DATA.js`