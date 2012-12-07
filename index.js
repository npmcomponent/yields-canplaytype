
/**
 * cache audio
 */

var audio = window.Audio && new window.Audio();

/**
 * Wether or not the given type can
 * be played.
 *
 * @param {String} type (defaulted to `audio/mpeg`)
 * @return {bool}
 */

module.exports = function(type){
  var t = type || 'audio/mpeg;', ret;
  if (!audio) return false;
  ret = audio.canPlayType(t);
  if ('no' == ret) return false;
  if ('' == ret) return false;
  return ret;
}
