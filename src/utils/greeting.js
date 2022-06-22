const hours = new Date().getHours();
let greeting;
if (hours < 12) {
  greeting = "Good morning, friend.";
} else if (hours >= 12 && hours <= 17) {
  greeting = "Good afternoon, friend.";
} else {
  greeting = "Good evening, friend.";
}

export default greeting;