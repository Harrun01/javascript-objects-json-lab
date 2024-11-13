(function(){ 
    console.info("Hello JS"); 
    const myNode = document.createElement("div");
    document.getElementById("digitalClock");
    digitalClock.appendChild(myNode);
    const secondHand = document.getElementById("secondHand");
    const minHand = document.getElementById("minHand");
    const hrHand = document.getElementById("hrHand");

    
    const updateTime = () => {
        console.info("tick tock");
        const myDate = new Date();
        myNode.innerHTML = myDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
        const seconds = myDate.getSeconds();
        const rotSeconds = seconds * 6 - 90;
        secondHand.style.transform = `rotate(${rotSeconds}deg)`;
       

    // Get hours and minutes for hour hand rotation
    const hour = myDate.getHours();
    const minutes = myDate.getMinutes();
    const rotHour = (hour % 12) * 30 + minutes * 0.5 - 90; // Each hour is 30 degrees, add 0.5 degrees per minute
    hrHand.style.transform = `rotate(${rotHour}deg)`;


    };
    setInterval(updateTime, 1000);
    updateTime();





})();