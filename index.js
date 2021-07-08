function addingEventListener(){
    const input = document.getElementById('input');
    const div = document.getElementByClass('div', [4]);

    function clickAlert() {
        alert('I was clicked!');
    }
    
    input.addEventListener('click', clickAlert);
}

addingEventListener();


