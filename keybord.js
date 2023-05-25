const setOfWord = [
    "The quick brown fox jumps over the lazy dog.",
    "Jack and Jill went up the hill to fetch a pail of water.",
    "The sun is shining brightly in the clear blue sky.",
    "Peter Piper picked a peck of pickled peppers.",
    "How much wood would a woodchuck chuck if a woodchuck could chuck wood?",
    "She sells seashells by the seashore.",
    "The cat in the hat wore a red and white striped hat.",
    "I scream, you scream, we all scream for ice cream!",
    "The rain in Spain falls mainly on the plain.",
    "Sally sells sea shells down by the seashore.",
    "The early bird catches the worm.",
    "A journey of a thousand miles begins with a single step.",
    "Time flies like an arrow; fruit flies like a banana.",
    "Beauty is in the eye of the beholder.",
    "Actions speak louder than words.",
    "When life gives you lemons, make lemonade.",
    "Practice makes perfect.",
    "A penny saved is a penny earned.",
    "Knowledge is power.",
    "The best way to predict the future is to create it.",
    "Happiness can be found even in the darkest of times if one only remembers to turn on the light.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "In the midst of winter, I found there was within me an invincible summer.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Be yourself; everyone else is already taken.",
    "Life is either a daring adventure or nothing at all.",
    "You miss 100% of the shots you don't take.",
];

const msg = document.getElementById("msg");
const typeWord = document.getElementById("myWords");
const btn = document.getElementById("btn");

let startTime, endTime;

const playGame = () => {
    let randomNumber = Math.floor(Math.random() * setOfWord.length);
    msg.innerText = setOfWord[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
};

const endPlay = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime) / 1000);
    console.log(totalTime);

    let totalStr = typeWord.value;
    let wordCount = wordCounter(totalStr);

    let speed = Math.round((wordCount / totalTime) * 60);
    let finalMsg = "You typed total at " + speed + " words per minutes. ";
    finalMsg += compareWords(msg.innerText, totalStr);
    msg.innerText = finalMsg;
};

const compareWords = (str1, str2) => {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;

    words1.forEach(function(item, index) {
        if (item == words2[index]) {
            cnt++;
        }
    });

    let errorWords = (words1.length - cnt);
    let accuracy = Math.round(cnt / words1.length * 100);
    return (" " + cnt + " correct out of " + words1.length + " words and the total number of error are " + errorWords + "." + " Your  accuracy " + accuracy + " %");

};
const wordCounter = (str) => {
    let responce = str.split(" ").length;
    console.log(responce);
    return responce;
};



btn.addEventListener('click', function() {
    if (this.innerText === 'Start') {
        typeWord.disabled = false;
        playGame();
    } else if (this.innerText == "Done") {
        typeWord.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
});