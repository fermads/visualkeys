$.visualkeys({
  '86' : {
    text : '<i>v</i><b>View options</b> configuration for this demo',
    exec : function(){location.href = 'index.js';}
  },
  '65' : {
    text : '<i>a</i><b>This will be hidden because "hide" returns true</b> ',
    exec : function(){},
    hide : function() {return $('h1').length === 1;}
  },
  '83' : {
    text : '<i>s</i><b>Save</b> your current work',
    exec : function(){}
  },
  '39' : {
    text : '<i>&rarr;</i>Align all text to the <b>right</b>',
    exec : function(){$('body').css('text-align','right');}

  },
  '66' : {
    text : '<i>b</i>Change <b>background to red</b>',
    exec : function(){$('body').css('background','red');}
  },
  '71' : {
    text : '<i>g</i><b>go to Disney</b> Land',
    exec : function(){ location.href='http://disney.com/';}
  }
});