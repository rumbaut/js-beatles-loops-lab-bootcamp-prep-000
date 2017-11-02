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


