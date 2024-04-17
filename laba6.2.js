var indexArray = [10, 20.5, 30, 40.2, 50, "one", "two", "three", "four", "five"];


indexArray.splice(1, 3, "modified", 25.5, 35);


console.log("Модифікований індексний масив:", indexArray);


for (var i = 0; i < indexArray.length; i++) {
    if (typeof indexArray[i] === "number") {
        indexArray[i] *= 2;
    } else if (typeof indexArray[i] === "string") {
        indexArray[i] += indexArray[i]; 
    }
}


console.log("Модифікований індексний масив після операцій:", indexArray);


var associativeArray = {
    "apple": "red",
    "banana": "yellow",
    "orange": "orange",
    "grape": "purple",
    "kiwi": "green"
};


for (var key in associativeArray) {
    associativeArray[key] = associativeArray[key].toUpperCase(); 
}


console.log("Модифікований асоціативний масив:", associativeArray);


var multiDimArray = {
    "fruit": {
        "apple": "red",
        "banana": "yellow"
    },
    "vegetable": {
        "carrot": "orange",
        "spinach": "green"
    }
};


console.log("Значення багатовимірного асоціативного масиву:", multiDimArray);


var browserName = navigator.appName;
var browserVersion = navigator.appVersion;


console.log("Назва браузера:", browserName);
console.log("Версія браузера:", browserVersion);