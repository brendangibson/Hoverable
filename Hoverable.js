/**
*
* Mixin to stop me having to write the same thing over and over
* Provides methods and props for components that appear differently on hover
* 
* Usage:
* 
* mixins: [Hoverable],
* render: function () {
*   return <div {...this.hoverableProps()} />
*     {this.state.hovered ? <HoverDisplay /> : null};	
}
*/

var Hoverable = {
	
	getInitialState: function () {
		return {
			hovered: false
		};
	},

	onMouseEnter: function () {
		this.setState({hovered: true});
	},

	onMouseLeave: function () {
		this.setState({hovered: false});
	},

	/**
	* Include this as a spread on element that should be hoverable
	*
	*/
	hoverableProps: function () {
		return {
			onMouseEnter: this.onMouseEnter,
			onMouseLeave: this.onMouseLeave
		};
	}

};

module.exports = Hoverable;
