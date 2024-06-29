var Hour = new Date().getHours();
 var greeting;
    if (Hour < 12) {
        greeting = "Good morning!";
    } else if (Hour < 16) {
        greeting = "Good afternoon!";
    } else if (Hour < 22) { 
        greeting = "Good evening!";
    } else{
        greeting = "Good night!";
    }

    alert(greeting);