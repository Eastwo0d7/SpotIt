function playGame(){
    var cards = [
        "images/20200515_121628.jpg","images/20200515_121633.jpg","images/20200515_121639.jpg",
        "images/20200515_121645.jpg","images/20200515_121650.jpg","images/20200515_121655.jpg",
        "images/20200515_121700.jpg","images/20200515_121705.jpg","images/20200515_121709.jpg",
        "images/20200515_121724.jpg","images/20200515_121729.jpg","images/20200515_121733.jpg",
        "images/20200515_121740.jpg","images/20200515_121745.jpg","images/20200515_121750.jpg",
        "images/20200515_121754.jpg","images/20200515_121800.jpg","images/20200515_121807.jpg",
        "images/20200515_121812.jpg","images/20200515_121816.jpg","images/20200515_121821.jpg",
        "images/20200515_121827.jpg","images/20200515_121832.jpg","images/20200515_121837.jpg",
        "images/20200515_121841.jpg","images/20200515_121846.jpg","images/20200515_121851.jpg",
        "images/20200515_121856.jpg","images/20200515_121904.jpg","images/20200515_121910.jpg",
        "images/20200515_121916.jpg","images/20200515_121921.jpg","images/20200515_121926.jpg",
        "images/20200515_121931.jpg","images/20200515_121936.jpg","images/20200515_121940.jpg",
        "images/20200515_121945.jpg","images/20200515_121950.jpg","images/20200515_121955.jpg",
        "images/20200515_122001.jpg","images/20200515_122006.jpg","images/20200515_122011.jpg",
        "images/20200515_122016.jpg","images/20200515_122021.jpg","images/20200515_122026.jpg",
        "images/20200515_122033.jpg","images/20200515_122040.jpg","images/20200515_122046.jpg",
        "images/20200515_122050.jpg","images/20200515_122055.jpg","images/20200515_122100.jpg",
        "images/20200515_122105.jpg","images/20200515_122110.jpg","images/20200515_122116.jpg",
        "images/20200515_122120.jpg"
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