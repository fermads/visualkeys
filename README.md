# visualKeys

VisualKeys is a jQuery plugin that give users an alternative way to control
your web application without (necessarily) using a mouse. It's best on web
interfaces where users have to execute repetitive tasks giving them a faster
way to do the job.

## Install

  Add `dist/visualkeys-[version].min.js` and `dist/visualkeys-[version].min.css`
  to your page

```html
<link rel="visualkeys-[version].min.css" />
<script src="jquery-[version].min.js"></script>
<script src="visualkeys-[version].min.js"></script>
```

## Usage

    $.visualkeys(options);

1. Hit `ctrl+space`. A menu will appear at the bottom of the page.
2. Hit `v` to execute the "view source code" shortcut and see the code bellow.
3. That's it! You can configure any action to any key. You can also alt+shift+v as a faster shortcut.


## Options

`options` is an object with the following properties:
```js
{
  86 : { // key press to execute shortcut
    text : '<i>[key]</i><b>command</b> description', // text to show on menu
    exec : function(){/* will be executed when key is pressed */},
    hide : function(){/* will hide this menu item if this returns true */}
  }
}

hide option is used as a context. To show, for example, a shortcut that
exists on one page but not on the other, one could do $

hide : function() { return ('page.selecor').length > 0; }


## Also...
- change the appearence of the menu by editing visualkeys.css
- bind esc to a exec:function(). It'll be executed right away, not showing the menu.
- the hide:value can be used to turn a shortcut visible/hidden based on a context. What? How?
- open the menu and mouse click a shortcut. It'll be executed.
- as an alternative to ctrl+space you can use f9 or shift+space to open the menu.
- unbind and remove visualkeys with $.visualkeys('remove').
