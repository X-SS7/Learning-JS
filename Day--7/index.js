let day = prompt("enter your day");
switch (day) {
    case "monday":
        console.log(`Plan course structure `);
        console.log(`Go to coding meetup`);
        break;
    case "tuesday":
        console.log('Prepare coding challanges');
        break;
    case "wednesday":
    case "thursday":
        console.log(" go out with friends");
        break;
    case "friday":
    case "saturday":
    case "sunday":
        console.log("Chill out");
        break;
    default:
        console.log("Not a valid day");

}