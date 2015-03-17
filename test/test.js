
QUnit.test('visualkeys init', function( assert ) {
  $.visualkeys({
    66 : {
      text : '<i>b</i>Change <b>background to red</b>',
      exec : function(){$('body').css('background','red')}
    }
  });

  assert.ok($('#visualkeys').length === 1);


});

