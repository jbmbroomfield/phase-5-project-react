const addOrUpdate = (state, newObjects) => {
    if (!Array.isArray(newObjects)) {
        newObjects = [newObjects]
    }
    let newState = [...state]
    for (const newObject of newObjects) {
        newState = addOrUpdateObject(newState, newObject)
    }
    return newState
}


const addOrUpdateObject = (state, newObject) => {
    const newState = [...state]
    const existingObject = findObject(newState, newObject)
    if (existingObject) {
        existingObject.attributes = {...newObject.attributes}
    } else {
        newState.push(newObject)
    }
    return newState
}

const findObject = (state, newObject) => {
    const newSlug = newObject.slug || newObject.attributes?.slug
    return state.find(object => {
        const objectSlug = object.slug || object.attributes?.slug
        if (newSlug) {
            return newSlug === objectSlug
        }
        return parseInt(object.id) === parseInt(newObject.id)
    })
}

export default addOrUpdate