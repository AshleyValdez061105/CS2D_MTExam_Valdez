//object named userProfile to store the user's full name, age, favorite number, and favorite colors

let userProfile = {
  //Each prompt() call displays a dialog box asking for the specific information.The user's input is then stored as the value for the corresponding property in the userProfile object
  fullName: prompt("Enter your full named:"),
  age: prompt("Enter your age:"),
  favoriteNumber: prompt("Enter your favorite number:"),
  // This section creates an array named favoriteColors within the userProfile object.It uses prompt() three times to ask the user for their three favorite colors.
  favoriteColors: [
    prompt("Enter your first favorite color:"),
    prompt("Enter your second favorite color:"),
    prompt("Enter your third favorite color:"),
  ],
};
// Log the entire object to the console
console.log(userProfile);
