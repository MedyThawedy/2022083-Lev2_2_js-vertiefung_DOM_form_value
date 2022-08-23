

let el1 = document.getElementById('idSubmitBtn');
let input1 = document.getElementById('vorname');
let input2 = document.getElementById('nachname');
let input3 = document.getElementById('land');

el1.addEventListener('click', (e) => {
    console.clear();
    console.log('---------------------------------------')
    console.log(input1.value);
    console.log(input2.value);
    console.log(input3.value);
    console.log('---------------------------------------')
}
);