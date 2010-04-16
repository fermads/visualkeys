module('Core');

vk = $('#vk');

test('', function(){
	expect(4);
	ok( $.visualkeys, '$.visualkeys object' )
	$.visualkeys({
		66 : {
			text : '<i>b</i><b>bbb</b>',
			exec : function(k){
				start();
				ok($('#visualkeys i').html() == 'b' 
					&& $('#visualkeys ul').length == 1
					&& $('#visualkeys b').length == 1, 'initialization')
				ok(k == 66, '$.visualkeys([key])')
				$.visualkeys('remove');
				ok($('#visualkeys').length == 0, '$.visualkeys(\'remove\')')
				 
			}
		}
	});
	
	stop();
	$.visualkeys(66);

})

module('Parameters');

test('', function(){

	$.visualkeys({
		65 : {
			text : '<i>a</i><b>description text</b>',
			exec : function(k){
				start();
				vk.html(k);
				ok( $('#visualkeys i').html() == 'a', 'parameter overwrite' )
				equals( $('#visualkeys i').html(), 'a', 'key' )
				equals( $('#visualkeys b').html(), 'description text', 'text' )
				ok( $('#visualkeys i').length, 'hide' )
				equals( vk.html(), '65', 'exec' )
			},
			hide : false
		}
	})

	expect(5)
	stop();
	$.visualkeys(65);

})