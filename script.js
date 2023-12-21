// scroll para parte do site

const linkSobre = document.getElementById('link_sobre');
const linkCursos = document.getElementById('link_cursos');
const linkProjetos = document.getElementById('link_projetos');
const linkSkills = document.getElementById('link_skills');

function scrollLink(IrPara) {
    var local = document.getElementById(IrPara);
    local.scrollIntoView({ behavior:'smooth' });
}

linkSobre.addEventListener('click', (event)=> {
    event.preventDefault();
    scrollLink('sobre');
});

linkCursos.addEventListener('click', (event)=> {
    event.preventDefault();
    scrollLink('cursos');
});

linkProjetos.addEventListener('click', (event)=> {
    event.preventDefault();
    scrollLink('projetos');
});

linkSkills.addEventListener('click', (event)=> {
    event.preventDefault();
    scrollLink('skills');
});

// efeito da escrita

var typed = new Typed(('#home_profissao'), {
    strings: ['Desenvolvedor Front End','Analista de Bi'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop : true
  });

// efeito de revelação

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.sobre', { origin: 'left' });
ScrollReveal().reveal('.cursos', { origin: 'left' });

// Efeito de manter preenchimento no menu

let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let scrollY = window.scrollY;
        let id = sec.getAttribute('id');

        let id_link = document.getElementById('link_' + id);

        if (scrollY >= top && scrollY <= height + top) {
            id_link.classList.add('activate');
        } else {
            id_link.classList.remove('activate');
        }
    });
}


const menuHTML = document.getElementById('menu_lista');
const barMenu = document.getElementById('menu_ham');

let Activate = true;

function changeBar_to_X () {
    barMenu.classList.remove('fa-bars');
    barMenu.classList.add('fa-xmark');
    menuHTML.style.top = '30px';
    Activate = true;
}

function changeX_to_Bar() {
    barMenu.classList.remove('fa-xmark');
    barMenu.classList.add('fa-bars');
    menuHTML.style.top = '-100vh';
    Activate = false;
}

function validation () {
    if (Activate === true) {
        changeX_to_Bar();
    } else {
        changeBar_to_X();
    }
}
barMenu.addEventListener('click', validation);