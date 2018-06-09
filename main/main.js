module.exports = function main(distance, duration) {
    console.log("Debug Info");
    return taximeter(distance, duration);
};

function taximeter(distance, duration){
    let result = 0;
    if(distance <= 2){
        result = 6
    }
    if(distance >2 &&distance <=8){
        result = 6 + 0.8*(distance - 2)
    }
    if(distance >8){
        result = 10.8 + 1.2*(distance - 8)
    }
    return Math.round(result + 0.25*duration)
}