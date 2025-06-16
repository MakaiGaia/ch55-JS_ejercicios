/*Display online status for a list of users.
 

Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`. */

const onlineStatus = function(usersArray){
    let usersOnline = "";
    if (usersArray.length === 1) {
        usersOnline += `${usersArray[0]} is online`;
    } else if(usersArray.length <= 2) {
        usersOnline += `${usersArray[0]}, ${usersArray[1]} are online`; 
    } else {
        let sizeArr = usersArray.length;
        sizeArr = parseInt(sizeArr);
        sizeArr = sizeArr - 2;
        usersOnline += `${usersArray[0]}, ${usersArray[1]} and ${sizeArr} more online`;
    }
    return usersOnline;
}

console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']));
console.log(onlineStatus(['mockIng99']));
console.log(onlineStatus(['mockIng99', 'J0eyPunch']));
console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer', 'neto8', 'kernelEsau']));