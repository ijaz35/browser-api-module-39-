const showAlert = () => {
    alert('This is an alert message');
};
const getConfirm = () => {
    const confirmMsg = confirm('Do You Need This');
    console.log(confirmMsg);
    if (confirmMsg === true) {
        console.log('We will send it to your address');
    } else {
        console.log('Okay, please confirm when possible');
    }
};
const getName = () => {
    const userInput = prompt('Please enter your name');
    console.log(userInput);
}