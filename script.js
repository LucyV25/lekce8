function justFood(peopleCount) {
    const pricePerPerson = 1000;
    const totalPrice = peopleCount * pricePerPerson;
    return `Catering od Just Food pro ${peopleCount} lidí za ${totalPrice} Kč`;
}

function yourMama(peopleCount) {
    const pricePerPerson = 2000;
    const totalPrice = peopleCount * pricePerPerson;
    return `Catering od Your Mama pro ${peopleCount} lidí za ${totalPrice} Kč`;
}

function flavourHaven(peopleCount) {
    const pricePerPerson = 3000;
    const totalPrice = peopleCount * pricePerPerson;
    return `Catering od Flavour Haven pro ${peopleCount} lidí za ${totalPrice} Kč`;
}

function createEvent(eventName, peopleCount, cateringFunction) {
    const cateringMessage = cateringFunction(peopleCount);
    return `Událost ${eventName} s ${cateringMessage}`;
}
console.log(justFood(100));
console.log(yourMama(100));
console.log(flavourHaven(100));

console.log(createEvent("Inaugurace prezidenta", 100, flavourHaven));