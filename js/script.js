const input = document.querySelector('input');
const lista = document.querySelector('ul');

function addTarefa() {
   const texto = input.value.trim();

  if (texto === '') {
     alert('Digite uma tarefa!');
     return;
  }

const li = document.createElement('li');
   li.innerHTML = `<input type="checkbox"/> <span>${texto}</span> <i class="bi bi-trash" onclick="removerTarefa(this)" title="Excluir"></i>`;

  li.querySelector('span').addEventListener('click', function() {
    this.classList.toggle('concluida');
  });

lista.appendChild(li);
   input.value = '';
}

function removerTarefa(lixeira) {
  
   const li = lixeira.parentElement;
   li.remove();
}

function voltarInicio() {
   window.location.href = '../index.html';
}

function entreAqui() {
   window.location.href = 'html/pag.html';
}

lista.addEventListener('change', function(event) {
  if(event.target.type === 'checkbox') {

    const li = event.target.parentElement;

    if(event.target.checked) {
      li.classList.add('concluida');

    } else {
      li.classList.remove('concluida');
    }
  }
});

function filtrar(tipo) {
  const tarefas = lista.querySelectorAll('li');
  
  tarefas.forEach(li => {
    switch(tipo) {

      case 'concluidas':
        li.style.display = li.classList.contains('concluida') ? 'flex' : 'none';
        break;

      case 'pendentes':
        li.style.display = !li.classList.contains('concluida') ? 'flex' : 'none';
        break;

        case 'todos':
        li.style.display = 'flex';
        break;
    }
  });
}