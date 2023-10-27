let heroisXP = [
    ["David o Guerreiro", 10500],
    ["Juan o berserk", 5000],
    ["Clark o arqueiro", 10000]
  ];
  
  let patente = " ";
  const experiencia = 11000;
  
  if (experiencia <= 1000) {
    patente = "ferro";
  } else if (experiencia >= 1001 && experiencia <= 2000) {
    patente = "bronze";
  } else if (experiencia >= 2001 && experiencia <= 5000) {
    patente = "prata";
  } else if (experiencia >= 6001 && experiencia <= 7000) {
    patente = "ouro";
  } else if (experiencia >= 7001 && experiencia <= 8000) {
    patente = "platina";
  } else if (experiencia >= 8001 && experiencia <= 9000) {
    patente = "Ascendente";
  } else if (experiencia >= 9001 && experiencia <= 10000) {
    patente = "Imortal";
  } else if (experiencia >= 10001) {
    patente = "Radiante";
  }
  
  
  for (let i = 0; i < heroisXP.length; i++) {
    if (experiencia >= heroisXP[i][1]) {
      heroi = heroisXP[i][0];
      break;
    }
  }
  
  console.log("O Herói de nome " + heroi + " está no nível de " + patente);
  