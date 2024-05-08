let btn1 = document.getElementById('btn1');
let inp = document.getElementById('inp');
let content = document.querySelector('.content');
btn1.onclick = () => {
    let todo = document.createElement('div');
    let remo = document.createElement('button')
    todo.classList.add('todo');
    remo.classList.add('remo');
    todo.innerHTML = inp.value;
    content.appendChild(todo);
    todo.appendChild(remo)
    if (inp.value == '' ) {
        content.removeChild(todo);
        alert('من فضلك ادخل نص ')
        inp.style.borderColor = '#790202'
    }
    else {
        inp.style.border = '2px solid green';
    }
    remo.onclick = () => {
        todo.remove();
    } 
    inp.value = '';
}
console.log ( process.argv )