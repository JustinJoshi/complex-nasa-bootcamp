# 🚀 Project: Complex NASA API

### Goal: Use NASA's API to return all of their facility locations (~400). Display the name of the facility, its location, and the weather at the facility currently. 

### How to submit your code for review:

- Fork and clone this repo
- Create a new branch called answer
- Checkout answer branch
- Push to your fork
- Issue a pull request
- Your pull request description should contain the following:
  - (1 to 5 no 3) I completed the challenge
  - (1 to 5 no 3) I feel good about my code
  - Anything specific on which you want feedback!

Example:
```
I completed the challenge: 5
I feel good about my code: 4
I'm not sure if my constructors are setup cleanly...
```

Nasa into weather API

This api grabs all the nasa facilities and their location, and feeds that info into a weather api.

Tech used: HTML, CSS, JavaScript, Framework of choice

i used a proxy url site to grab the info from the nasa api to avoid the cors request issue. i used a fetch request to fetch the data, then fed that data into another fetch request to then print all the required data into the dom with innerhtml

Optimizations

make it prettier maybe

Lessons Learned:

i learned that proxy urls can work but this one was also very slow. I learned how to use the async await syntax properly but still opted not to use it in this case.