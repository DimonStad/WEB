const randomValue = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const generateRandomArray = function (arrayLength, min, max) {
    let random = []
    for (let i = 0; i < arrayLength; i++) {
        random.push(randomValue(min, max));
    }
    return random
}

const findMinInArray = function (array) {
    let minValue = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] < minValue) {
            minValue = array[i]
        }
    }
    return minValue
}

const findMaxInArray = function (array) {
    let maxValue = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxValue) {
            maxValue = array[i]
        }
    }
    return maxValue
}

const findMedianInArray = function (array) {
    let tempArray = array.slice()
    tempArray.sort()
    let halfIndex = Math.floor(tempArray.length / 2)
    if (tempArray.length % 2) {
        return [tempArray[halfIndex], tempArray]
    } else
        return [(tempArray[halfIndex] + tempArray[halfIndex - 1]) / 2.0, tempArray]
}

const quickSort = function (array) {
    if (array.length < 2) {
        return array
    }

    let pivotInd = Math.floor(Math.random() * array.length)
    let pivotElm = array[pivotInd]
    let leftPart = []
    let rightPart = []
    let equalPart = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] < pivotElm) {
            leftPart.push(array[i])
        } else if (array[i] === pivotElm) {
            equalPart.push(array[i])
        } else {
            rightPart.push(array[i])
        }
    }
    return quickSort(leftPart).concat(equalPart).concat(quickSort((rightPart)));
}

const countAndFindAllTagsOnPage = function () {
    let tagArray = document.querySelectorAll('*')
    let tagMap = new Map()
    for (let i = 0; i < tagArray.length; i++) {
        if (tagMap.has(tagArray[i].nodeName)) {
            let elCount = tagMap.get(tagArray[i].nodeName)
            tagMap.set(tagArray[i].nodeName, elCount + 1)
        } else {
            tagMap.set(tagArray[i].nodeName, 1)
        }
    }
    return tagMap
}
let rArray = generateRandomArray(1000, 1, 1000)
console.log(rArray)
console.log(findMaxInArray(rArray))
console.log(findMinInArray(rArray))
console.log(findMedianInArray(rArray)[0])
console.log(quickSort(rArray))
console.log(countAndFindAllTagsOnPage())