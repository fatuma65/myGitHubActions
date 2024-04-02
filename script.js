const Greet = () => {
    alert('Welcome to this page');
    document.getElementById('disappear').style.display = 'none'
    document.getElementById('form').innerHTML = 'Welcome to github actions page';
    console.log('Your name is being displayed')

}
// console.log(Greet())

const submit = document.getElementById('submit');
submit.addEventListener('click', Greet)