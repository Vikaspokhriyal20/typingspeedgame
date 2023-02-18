const typing_ground = document.querySelector('#textarea');
const btn = document.querySelector('#btn');
const show_sentence = document.querySelector('#showSentence');
const score = document.querySelector('#score');

let startTime, endTime, totalTimeTaken;

const sentences = [
    'We cannot solve our problems with the same thinking we used when we created them. ',
    'The true sign of intelligence is not knowledge but imagination.',
    'A person who never made a mistake never tried anything new.',
    'Education is what remains after one has forgotten what one has learned in school.',
    'Pure mathematics is, in its way, the poetry of logical ideas.',
    'Life is like riding a bicycle. To keep your balance, you must keep moving.'
];

//step 1

const calculateTypingSpeed = (time_taken) => {
    let totalWords = typing_ground.value.trim();
    let actualWords = totalWords === '' ? 0 : totalWords.split(" ").length;

    if (actualWords !== 0) {
        let typing_speed = (actualWords / time_taken) * 60;
        typing_speed = Math.round(typing_speed);
        score.innerHTML = `Your typing speed is ${typing_speed} words per minutes & you wrote ${actualWords} words & time taken ${time_taken} sec`;
    } else {
        score.innerHTML = `Your typing speed is 0 words per minutes & time taken ${time_taken} sec`;
    }
}

//step 2

const endTypingTest = () => {
    btn.innerText = 'start';
    let date = new Date();
    endTime = date.getTime();
    totalTimeTaken = (endTime - startTime) / 1000;
   
    calculateTypingSpeed(totalTimeTaken);
    show_sentence.innerHTML = '';
    typing_ground.value = '';
   
}

//step3

const startTyping = () => {
    let randomNumber = Math.floor(Math.random() * sentences.length);
    console.log(randomNumber);
    show_sentence.innerHTML = sentences[randomNumber];

    let date = new Date();
    startTime = date.getTime();
    btn.innerText = 'done';
}

//step 4

btn.addEventListener('click', () => {
    switch (btn.innerText.toLowerCase()) {
        case "start":
            typing_ground.removeAttribute('disabled');
            startTyping();
            break;
            case "done":
                typing_ground.setAttribute('disabled','true');
                endTypingTest();
                break;
    }
})






