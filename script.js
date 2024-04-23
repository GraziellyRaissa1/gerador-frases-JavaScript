function generate(){
    var quotes ={
        "- Waldemar Valle Martins"  : '"O importante não é vencer todos os dias, mas lutar sempre."',

     "- Aldo Novak"   : '"Perder para a razão, sempre é ganhar."',
      "- Sigmund Freud"  : '"Somos feitos de carne, mas temos de viver como se fôssemos de ferro."',
      "- Sigmund Freud"  : '"A inteligência é o único meio que possuímos para dominar os nossos instintos."',
      "- Platão"          :  '"Não espere por uma crise para descobrir o que é importante em sua vida."',
      "- Platão" : '"Tente mover o mundo – o primeiro passo será mover a si mesmo."',
        "- Platão"  : '"A coisa mais indispensável a um homem é reconhecer o uso que deve fazer do seu próprio conhecimento."',
        "- Sócrates" : '"Existe apenas um bem, o saber, e apenas um mal, a ignorância."',
        "- Sócatres" : '"Aquilo que não puderes controlar, não ordenes."',
        " - Sócrates" : '"Aquilo que não puderes controlar, não ordenes."',
        " - Sócrates" : '"Aquilo que não puderes controlar, não ordenes."',
        "- Charles Chaplin"  : '"A persistência é o caminho do êxito."',
       "- Desconhecido" : '"A coragem não é ausência do medo; é a persistência apesar do medo."' ,
        "- Machado de Assis" : '"Creia em si, mas não duvide sempre dos outros."'
    }
    var authors= Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote =quotes[author];

    document.getElementById("quote").innerHTML= quote;

    document.getElementById("author").innerHTML= author;
}