class Player{

    //constructor(){}

    getCount(){

       var countRef = database.ref("playerCount");
       countRef.on("value", function(data){playerCount=data.val();})

    }

    writeCount(count){
        database.ref("/").update({
            playerCount:count
    })

}

    update(name){
        var playerIndex="Player" +playerCount;
        databse.ref(playerIndex).set({
            name:name
        })
    }

}