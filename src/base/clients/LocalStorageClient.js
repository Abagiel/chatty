import { storage } from './storage';

export class LocalStorageClient {
	constructor(name) {
		this.name = name;
	}

	save = (state) => {
		storage(this.name, state);
	}

	get = () => {
		return storage(this.name);
	}
}