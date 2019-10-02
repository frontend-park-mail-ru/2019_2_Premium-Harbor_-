const mainPageTemplate = require('./Navbar.html');
export class Navbar {
	constructor(data = {}, parent = document.body) {
		this._data = data;
		this._parent = parent;
	}

	get data() {
		return this._data;
	}

	set data(dataToSet) {
		this._data = {...dataToSet};
	}

	get parent() {
		return this._parent;
	}

	set parent(parent) {
		this._parent = parent;
	}
	renderHeader(isAuthenticated) {
		this._parent.innerHTML = '';
		this._data["login"] = isAuthenticated;
		this._parent.innerHTML = navbarTemplate(this._data);
	}
}