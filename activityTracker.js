// My weekly activity data
const myWeek = [
  {
    day: "Monday",
    activity: "Drawing",
    category: "creative",
    hoursSpent: 2,
    enjoyment: 9,
    timeOfDay: "evening"
  },
  {
    day: "Tuesday",
    activity: "Gym workout",
    category: "physical",
    hoursSpent: 1.5,
    enjoyment: 8,
    timeOfDay: "morning"
  },
  {
    day: "Wednesday",
    activity: "Coffee with friends",
    category: "social",
    hoursSpent: 2,
    enjoyment: 7,
    timeOfDay: "afternoon"
  },
  {
    day: "Thursday",
    activity: "Painting",
    category: "creative",
    hoursSpent: 1,
    enjoyment: 10,
    timeOfDay: "evening"
  },
  {
    day: "Friday",
    activity: "Walking outside",
    category: "physical",
    hoursSpent: 1.5,
    enjoyment: 8,
    timeOfDay: "afternoon"
  },
  {
    day: "Saturday",
    activity: "Cooking",
    category: "creative",
    hoursSpent: 1,
    enjoyment: 9,
    timeOfDay: "evening"
  },
  {
    day: "Sunday",
    activity: "Watching movies",
    category: "social",
    hoursSpent: 3,
    enjoyment: 6,
    timeOfDay: "night"
  }
];


// Predictions:
// 1. I predict creative activities will have the highest enjoyment scores.
// 2. I predict creative will be the most common category.
// 3. I think evening activities may have higher enjoyment because I have more free time.


// Calculates total hours spent on activities
function totalHours(week) {
  return week.reduce((total, activity) => {
    return total + activity.hoursSpent;
  }, 0);
}


// Finds activities with enjoyment above 8
function highEnjoymentActivities(week) {
  return week.filter(activity => activity.enjoyment > 8);
}


// Gets only activity names using map()
function activityNames(week) {
  return week.map(activity => activity.activity);
}


// Finds the average enjoyment score
function averageEnjoyment(week) {
  const total = week.reduce((sum, activity) => {
    return sum + activity.enjoyment;
  }, 0);

  return total / week.length;
}

