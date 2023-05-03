/**
 * Given a dictionary D where the key is of the form YYYY-MM-DD and its corresponding value is an integer,
 * returns a new dictionary D such that its key (type: String) is a Day: [Mon, Tue, Wed, Thu, Fri, Sat, Sun] and its corresponding value (type: INT) is the sum of values on that day.
 * If a day is missing from the input dictionary, the value for that day is the mean value of the nearest non-null values.
 */

function solution(data = {}) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const result = {};

  // Initialize the result dictionary with all days of the week and a null value.
  daysOfWeek.forEach((day) => {
    result[day] = null;
  });

  // Calculate the sum of values for each day of the week.
  Object.keys(data).forEach((date) => {
    const count = data[date];
    const dayOfWeek = new Date(date).getDay();
    const day = daysOfWeek[dayOfWeek];

    // If the result dictionary has a null value for the given day of the week, set it to the count.
    if (result[day] === null) {
      result[day] = count;
    }
    // Otherwise, add the count to the existing value for that day of the week.
    else {
      result[day] += count;
    }
  });

  // Calculate the mean value for days that are missing from the input dictionary.
  const numOfDays = daysOfWeek.length;
  for (let i = 0; i < numOfDays; i++) {
    // If the result dictionary has a null value for the current day of the week, calculate its mean value.
    if (result[daysOfWeek[i]] === null) {
      // Find the nearest non-null values for the previous and next days of the week.
      let previousDayIndex = i,
        nextDayIndex = i;

      while (result[daysOfWeek[previousDayIndex]] === null) {
        previousDayIndex = (numOfDays + previousDayIndex - 1) % numOfDays;
      }

      while (result[daysOfWeek[nextDayIndex]] === null) {
        nextDayIndex = (nextDayIndex + 1) % numOfDays;
      }

      // Calculate the mean value for the missing day of the week.
      let meanValue;

      if (previousDayIndex > nextDayIndex) {
        meanValue =
          (result[daysOfWeek[nextDayIndex]] -
            result[daysOfWeek[previousDayIndex]]) /
          (previousDayIndex - nextDayIndex + 2);
      } else {
        meanValue =
          (result[daysOfWeek[nextDayIndex]] -
            result[daysOfWeek[previousDayIndex]]) /
          (nextDayIndex - previousDayIndex + 1);
      }

      // Set the mean value for the missing day of the week and all the days in between.
      for (
        let j = (previousDayIndex + 1) % numOfDays, k = 1;
        j !== nextDayIndex;
        j = (j + 1) % numOfDays, k++
      ) {
        result[daysOfWeek[j]] =
          result[daysOfWeek[previousDayIndex]] + k * meanValue;
      }
    }
  }

  return result;
}

console.log(
  solution({
    '2020-01-01': 4,
    '2020-01-02': 4,
    '2020-01-03': 6,
    '2020-01-04': 8,
    '2020-01-05': 2,
    '2020-01-06': -6,
    '2020-01-07': 2,
    '2020-01-08': -2,
  })
);

module.exports = solution;
