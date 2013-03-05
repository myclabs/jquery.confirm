# jquery.confirm

Confirm dialogs for buttons and links.

## Requirements

- jQuery > 1.8
- [Bootstrap](http://twitter.github.com/bootstrap/) 2.* for the modals

## Usage

```html
<a href="home" class="confirm">Go to home</a>
```

```javascript
$(".confirm").confirm();
```

Any click on the link will pop up a dialog asking the user to confirm the action.

## Advanced usage

```html
<button class="confirm" type="button">Delete the comment</button>
```

```javascript
$(".confirm").confirm({
    text: "Are you sure you want to delete that comment?",
    confirm: function(button) {
        delete();
    },
    cancel: function(button) {
        // nothing to do
    },
    confirmButton: "Yes I am",
    cancelButton: "No"
});
```
