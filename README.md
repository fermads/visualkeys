# visualKeys

VisualKeys is a jQuery plugin to configure shortcuts to users most used actions.
It's best on web interfaces where users have to execute repetitive tasks giving
them a faster way to do the job.

![Menu](https://raw.githubusercontent.com/fermads/visualkeys/master/web/visualkeys.png)

## Install

  Add `dist/visualkeys-[version].min.js` and `dist/visualkeys-[version].min.css`
  to your page

```html
<link rel="visualkeys-[version].min.css" rel="stylesheet"/>
<script src="jquery-[version].min.js"></script>
<script src="visualkeys-[version].min.js"></script>
```

## Usage

    $.visualkeys(options);


`options` is an object with the following properties:
```js
{
  86 : { // key press to execute shortcut
    text : '<i>[key]</i><b>command</b> description', // text to show on menu
    exec : function(){/* will be executed when key is pressed */},
    hide : function(){/* will hide this menu item if this returns true */}
  }
}
```

The `hide` option can be used as a context. To show, for example, a shortcut that
exists on one page but not on the other:

```js
hide : function() { return ('page.selector').length > 0; }
```

## Other options
- change the appearence of the menu by editing visualkeys.css
- bind esc to a exec:function(). It'll be executed right away, not showing the menu
- open the menu and mouse click a shortcut. It'll be executed
- F9 can be used as an alternative to ctrl+space to open the menu
- unbind and remove visualkeys with $.visualkeys('remove')

## Demo
There is a example at `web/index.html`

