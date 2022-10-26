const questions = document.querySelectorAll('.question');

for(i = 0; i < questions.length; i++){
    questions[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
}