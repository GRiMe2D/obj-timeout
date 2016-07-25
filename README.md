# obj-timeout
Object wrapper for setTimeout function

# Why
It can be very useful if you're writing web applications using React.js.
```javascript
let objTimeout = require('obj-timeout');

let App = React.createClass({
	waiter: null,
	componentDidMount: function() {
		this.waiter = new objTimeout(() => {
			console.log('waited')
		}, 2000);
	},
	componentWillUnmount: function() {
		this.waiter.destroy()
	},
	...
});

```
