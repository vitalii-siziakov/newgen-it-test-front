(function () {
  let courses = window.courses
  let requiredRange1 = window.requiredRange1
  let requiredRange2 = window.requiredRange2
  let requiredRange3 = window.requiredRange3

  let sortCourses = window.sortCourses
  let filterCourses = window.filterCourses
  let createArrayText = window.createArrayText
  let createFilterExampleHTML = window.createFilterExampleHTML

    document.querySelector('.courses').innerHTML = createArrayText(
      'let courses',
      courses
    )
      .replaceAll('"name"', 'name')
      .replaceAll('"prices"', 'prices')

    document.querySelector('.sort-function').innerHTML = sortCourses

    document.querySelector('.courses-sort').innerHTML = createArrayText(
      'let courses',
      sortCourses(courses)
    )
      .replaceAll('"name"', 'name')
      .replaceAll('"prices"', 'prices')

    document.querySelector('.filter-function').innerHTML = filterCourses

    let filterExamples = ``
    filterExamples += createFilterExampleHTML(courses, requiredRange1, 1)
    filterExamples += createFilterExampleHTML(courses, requiredRange2, 2)
    filterExamples += createFilterExampleHTML(courses, requiredRange3, 3)

    document.querySelector('.filter-examples').innerHTML = filterExamples

    createButtonListeners('sort-function-toggle', 'sort-function')
    createButtonListeners('filter-function-toggle', 'filter-function')

})()
