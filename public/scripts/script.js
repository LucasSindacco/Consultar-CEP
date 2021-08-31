const buttonConsult = document.querySelector('a');
const inputAddress = document.querySelector('.address');
const inputDDD = document.querySelector('.ddd');
const inputDistrict = document.querySelector('.district');
const inputCity = document.querySelector('.city');
const inputState = document.querySelector('.state');

const viewAddres = (address) => {
    inputAddress.value = address.logradouro;
    inputDDD.value = address.ddd;
    inputDistrict.value = address.bairro;
    inputCity.value = address.localidade;
    inputState.value = address.uf;
}

const searchCep = async() => {
    const CEP = document.querySelector('.CEP');
    if (CEP.value === "") {
        window.alert('Insira um CEP');
    } else {
        const URl = `http://viacep.com.br/ws/${CEP.value}/json/`;
        const dice = await fetch(URl);
        const address = await dice.json();
        if (address.hasOwnProperty('erro')) {
            window.alert('Cep nao encontrado');
        } else {
            viewAddres(address);
        }
    }
}

buttonConsult.addEventListener('click', searchCep)

function mascara(o, f) {
    v_obj = o
    v_fun = f
    setTimeout("execmascara()", 1)
}

function execmascara() {
    v_obj.value = v_fun(v_obj.value)
}

function telefone(v) {
    v = v.replace(/\D/g, "") //Remove tudo o que não é dígito
    v = v.replace(/(\d{5})(\d)/, "$1-$2") //Coloca hífen entre o quarto e o quinto dígitos
    return v
}