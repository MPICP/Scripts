// -------------------------------------------------------
//                      DISCLAIMER
// -------------------------------------------------------
// THIS SCRIPT IS FOR PROOF OF WORK ONLY
// PLEASE DON'T USE IT IN THE QUIZ
// CHEATING MAY RESULT IN ZERO MARK OR MORE INTENSE PENALTY
// THE AUTHOR IS NOT LIABLE FOR ANY MISUSE OF THIS SCRIPT
// --------------------------------------------------------

(function () {
  var getQuestions = () => {
    let questionElems = document.getElementsByClassName('question_text');
    let questions = []
    for (let i = 0; i != questionElems.length; ++i) {
      questions.push(questionElems[i].innerText);
    }
    return questions;
  };
  
  var getPrefixSuffix = () => {
    let questions = getQuestions();
    questions = questions.map((elm) => {
      let regex = /(\w*[^_])_+(\w*)/g
      let match = regex.exec(elm);
      return [match[1], match[2]];
    })
    return questions;
  }
  
  var getSuggestion = (preSuf) => {
    let regex = new RegExp(`${preSuf[0]}\\w*${preSuf[1]}`, 'g');
    let ans = window.vocabList.filter((word) => word.match(regex)).toString();
    return ans;
  }
  
  var getSuggestions = () => {
    if (!Array.isArray(window.vocabList)) {
      alert('Please load a valid vocabulary list!');
      return;
    }
    
    let prefixSuffix = getPrefixSuffix();
    let answerInputList = document.getElementsByClassName('question_input');
    
    for (let i = 0; i != prefixSuffix.length; ++i) {
      let question = prefixSuffix[i];
      answerInputList[i].value = getSuggestion(question);
    }
  }
  
  return getSuggestions();
}());
