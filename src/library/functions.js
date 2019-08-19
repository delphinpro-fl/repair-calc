/*!
 * Аквариус
 * File: checkCompleteRoom.js
 * (c) 2019 delphinpro <delphinpro@gmail.com>
 * licensed under the MIT license
 */

export function checkCompleteRoom(room) {

    if (!room) return false;

    let roomHasArea = [
        'room',
        'hall',
        'kitchen',
        'restroom',
        'bathroom',
        'combinedBathroom',
    ].indexOf(room.type) !== -1;

    if (roomHasArea) {
        if (room.params.area > 0
        // && room.params.ceiling > -1
        // && room.params.floor > -1
        // && room.params.wall > -1
        ) {
            return true;
        }
    }

    if (room.type === 'plumbing') {
        return true;
    }

    return false;
}
