// get symmetric difference between two sets

function getSymDifferenceForTwoSets(arr1, arr2) {
    const counter = {};
    const difference = [];
    const arr2Unique = Array.from(new Set(arr2));

    for (const number of arr1) {
        if (!counter[number]) counter[number] = ["A"];
    }

    for (const number of arr2Unique) {
        if (counter[number]) counter[number].push("B");
        if (!counter[number]) counter[number] = ["B"];
    }

    for (const key in counter) {
        if (counter[key].length === 1) difference.push(Number(key));
    }

    return difference;
}

// -------------------------------

// get symmetric difference

function sym(...args) {
    const argumentArrays = [...args];

    if (argumentArrays.length < 2) return undefined;

    let currentDifference = getSymDifferenceForTwoSets(
        argumentArrays[0],
        argumentArrays[1]
    );
    for (let i = 2; i < argumentArrays.length; i++) {
        currentDifference = getSymDifferenceForTwoSets(
            currentDifference,
            argumentArrays[i]
        );
    }
    return currentDifference;
}

// -------------------------------

sym([1, 2, 3, 3], [5, 2, 1, 4]);