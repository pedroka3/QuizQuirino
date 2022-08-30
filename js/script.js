let btnIniciar = document.getElementById('btnIniciar')
let menu = document.getElementById('menu')
let quiz = document.getElementById('quiz')
let pt = document.getElementById('pontos')
let wrapper = document.getElementById('wrapper')
let final = document.getElementById('telafinal')
let btnReiniciar = document.getElementById('btnReiniciar')
let contpontos = document.getElementById('placar')

let resultDiv = document.getElementById('result');
let scoreDiv = document.getElementById('pontos');

btnIniciar.addEventListener('click',iniciar)
btnReiniciar.addEventListener('click',reiniciar)
function iniciar(){
    menu.style.display = ('none');
    wrapper.style.display = ('flex');
}

function reiniciar(){
    menu.style.display = ('block'); 
    final.style.display = ('none');               

}
let perguntas = [

{
    titulo: 'Quando foi fundada a escola Bento Quirino ?',
    alternativas: ['1910','2022','1915','2042','1948'],
    correta: 0
},
{
    titulo: 'O que é mais importante na aula da Mariana ?',
    alternativas: ['Celular','Conversa','Biologia','Instagram','Pteridófila'],
    correta: 2
},
{
    titulo: 'Qual curso desses não tem turma ?',
    alternativas: ['Games','Nutrição','Edificações','Informática para Internet','Publicidade'],
    correta: 3
},
{
    titulo: 'Qual rede social o Bentinho não tem ?',
    alternativas: ['Instagram','Orkut','Twitter','Facebook','YouTube'],
    correta: 1
},
{
    titulo: 'Quem criou o Bento Quirino ?',
    alternativas: ['Marcela','Michael','Thais','Gustavo_web','Bento Quirino'],
    correta: 4
},
{
    titulo: 'Bento Quirino...',
    alternativas: ['da Silva','Ferreira','dos Santos','Cardoso','Web'],
    correta: 2
},
{
    titulo: 'Qual desses professores usa boina ?',
    alternativas: ['Guilherme','Nandara','Claudio','João Luis','Becari'],
    correta: 2
},
{
    titulo: 'Quantas salas de aula tem em cada andar do ensino médio ?',
    alternativas: ['10','8','5','20','1'],
    correta: 1
},
{
    titulo: 'Quais dessas matérias NÃO tem em EAD ?',
    alternativas: ['Gestão e Cidadania','Ingles Instrumental','Comércio Exterior','Direito','Administração de Marketing'],
    correta: 2
},
{
    titulo: 'Quanto custa um moletom do Bento Quirino ?',
    alternativas: ['R$0','R$150','R$200','R$110','R$46'],
    correta: 3
}
]

let app = {
    start: function(){
    
        this.Atualpos = 0;
        this.Totalpontos = 0;
    
        let alts = document.querySelectorAll('.alternativa');
        alts.forEach((element,index)=>{
            element.addEventListener('click', ()=>{
                this.checaResposta(index);
            })
        })
        this.atualizaPontos();
        app.mostraquestao(perguntas[this.Atualpos]);
    },
    
    mostraquestao: function(q){
        this.qatual = q;
        let titleDiv = document.getElementById('titulo');
        titleDiv.textContent = q.titulo;
        let alts = document.querySelectorAll('.alternativa');
        alts.forEach(function(element,index){
            element.textContent = q.alternativas[index];
        })
    
    },
    telafinal: function(){
        console.log('-_-')
        final.style.display = ('block')
        wrapper.style.display = ('none')
        if(this.Totalpontos >= 10){
            contpontos.innerHTML = (`Você fez ${this.Totalpontos} pontos ! <br> 10/10 VOCÊ É UM BENTO LOVER ❤️ !`);
        }
        else{
            contpontos.innerHTML = (`Você fez ${this.Totalpontos} pontos !`)
        }
        this.Totalpontos = 0;

        resultDiv.textContent = "";
        scoreDiv.textContent = `Sua pontuacao: ${this.Totalpontos}`;
        this.Atualpos = 0;
    },
 
    Proximaperg: function(){
        console.log(this.Atualpos)
        this.Atualpos++;
        if(this.Atualpos == perguntas.length){
            this.Atualpos = 0;
        }

        if(this.Atualpos == 0){
            this.telafinal()
        }

        console.log(this.Atualpos)
    },
    
    checaResposta: function(user){
        if(this.qatual.correta == user){
            console.log("Correta")
            this.Totalpontos++;
            this.mostraresposta(true);
        }
        else{
            console.log("Errada")
            this.mostraresposta(false);
        }
        this.atualizaPontos();
        this.Proximaperg();
        this.mostraquestao(perguntas[this.Atualpos]);
    },
    
    atualizaPontos: function(){
        scoreDiv.textContent = `Sua pontuacao: ${this.Totalpontos}`;
    },
    
    mostraresposta: function (correto) {
        let result = '';
        if (correto) {
          result = 'Resposta Correta! +1 ponto';
        }
        else {
          let pergunta = perguntas[this.Atualpos];
          let cindice = pergunta.correta;
          let ctexto = pergunta.alternativas[cindice];
          result = 'Incorreto!';
        }
        resultDiv.textContent = result;
    }
    
    }
    
    app.start();
