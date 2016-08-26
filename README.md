# haiku
An exercise in forking and creating a pull requests.

## First, run through the below exercise to add your SSH key
- https://github.com/ga-wdi-lessons/git-ssh
**If you cannot get it to work, then use HTTPS for the below instructions (#2)**

## Learning Objectives
- Practice using the 'fork, clone, and pull request' model to submit assignments

## Instructions
You do not have the necessary rights to update this repository.  Therefore, you must fork it, make changes to your fork, and then send a pull request to the owners of this repository.

On https://github.com/ga-dc/haiku:

1. Fork this repo to your personal account.
2. Copy the "SSH clone URL" for your fork of this repo.
* **This is where the SSH or HTTPS links come into play**

Starting in ~/wdi/exercises:

1. Clone the repository to your computer (make sure to use the url for your fork, and *not* this original repo), e.g. `git clone git@github.com:adambray/haiku.git`.  Note: The `git clone` command will create a new "haiku" dir and copy the repo into it.
2. Change to the newly created "haiku" dir (`cd haiku`).
3. You can see that the clone command has already setup your origin (`git remote -v`).
4. Open the current directory in your text editor (`atom .`).
5. Create a text file named `your_gh_username.txt`, e.g. `nickolds.txt`.
6. Write a haiku on a topic of your choice, commit it and push it.
7. Make one more commit that removes your Haiku. 
8. Undo the commit you just made. Thing to Google is "undo last commit". (Hint: use `git revert`)
9. Push everything to your remote.
10. You should still see your haiku on Github.

Create a Pull Request:

1. Back on github.com (on your forked repo), create a pull request to the upstream (original) repository: `ga-dc/haiku master <- your_github_name/haiku master`.

Additional changes are added to the Pull Request:

1. Make additional local changes, and commit/push them to your remote.
2. Verify that the pull request is updated on github.
