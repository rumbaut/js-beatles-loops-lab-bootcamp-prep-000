function theBeatlesPlay(musicians, instruments){
  var ret = [];
  while (musicians.length > 0) {
    ret.push(musicians.shift() + " plays " + instruments.shift() );
  }
  return ret;
}

function johnLennonFacts(facts){
  for(var i = 0; i< facts.length; i++){
    facts[i] = facts[i] + "!!!";
  }
  return facts;
}

function iLoveTheBeatles(n){
  var ret = [];

  while(n++<15){
    ret.push("I love the Beatles!");
  }

  return ret;
}
