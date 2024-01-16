# Auto-suggest and Chip Selection using React

## Objective

Implement a React component that enhances user input experience by providing auto-suggest functionality and chip selection. This component allows users to easily select items from a list, converting them into chips with removal options. Additionally, the auto-suggest list dynamically update based on user input.

## Features

### Auto-suggest List

- Clicking on the input field will reveal a list of items.
- The list dynamically filters as the user types, displaying only items that match the input.

### Chips

- Clicking on an item in the list will convert it into a chip displayed at the top of the input field.
- The input field will adjust automatically to accommodate the selected chips.
- Once an item becomes a chip, it's removed from the list.

### Chip Removal

- Each chip includes an "X" icon for removal.
- Clicking the "X" icon associated with a chip removes that chip and add the item back to the list.

### Backspace Handling

- When the input is blank, pressing the backspace key highlight the last chip.
- Pressing backspace again removes the highlighted chip.

[App URL](https://chip-saurabh-singh.vercel.app/ 'Chip Selection')
