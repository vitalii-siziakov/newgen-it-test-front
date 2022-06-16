(function () {
  // Функция сортировки курсов по цене
  // Cтоимость курса от число до число - в сортировке участвует по нижней границе стоимости (первое число)
  // Cтоимость курса от число и до null - в сортировке участвует по нижней границе стоимости (первое число)
  // Cтоимость курса от null и до число - в сортировке участвует второе значение, так как первое неизвестно, но не может быть больше второго
  // Cтоимость курса от null и до null - в самый низ списка (неизвестна стоимость)

  function sortCourses(courses) {
    let initialMax = 0

    courses.forEach((course) => {
      let max = Math.max.apply(Math, course.prices)
      max > initialMax ? (initialMax = max) : ''
    })

    return courses.sort((courseA, courseB) => {
      let priceMinA = courseA['prices'][0]
      let priceMaxA = courseA['prices'][1]

      let priceMinB = courseB['prices'][0]
      let priceMaxB = courseB['prices'][1]

      priceMinA === null && priceMaxA !== null ? (priceMinA = priceMaxA) : ''
      priceMinA === null ? (priceMinA = initialMax) : ''

      priceMinB === null && priceMaxB !== null ? (priceMinB = priceMaxB) : ''
      priceMinB === null ? (priceMinB = initialMax) : ''

      return priceMinA - priceMinB
    })
  }

  window.sortCourses = sortCourses
})()
