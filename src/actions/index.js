export function selectBook(book) {
  // select book is an action creator that needs to return an Object with a Type property and Payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}

