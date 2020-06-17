/*
A linked list is a collectio of objects called nodes. Each node is linked
to a successor node in the list using an object reference.

While array elements are referenced by their position, linkedLists elements
are referecned by their relationship to other elements in the linked list.
e.g bread follows milk but not bread in second position

Moving through a
linked list involves following the links of the list from the beginning node to the end
node (not including the header node, which is sometimes used as a hook for entry into
a linked list). Something else to notice in the figure is that we mark the end of a linked
list by pointing to a null node

Marking the beginning of a linked list can be a problem. Many linked-list implemen‐
tations include a special node, called the head, to denote the beginning of a linked list.

Inserting a new node into a linked list is a very efficient task. To insert a new node, the
link of the node before the inserted node (the previous node) is changed to point to the
new node, and the new node’s link is set to the node the previous node was pointing to
before the insertion



Removing an item from a linked list is also easy to do. The link of the node before the
removed node is redirected to point to the node the removed node is pointing to, while
also pointing the removed node to null, effectively taking the node out of the linked list.
*/
