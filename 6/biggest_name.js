const friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let bigName = friends[0];
for (let friend of friends) {
  if (bigName.length < friend.length) bigName = friend;
}
console.log(bigName);
