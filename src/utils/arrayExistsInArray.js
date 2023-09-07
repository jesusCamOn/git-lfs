export const arrayExistsInArray = (array1, array2) => {
    // Un set es un tipo de array con valores únicos 
    // ej: array ["a","a","b"] => set ["a", "b"]
    const set1 = new Set(array1)
    const set2 = new Set(array2)

    for (const item of set1) {
        if (!set2.has(item)) {
            return false;
        }
    }
    return true
}
