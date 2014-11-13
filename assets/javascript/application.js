$(document).ready(function(){
  var shortCutKeyData = createShortcutKey();
  new ShortcutKey(shortCutKeyData, "#container");
});