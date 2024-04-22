const evenFriends = friends => {
    const newFriends = [];
    for (const friend of friends) {
        if (friend.length % 2 === 0) {
            newFriends.push(friend);
        }
    }
    if (newFriends.length === 0) {
        return 'no match';
    } else {
        return newFriends;
    }
}
console.log(evenFriends(['nahida', 'nomana', 'utsho']));
// 817727108522