// get symmetric difference between two sets

function getSymDifferenceForTwoSets(arr1, arr2) {
    const counter = {};

    for (const number of arr1) {
        if (!counter[number]) counter[number] = ["A"];
    }

    for (const number of arr2) {
        if (counter[number]) counter[number].push("B");
        if (!counter[number]) counter[number] = ["B"];
    }

    console.log(counter);
}

// -------------------------------

// get symmetric difference

function sym(...args) {
    const argumentArrays = [...args];
    let currentDifference = getSymDifferenceForTwoSets(
        argumentArrays[0],
        argumentArrays[1]
    );
    console.log(argumentArrays);
}

// -------------------------------

sym([1, 2, 3], [5, 2, 1, 4, 4]);