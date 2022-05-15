document.querySelector('button').addEventListener('click', result)
const h2 = document.querySelector('h2')

function mode(array){
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}


function result(){
    let one = document.querySelector('input[name=qOne]:checked').value
    let two = document.querySelector('input[name=qOne]:checked').value
    let three = document.querySelector('input[name=qOne]:checked').value
    let four = document.querySelector('input[name=qOne]:checked').value
    let five = document.querySelector('input[name=qOne]:checked').value
    let answers = [one, two, three, four, five]
    let maxAnswers = mode(answers)
    console.log(maxAnswers)
    console.log(answers)
    if(maxAnswers === 'a'){
        const adjOne = ['Captain', 'Boss']
        const nounOne = ['Killah', 'Deck']
        const wordsOne = {adjOne, nounOne}
        const orderOne = ['adjOne', 'nounOne']
        const selectedOne = orderOne.map(partOfSpeech => {
            const answers = wordsOne[partOfSpeech]
            return answers[Math.floor(Math.random() * answers.length)]
        })
        const resultOne = selectedOne.join(' ')
        h2.innerText = `${resultOne}`

    } else if(maxAnswers === 'b'){
        const adjTwo = ['Boss', 'Big']
        const nounTwo = ['Bastard', 'Killah']
        const wordsTwo = [adjTwo, nounTwo]
        const orderTwo = ['adjTwo', 'nounTwo']
        const selectedTwo = orderTwo.map(partOfSpeech => {
            const choices = wordsTwo[partOfSpeech]
            return choices[Math.floor(Math.random() * choices.length)]
        })
        const resultTwo = selectedTwo.join(' ')
        h2.innerText = `${resultTwo}`
        
    } else if(maxAnswers === 'c'){
        const adjThree = ['Big', 'Major']
        const nounThree = ['Bastard', 'Man']
        const wordsThree = [adjThree, nounThree]
        const orderThree = ['adjThree', 'nounThree']
        const selectedThree = orderThree.map(partOfSpeech => {
            const choices = wordsThree[partOfSpeech]
            return choices[Math.floor(Math.random() * choices.length)]
        })
        const resultThree = selectedThree.join(' ')
        h2.innerText = `${resultThree}`
        

    } else if(maxAnswers === 'd'){
        const adjFour = ['Major', 'Ghostface']
        const nounFour = ['Man','BZA']
        const wordsFour = [adjFour, nounFour]
        const orderFour = ['adjFour', 'nounFour']
        const selectedFour = orderFour.map(partOfSpeech => {
            const choices = wordsFour[partOfSpeech]
            return choices[Math.floor(Math.random() * choices.length)]
        })
        const resultFour = selectedFour.join(' ')
        h2.innerText = `${resultFour}`
        

    } else if(maxAnswers === 'e'){
        const adjFive = ['Incredible','Captain']
        const nounFive = ['Bastard', 'Killah']
        const wordsFive = [adjFive, nounFive]
        const orderFive = ['adjFive', 'nounFive']
        const selectedFive = orderFive.map(partOfSpeech => {
            const choices = wordsFive[partOfSpeech]
            return choices[Math.floor(Math.random() * choices.length)]
        })
        const resultFive = selectedFive.join(' ')
        h2.innerText = `${resultFive}`
        

    }
}