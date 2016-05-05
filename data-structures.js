class List {
  constructor(...items) {
    if (Array.isArray(items[0])) {
      items = items[0]
    }

    this.val = items[0] !== undefined ? items[0] : null
    this.next = items.length > 1 ? new List(items.slice(1)) : null
  }

  append(item) {
    if (this.val === null) {
      this.val = item
    } else if (this.next === null) {
      this.next = new List(item)
    } else {
      this.next.append(item)
    }
  }
}

export {
  List
}
