function theBeatlesPlay(musicians, instruments){
  var ret = [];
  while (musicians.length > 0) {
    ret.push(musicians.pop() + " plays " + instruments.pop() );
  }
  return ret;
}
