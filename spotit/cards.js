function playGame(){
    var cards = [
"spot it/20200515_121628.jpg","spot it/20200515_121633.jpg","spot it/20200515_121639.jpg",
"spot it/20200515_121645.jpg","spot it/20200515_121650.jpg","spot it/20200515_121655.jpg",
"spot it/20200515_121700.jpg","spot it/20200515_121705.jpg","spot it/20200515_121709.jpg",
"spot it/20200515_121724.jpg","spot it/20200515_121729.jpg","spot it/20200515_121733.jpg",
"spot it/20200515_121740.jpg","spot it/20200515_121745.jpg","spot it/20200515_121750.jpg",
"spot it/20200515_121754.jpg","spot it/20200515_121800.jpg","spot it/20200515_121807.jpg",
"spot it/20200515_121812.jpg","spot it/20200515_121816.jpg","spot it/20200515_121821.jpg",
"spot it/20200515_121827.jpg","spot it/20200515_121832.jpg","spot it/20200515_121837.jpg",
"spot it/20200515_121841.jpg","spot it/20200515_121846.jpg","spot it/20200515_121851.jpg",
"spot it/20200515_121856.jpg","spot it/20200515_121904.jpg","spot it/20200515_121910.jpg",
"spot it/20200515_121916.jpg","spot it/20200515_121921.jpg","spot it/20200515_121926.jpg",
"spot it/20200515_121931.jpg","spot it/20200515_121936.jpg","spot it/20200515_121940.jpg",
"spot it/20200515_121945.jpg","spot it/20200515_121950.jpg","spot it/20200515_121955.jpg",
"spot it/20200515_122001.jpg","spot it/20200515_122006.jpg","spot it/20200515_122011.jpg",
"spot it/20200515_122016.jpg","spot it/20200515_122021.jpg","spot it/20200515_122026.jpg",
"spot it/20200515_122033.jpg","spot it/20200515_122040.jpg","spot it/20200515_122046.jpg",
"spot it/20200515_122050.jpg","spot it/20200515_122055.jpg","spot it/20200515_122100.jpg",
"spot it/20200515_122105.jpg","spot it/20200515_122110.jpg","spot it/20200515_122116.jpg",
"spot it/20200515_122120.jpg"
    ];
    var card1 = cards[Math.floor(Math.random() * cards.length)];
    var card2 = cards[Math.floor(Math.random() * cards.length)];

    //   for (var i = 0; i < cards.length; i = i + 2) {
    //     //   var card1 = cards[0];
    //     //   var card2 = cards[1];
    //     var card1 = "spot it/20200515_122120.jpg";
    //     var card2 = "spot it/20200515_122116.jpg";
    //       $("#card1").attr("src", card1);
    //       $("#card2").attr("src", card2);
    //   }

    if(card1 == card2){
        card1 = cards[Math.floor(Math.random() * cards.length)];
        card2 = cards[Math.floor(Math.random() * cards.length)];
    }else{
        $("#card1").attr("src", card1);
        $("#card2").attr("src", card2);
    }

    // $("#card1").attr("src", card1);
    // $("#card2").attr("src", card2);

  }

playGame();