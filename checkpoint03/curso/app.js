let alunos =  require('../alunos');

let aluno1 = alunos.novoAluno('Luiz', 0, [7.9, 7.7, 7.7])
let aluno2 = alunos.novoAluno('João', 0, [6.9, 7.3, 9])
let aluno3 = alunos.novoAluno('Ana', 0, [6, 8.2, 4.7])
let aluno4 = alunos.novoAluno('Maria', 0, [7, 6, 8.3])
let aluno5 = alunos.novoAluno('Pedro', 0, [4, 5.9, 8.1])
let aluno6 = alunos.novoAluno('Lucas', 0, [7, 8.4, 6,5])

curso ={
    nome: 'Programação Imperativa',
    notaDeAprovacao: 7,
    faltasMaximas: 10,
    aprovacao: function(aluno){
        if(aluno.media() >= this.notaDeAprovacao && aluno.faltas < this.faltasMaximas||
        aluno.media() >= (this.notaDeAprovacao * 1.1) && aluno.faltas === this.faltasMaximas){
            return  aluno.nome + ' foi aprovado(a) com a media ' + aluno.media().toFixed(2) + ' e com ' + aluno.faltas + ' faltas'
        }else{
            return aluno.nome + ' foi reprovado(a) com a media ' + aluno.media().toFixed(2) + ' e com ' + aluno.faltas +' faltas'
        }
    },   
    listaAprovados: function(){
        let verificaAprovado = []
        for(let i = 0; i < alunos.listaAlunos.length; i++){
        verificaAprovado.push(this.aprovacao(alunos.listaAlunos[i]))  
        }
        return verificaAprovado
    }  
}  
aluno1.recebeFalta(10)
aluno2.recebeFalta(8)
aluno3.recebeFalta(2)
aluno4.recebeFalta(7)
aluno5.recebeFalta(9)
aluno6.recebeFalta(5)

//console.log(alunos.listaAlunos)

//console.log(curso.aprovacao(aluno1))

console.log(curso.listaAprovados())
