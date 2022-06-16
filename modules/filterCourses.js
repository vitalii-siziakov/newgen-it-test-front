(function () {
  // Функция фильтрации курсов
  // В ТЗ не был указан алгоритм интерпретации значения null, запрограммирована следующая логика работы функции:
  // null для фильтра - пустое значение (пользователь не ввел значение, удалил ввод)
  // [null, null] для курса - стоимость курса не указана
  // (cтоимость курса не указана - это не меньше и не больше, курсы с ней фигурируют в результатах, если другое значение (число) не убирает значение по результатам фильтрации)

  function filterCourses(courses, ranges) {
    let result = sortCourses(courses)

    let [min, max] = ranges

    if (min === null && max === null) {
      result = courses
    } else {
      let initialMin = 0
      let initialMax = 0

      courses.forEach((course) => {
        let max = Math.max.apply(Math, course.prices)
        max > initialMax ? (initialMax = max) : ''
      })

      min === null ? (min = initialMin) : ''
      max === null ? (max = initialMax) : ''

      result = courses.filter((course) => {
        let priceMin = course['prices'][0]
        let priceMax = course['prices'][1]

        priceMin === null ? (priceMin = initialMin) : ''
        priceMax === null ? (priceMax = initialMax) : ''

        if (priceMin <= max && priceMax >= min) {
          return course
        }
      })
    }

    return result
  }

  window.filterCourses = filterCourses;
})()
