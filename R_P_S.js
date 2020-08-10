function rpsGame(yourchoose)
{
    console.log(yourchoose);
    var humanChoose,botChoice;
    humanChoose = yourchoose.id;
    botChoice=nToChoice(ra());
    console.log( 'computer: '+ botChoice);
    results=decideWinner(humanChoose,botChoice);
    console.log(results);
    message=finalMessage(results);
    console.log(message);
    rpsfrontEnd(yourchoose.id,botChoice,message);
}

function ra()
{
    return Math.floor(Math.random()*3);
}

function nToChoice(number)
{
    return ['rock' , 'paper' ,'scissors'][number];
}

function decideWinner(yourChoice,computerChoice)
{
    var rpsdatatypes = {
        'rock':{'scissors':1 ,'rock':0.5 ,'paper':0 },
        'scissors':{'paper':1 ,'scissors':0.5 ,'rock':0 },
        'paper':{'rock':1 ,'paper':0.5 ,'scissors':0 }
    }
    var yourScore = rpsdatatypes[yourChoice][computerChoice];
    var computerScore = rpsdatatypes[computerChoice][yourChoice];
    return[yourScore,computerScore];
}

function finalMessage([yourScore,computerScore])
{
    if(yourScore==0)
        {return {'message': 'You lost!' , 'color': 'red'};
        }
     else if(yourScore==0.5)
        {return {'message': 'Draw!', 'color': 'green'};
        }
    else
        {return {'message': 'You win!', 'color': 'yellow'};
        }
}

function rpsfrontEnd(yourChoice,botChoice,messagee)
{console.log(messagee);
    var imgDataBases = {
         'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
        console.log(messagee['message']);
    var humandiv =document.createElement('div');
    var botdiv =document.createElement('div');
    var messagediv =document.createElement('div');

    humandiv.innerHTML = "<img src=' " + imgDataBases[yourChoice] +" ' height=150 width=150>"
    messagediv.innerHTML = "<h1 style='color: " + messagee['color'] + " ; font-size: 60px ; padding:30 px; '>" + messagee['message'] + "</h1>"
    botdiv.innerHTML = "<img src=' " + imgDataBases[botChoice] +" ' height=150 width=150>"
    
    document.getElementById('flex-box-con3-rps').appendChild(humandiv);
    document.getElementById('flex-box-con3-rps').appendChild(messagediv);    
    document.getElementById('flex-box-con3-rps').appendChild(botdiv);
    
}







