const input = {
  p1: {
    s1: {
      title: 'scene 1',
      description: 'description 1',
      value: 1,
    },
    s2: {
      title: 'scene 2',
      description: 'description 2',
      value: 32,
    },
    s3: {
      title: 'scene 3',
      description: 'description 3',
      value: 89,
    },
    s4: {
      title: 'scene 3',
      description: 'description 3',
      value: 0,
    },
  },
  p2: {
    s5: {
      title: 'scene 5',
      description: 'description 5',
      value: 0,
    },
    s6: {
      title: 'scene 6',
      description: 'description 6',
      value: 42,
    },
    s7: {
      title: 'scene 7',
      description: 'description 7',
      value: -9,
    },
  },
}

/**
 * Функция преобразовывает объект без сортировки
 */
function transformObject(obj) {
  let result = []

  for (let key in obj) {
    for (let key2 in obj[key]) {
      let middle = {}
      middle.projectId = key
      middle.sceneId = key2
      if (obj[key][key2].value > 0) {
        result.push(middle)
        for (let key3 in obj[key][key2]) {
          middle.value = obj[key][key2].value
          middle.title = obj[key][key2].title
        }
      }
    }
  }
  return result
}

const result = transformObject(input)

console.log('RESULT', result)

/**
 * Функция с сортировкой
 */
function transformObjectSort(obj) {
  let result = []

  for (let key in obj) {
    for (let key2 in obj[key]) {
      let middle = {}
      middle.projectId = key
      middle.sceneId = key2
      if (obj[key][key2].value > 0) {
        result.push(middle)
        for (let key3 in obj[key][key2]) {
          middle.value = obj[key][key2].value
          middle.title = obj[key][key2].title
        }
      }
    }
  }
  return result.sort((first, second) => second.value - first.value)
}

const resultSorted = transformObjectSort(input)

console.log('SORTED RESULT', resultSorted)
