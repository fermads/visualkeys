/*
 * VisualKeys v.1.0.1
 */

(function($) {

  var item, visible = false, menu, fade;

  // handle keypress
  function bind(e) {
    var key = e.keyCode;

    if((e.shiftKey || e.ctrlKey) && key == 32 || key == 120 && !visible) {
      show();
      return false;
    }
    else if(visible || (e.metaKey || e.altKey) && e.ctrlKey) {
      run(key);
      return false;
    }
    else if(key == 27 && item[27]) { // 1 keystroke keys [esc], [f1-f8]
      item[key].exec(key, item[key]);
    }
  }

  // show menu if already created or build it
  function show() {
    if(menu) { // menu already exists, just show it
 			for(var key in item) {
 				$('#visualkeys.key'+ key).removeClass('hide');
 				if(item[key].hide && item[key].hide())
 					$('#visualkeys.key'+ key).addClass('hide');
 			}

 			visible = true;
      menu.show();
    }
    else {
    	build();
    }
  }

  // build the menu, them show it
  function build() {
  	var content = '', key, i, hide;

    $('body')
      .remove('#visualkeys')
      .append('<div id="visualkeys"><em></em><ul></ul></div>');

    for(key in item) {
      i = item[key];

      if(typeof parseInt(key, 10) != 'number')
      	throw Error('key should ba a number representing a keyCode');

      if(!i.text || typeof i.text != 'string')
      	throw Error('text is required and should be a string');

      if(!i.exec || typeof i.exec != 'function')
      	throw Error('exec is required and should be a function');

      if(i.hide && typeof i.hide != 'function')
      	throw Error('hide should be a function and return true|false');
      else
      	hide = i.hide && i.hide() ? 'hide' : '';

      content += '<li onclick="$.visualkeys('+ key +')" class="key'+ key
      	+' '+ hide +'">'+ i.text +'</li>';
    }

    fade = $('#visualkeys em');
    menu = $('#visualkeys ul');

    menu.hide();
    menu.html(content);

    show();
  }

  // run a selected shortcut and fade it's name
  function run(key) {
    if(!menu)
      build();

    visible = false;
    menu.hide();
    var i = item[key];

    if(!i)
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
    else if (typeof param == 'number') { // make menu clicks work too
      run(param);
    }
    else if (param == 'remove') {
      remove();
    }
  };

})(jQuery);
