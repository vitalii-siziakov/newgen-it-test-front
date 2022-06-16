(function () {
  function createArrayText(variableName, array) {
    let text = ``

    array.forEach((elem) => {
      text += `${JSON.stringify(elem)},\n`
    })

    return (text = `${variableName} = [\n${text}]`)
  }

  function createFilterExampleHTML(courses, range, numOfRange) {
    let filter = createArrayText(`let requiredRange${numOfRange}`, range)
      .replace(/\n/g, '')
      .replace(',]', ']')

    let filterResult = createArrayText(
      'let courses',
      filterCourses(courses, range)
    )
      .replaceAll('"name"', 'name')
      .replaceAll('"prices"', 'prices')

    let filterExample = `
       <h3>Фильтр (${numOfRange}):</h3>
      <pre><code class="courses-filter-${numOfRange} language-javascript">${filter}</code></pre>
      <h3>Курсы с применением фильтра (${numOfRange}):</h3>
      <pre><code class="courses-filter-result-${numOfRange} language-javascript">${filterResult}</code></pre>
`
    return filterExample
  }

  function createButtonListeners(buttonClass, elemClass) {
    let button = document.querySelector(`.${buttonClass}`)
    let elem = document.querySelector(`.${elemClass}`)

    button.addEventListener('click', function () {
      elem.toggleAttribute('hidden')

      if (elem.hidden) {
        button.innerText = button.innerText.replace('скрыть', 'показать')
      } else {
        button.innerText = button.innerText.replace('показать', 'скрыть')
      }
    })
  }

  window.createArrayText = createArrayText;
  window.createFilterExampleHTML = createFilterExampleHTML;
  window.createButtonListeners = createButtonListeners;
})()

