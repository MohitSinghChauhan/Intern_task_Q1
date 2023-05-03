## Problem Statement

Write a function `solution(D)` that, given a dictionary `D` where the key is of the form `YYYY-MM-DD` and its corresponding value is an integer, returns a new dictionary `D` such that:

1. Its key (type: String) is a Day: `[Mon, Tue, Wed, Thu, Fri, Sat, Sun]`
2. Its corresponding value (type: INT) is the sum of values on that day.

### Example

Input: 
`D = {'2020-01-01': 4, '2020-01-02': 4, '2020-01-03': 6, '2020-01-04': 8, '2020-01-05': 2, '2020-01-06': -6, '2020-01-07': 2, '2020-01-08': -2}`

Output: 
`D = {'Mon': -6, 'Tue': 2, 'Wed': 2, 'Thu': 4, 'Fri': 6, 'Sat': 8, 'Sun': 2}`

3. Also, if the Input Dictionary does not have a particular day then the Output Dictionary will have the value of that day as the mean of the previous and next day.

### Example

Input:
 `D = {'2020-01-01': 6, '2020-01-04': 12, '2020-01-05': 14,'2020-01-06': 2, '2020-01-07':4}`

Output: 
`D = {'Mon': 2, 'Tue': 4, 'Wed': 6, 'Thu': 8, 'Fri: 10', 'Sat': 12, 'Sun': 14}`

Write an efficient algorithm for the following assumptions:

* The Input Dictionary will have at least Mon & Sun.
* The Input Dictionary key is a string within the range `[1970-01-01..2100-01-01]`.
* Its corresponding value is an integer within the range `[-1,000,000..1,000,000]`.

**Note:** You have to write unit tests in jest and explain.