function theBeatlesPlay(musicians, instruments){
  var ret = [];
  while (musicians.length > 0) {
    ret.push(musicians.shift() + " plays " + instruments.shift() );
  }
  return ret;
}
