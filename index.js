const Output = require('static-console/output');

module.exports = class AlertOutput extends Output {
	constructor(options) {
		super(options);

		if (this._window === undefined) this.window = window;
	}

	get window() { return this._window; }
	set window(val) { this._window = val; }// Window val

	print(model) {
		if (!this.enabled) return;
		if (!this.rootNode) return;
		this.window.alert(model.data);
	}
}