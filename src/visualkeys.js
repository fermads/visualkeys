/*
 * VisualKeys v.1.0.1
 */

(function($) {

  var item, visible, menu, fade;

  // handle pressed keys
  function bind(e) {
    var key = e.keyCode;

    if((e.shiftKey || e.ctrlKey) && key == 32 || key == 120 && !visible) {
      show();
      return false;
    }
    else if(visible || (e.metaKey || e.altKey) && e.shiftKey) {
      run(key);
      return false;
    }
    else if(key == 27 && item[27]) { // 1 keystroke keys [esc], [f1-f8]
      item[key].exec(key, item[key]);
    }
  }

  // initialize menu or show menu if already created
  function show() {
    visible = true;

    if(menu) { // menu already exists, just show it
      menu.show();
      return;
    }

    $('body')
      .remove('#visualkeys')
      .append('<div id="visualkeys"><em></em><ul></ul></div>');

    var content = '', key, i;
    for(key in item) {
      i = item[key];
      if(!i.hide) {
        content += '<li onclick="$.visualkeys('+ key +')" class="key'
          + key +'">'+ i.text +'</li>';
      }
    }

    fade = $('#visualkeys em');
    menu = $('#visualkeys ul');
    menu.html(content);
  }

  // run a selected shortcut and show the fade name
  function run(key) {
    if(!menu)
      show();

    visible = false;
    menu.hide();
    var i = item[key];

    if(!i || i.hide)
      return;

    setTimeout(function(){
      i.exec(key, i);
    }, 100);

    var f = $('.key'+ key +' b').text() || '';
    fade.html(f).show().fadeOut('slow', function(){
      fade.empty();
    });
  }

  function remove() {
    $('#visualkeys').remove();
    $(document).unbind('keydown', bind);
    $('iframe').contents().unbind('keydown', bind);
  }

  function init(param) {
      menu = false;
      item = param;

      $(document).keydown(bind);

      setTimeout(function(){
        $('iframe').contents().keydown(bind);
      }, 3000); // wait for dynamic created iframes
  }

  $.visualkeys = function(param) {
    if (typeof param == 'object') {
      init(param);
    }
    else if (typeof param == 'number') { // menu mouse click
      run(param);
    }
    else if (param == 'remove') {
      remove();
    }
  };

})(jQuery);
