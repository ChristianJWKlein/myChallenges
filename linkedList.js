//given a linked list, remove all duplicated nodes.   By the value.
//node {
//     value: 1
//     next_node: newNode(2)
// }

let head = {
  value: 1,
  next: {
    value: 1,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
