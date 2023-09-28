var colours = ["blue", "yellow", "lightpink", "pink", "red", "green"];

const setColour = () => {
    for (let i = 0 ; i < colours.length ; i++){
        $("div").eq(i).css("background", colours[i]);
    }
}

const swipe = () => {
    let lastIndex = colours.pop();
    colours.unshift(lastIndex);
    setColour();
}

setInterval(swipe, 500);
