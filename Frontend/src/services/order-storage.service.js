import {
    utilService
} from "./utilService.js";
const gData = [];

export const storageService = {
    query,
    post,
};
//LIST
async function query(entityType, filterBy) {
    let entities = await JSON.parse(localStorage.getItem(entityType)) || [];
    if (!entities || !entities.length) {
        entities = gData;
      _save(entityType, entities);
    }
    return entities;
}
//ADD
async function post(entityType, newEntity) {
    newEntity._id = utilService.makeId();
    const entities = await query(entityType);
    entities.push(newEntity);
     _save(entityType, entities);
    return entities;
}
//SAVE TO STORAGE
function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities));
}