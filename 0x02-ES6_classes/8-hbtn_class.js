export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Getter and setter for 'size' attribute
  get size() {
    return this._size;
  }
  set size(newSize) {
    this._size = newSize;
  }

  // Getter and setter for 'location' attribute
  get location() {
    return this._location;
  }
  set location(newLocation) {
    this._location = newLocation;
  }

  // Cast to Number returns the size
  valueOf() {
    return this._size;
  }

  // Cast to String returns the location
  toString() {
    return this._location;
  }
}
