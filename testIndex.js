questions = ["Введите ФИО", "Введите номер телефона", "Введите модель", "Введите причину сдачи"];
document.getElementById("a1").value = questions[0];
document.querySelector('button').addEventListener('click', myClick1);
function myClick1() {
    let exportBd = ""  
    exportBd = document.querySelector('.buttonBot').value
    for (let i = 1; i <= 4; i++) {
        evenInput = i * 2
        evenEnter = evenInput + 1        
        let listtest = document.getElementById('a' + evenInput).value
        if(listtest ===''){
            document.getElementById('a' + evenInput).value = exportBd
            if(evenEnter<8)document.getElementById('a' + evenEnter).value = questions[i]
            focusForm()           
            return 
        }; 
    };      
};
