function ShortcutKey(shortcutKey, container){
  this.shortcutKey = shortcutKey;

  this.init();

  this.serialize();

  this.content.appendTo($(container));
}

ShortcutKey.prototype = {
  constructor: ShortcutKey,
  init: function(){
    this.content = $('<table id="shortcut-key"></table>');
    $('<caption></caption>').text(this.shortcutKey.title).appendTo(this.content);
    $('<thead><tr><th>快捷键</th><th>说明</th></tr></thead>').appendTo(this.content);
  },

  serialize: function(){
    var me = this;

    this.shortcutKey.shortcutKey.forEach(function(item, index, shortcutKey){
      var $tbody = $('<tbody></tbody>');

      for(property in item){
        var $tr = $('<tr></tr>'),
            str="", arr;

        arr = property.split(' ');
        arr.forEach(function(item, index, propertyArray){
          switch(item){
            case 'c':
              propertyArray[index] = 'Cmd'; break;
            case 'a':
              propertyArray[index] = 'Alt'; break;
            case 't':
              propertyArray[index] = 'Control'; break;
            case 'p':
              propertyArray[index] = 'Space'; break;
            case 'e':
              propertyArray[index] = 'Enter'; break;
            case 'd':
              propertyArray[index] = 'Delete'; break;
            case 's':
              propertyArray[index] = 'Shift'; break;
            case 'b':
              propertyArray[index] = 'Tab'; break;
            case 'na':
              propertyArray[index] = 'NA'; break;
            default:
              break;
          }
        });
        str = arr.join(' + ').replace(/\+\s,,\s\+/g, "或者").replace(/\+\s,\s\+/g, ",");
        $('<td></td>').text(str).appendTo($tr);
        $('<td></td>').text(item[property]).appendTo($tr);

        $tr.appendTo($tbody);
      }

      $tbody.appendTo(me.content);
    });

  }
}
