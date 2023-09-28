var letterArray = ["A", "B", "C", "D", "E", "F"];
const setText = () =>{
    for (let i = 0; i < letterArray.length; i++){
        $("span").eq(i).text(letterArray[i]);
    }
}
setText();

const swipe = () => {
    let lastIndex = letterArray.pop();
    letterArray.unshift(lastIndex);
    setText();
}

setInterval(swipe, 1000);
