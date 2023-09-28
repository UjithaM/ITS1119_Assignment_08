var letterArray = ["A", "B", "C", "D", "E", "F"];
var items = ["#first", "#second", "#thread", "#fourth", "#fifth", "#sixth"]

const setText = () =>{
    for (let i = 0; i < items.length; i++){
        $(items[i]).text(letterArray[i]);
    }
}
setText();

const swipe = () => {
    let lastIndex = letterArray.pop();
    console.log(lastIndex)
    letterArray.unshift(lastIndex);
    setText();
}

setInterval(swipe, 1000);
