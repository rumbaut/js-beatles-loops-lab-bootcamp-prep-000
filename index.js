function theBeatlesPlay(musicians, instruments){
  var ret = [];
  while (musicians.lenght > 0) {
    ret.push(musicians.pop() + " plays " + instruments.pop() );
  }
  return ret;
}
