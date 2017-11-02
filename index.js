function theBeatlesPlay(musicians, instruments){
  var ret = [];
  while (musicians.length > 0) {
    ret.push(musicians.shift() + " plays " + instruments.shift() );
  }
  return ret;
}

function johnLennonFacts(facts){
  for(var i; i< facts.length; i++){
    facts[i] = facts[i] + "!!!";
    console.log(facts[i]);
  }
  return facts;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

johnLennonFacts(facts);
console.log("hello");
