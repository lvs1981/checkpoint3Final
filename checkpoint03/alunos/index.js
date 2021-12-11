function Aluno(nome, faltas,notas){
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
    this.media = function(){
        let soma = 0;
        for(let i= 0; i < this.notas.length; i++){
            soma += this.notas[i]
        }
        return soma / this.notas.length;
    }
    this.recebeFalta = function(numFalta){
        this.faltas = numFalta
        return this.faltas;
    }
}
module.exports = {    
    novoAluno: function(nome, faltas, notas){
        const inserirAluno = new Aluno(nome , faltas, notas)
        this.listaAlunos.push(inserirAluno);
        return inserirAluno;
    },
    listaAlunos :[],
}

