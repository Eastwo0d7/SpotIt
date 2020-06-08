function playGame(){
    var cards = [
        "images/20200520_112602.jpg","images/20200520_112623.jpg","images/20200520_112637.jpg",
        "images/20200520_112649.jpg","images/20200520_112716.jpg","images/20200520_112731.jpg",
        "images/20200520_112745.jpg","images/20200520_112757.jpg","images/20200520_112810.jpg",
        "images/20200520_112821.jpg","images/20200520_112834.jpg","images/20200520_112844.jpg",
        "images/20200520_112857.jpg","images/20200520_112952.jpg","images/20200520_113001.jpg",
        "images/20200520_113011.jpg","images/20200520_113022.jpg","images/20200520_113032.jpg",
        "images/20200520_113040.jpg","images/20200520_113049.jpg","images/20200520_113058.jpg",
        "images/20200520_113108.jpg","images/20200520_113128.jpg","images/20200520_113150.jpg",
        "images/20200520_113203.jpg","images/20200520_113217.jpg","images/20200520_113232.jpg",
        "images/20200520_113247.jpg","images/20200520_113257.jpg","images/20200520_113314.jpg",
        "images/20200520_113329.jpg","images/20200520_113346.jpg","images/20200520_113405.jpg",
        "images/20200520_113422.jpg","images/20200520_113432.jpg","images/20200520_113444.jpg",
        "images/20200520_113452.jpg","images/20200520_113505.jpg","images/20200520_113514.jpg",
        "images/20200520_113528.jpg","images/20200520_113538.jpg","images/20200520_113550.jpg",
        "images/20200520_113559.jpg","images/20200520_113607.jpg","images/20200520_113616.jpg",
        "images/20200520_113624.jpg","images/20200520_113639.jpg","images/20200520_113648.jpg",
        "images/20200520_113700.jpg","images/20200520_113709.jpg","images/20200520_113718.jpg",
        "images/20200520_113727.jpg","images/20200520_113735.jpg","images/20200520_113743.jpg",
        "images/20200520_113753.jpg"
    ];
    var card1 = cards[Math.floor(Math.random() * cards.length)];
    var card2 = cards[Math.floor(Math.random() * cards.length)];

    if(card1 == card2){
        card1 = cards[Math.floor(Math.random() * cards.length)];
        card2 = cards[Math.floor(Math.random() * cards.length)];
    }else{
        $("#card1").attr("src", card1);
        $("#card2").attr("src", card2);
    }

  }

playGame();