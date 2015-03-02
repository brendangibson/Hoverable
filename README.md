# Hoverable
A mixin for hoverable React.js components. 

I wrote this because I got tired of writing the same boilerplate code to handle the hover state on components.  With this class, all you have to do now is mix it in and do some minimal wiring.

## Usage

<pre>
    var ThingWithHover = React.createClass({
        <b>mixins: [Hoverable]</b>,
        render: function () {
            return ( 
                &lt;div <b>{...this.hoverableProps()}</b> >
                    {<b>this.state.hovered</b> ? &lt;HoverDisplay /> : null}
                &lt;/div>
            );
    });
</pre>

## Explanation

Wiring the spread of ````{...this.hoverableProps()}```` onto the hoverable element adds the ````onMouseEnter```` and ````onMouseLeave```` listeners which update ````this.state.hovered````.
