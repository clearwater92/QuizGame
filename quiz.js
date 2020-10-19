(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        
        if (ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong answer. Try again :)');
            sc = callback(false);
        }
        
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('------------------------------');
    }
    
    
    var q1 = new Question('2020년 10월 현재 세계에서 가장 시가총액이 많은 기업은?',
        ['Apple', 'Microsoft', 'Amazon', 'Google'],
        0);

    var q2 = new Question('주식은 채권보다 안전한 종목이다',
        ['Yes', 'No'],
        1);

    var q3 = new Question('베트남에서 가장 인구가 많은 도시는?',
        ['하노이', '다낭', '호치민'],
        2);

    var q4 = new Question('2018년 월드컵이 열린 국가는?',
        ['독일', '남아프리카공화국', '브라질', '러시아'],
        3);

    var q5 = new Question('파이썬은 C보다 빠르다',
        ['Yes', 'No'],
        1);

    var q6 = new Question('다음 DBMS중 성격이 다른 하나는?',
        ['Oracle', 'MongoDB', 'MySQL'],
        1);
    
    var questions = [q1, q2, q3, q4, q5, q6];
    
    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();
    
    
    function nextQuestion() {

        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();

        var answer = prompt('Please select the correct answer.');

        if(answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            
            nextQuestion();
        }
    }
    
    nextQuestion();
    
})();