const addOrUpdate = (state, newObjects) => {
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

const findObject = (state, newObject) => (
    state.find(object => (
        parseInt(object.id) === parseInt(newObject.id)
    ))
)

export default addOrUpdate