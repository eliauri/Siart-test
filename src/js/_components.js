// console.log('components');

const toggleOptions = document?.getElementsByClassName('arrivals__option');
if (toggleOptions) {
    for (let i = 0; i < toggleOptions.length; i++) {
        toggleOptions[i].addEventListener('click', () => {
            toggleOptions[i].classList.toggle('active')
        })
    }
}

const increaseCounters = document?.getElementsByClassName('arrivalt-increas');
if (increaseCounters) {
    for (let i = 0; i < increaseCounters.length; i++) {
        increaseCounters[i].addEventListener('click', (e) => increaseCount(e.target))
    }
}

const decreaseCounters = document?.getElementsByClassName('arrivals__decrease');
if (decreaseCounters) {
    for (let i = 0; i < decreaseCounters.length; i++) {
        decreaseCounters[i].addEventListener('click', (e) => decreaseCount(e.target))
    }
}

function increaseCount(target) {
    let input = target.previousElementSibling;
    let value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}

function decreaseCount(target) {
    let input = target.nextElementSibling;
    let value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}