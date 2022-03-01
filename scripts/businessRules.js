//LIMITA A DATA PARA A DATA DE HOJE
function dateLimiter() {
    dataAtual = new Date();
    dia = dataAtual.getDate();
    mes = dataAtual.getMonth() + 1;
    ano = dataAtual.getFullYear();

    if (dia < 10) {
        dia = '0' + dia;
    }

    if (mes < 10) {
        mes = '0' + mes;
    }

    data = ano + "-" + mes + "-" + dia;
    document.getElementById('birthDate').setAttribute("max", data);
}

function arredondar(numero) {
    return (Math.round(numero * 100) / 100).toFixed(2);
}

//DEFININDO SALÁRIOS
function calculateSalary() {
    cargo = document.getElementById('occupation').value;
    salario = document.getElementById('salary').value;

    if (salario <= 0 || salario == undefined || salario == null) {
        if (cargo == 'gerente') {
            document.getElementById('totalSalary').value = arredondar(21000.00);
        } else if (cargo == 'analistaDeSistemas') {
            document.getElementById('totalSalary').value = arredondar(11000.00);
        } else if (cargo == 'desenvolvedor') {
            document.getElementById('totalSalary').value = arredondar(9500.00);
        } else if (cargo == 'dba') {
            document.getElementById('totalSalary').value = arredondar(10500.00);
        }
    } else {
        // var salarioReal;
        // if (cargo == 'gerente') {
        //     salarioReal = salario + salario * 0.10;
        //     document.getElementById('totalSalary').value = arredondar(salarioReal);
        // } else if (cargo == 'analistaDeSistemas') {
        //     salarioReal = salario;
        //     document.getElementById('totalSalary').value = arredondar(salarioReal);
        // } else {
        //     document.getElementById('totalSalary').value = arredondar(salario);
        // }
    }

}