let screen=document.getElementById('screen')
function shownum(num) {
    screen.value+=num
}
function total() {
    let total=screen.value.split('×').join('*').split('÷').join('/');
    screen.value=eval(total)
    if (screen.value=='undefined') {
        alert('Enter the question')
    }
}
function deleteall() {
    screen.value=''
}
function deletenum() {
    screen.value=screen.value.slice(0,-1)
}