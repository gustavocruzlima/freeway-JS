let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40, 96, 150, 210, 260, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

//carro1
let xCarro = 600;
let velocidadeCarro = 2;

//carro2
let xCarro2 = 600;
let velocidadeCarro2 = 2.5;

//carro3
let xCarro3 = 600;
let velocidadeCarro3 = 3.2;

function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i = i +1){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for(let i = 0; i < velocidadeCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];  
  }
}

function voltaPosicaoInicialDoCarro(){
  for(let i = 0; i < xCarros.length; i++){
    if(passouTodaTela(xCarros[i])){
      xCarros[i] = 600;
    }  
  }
}

function passouTodaTela(xCarro){
  return xCarro < -50;
}
