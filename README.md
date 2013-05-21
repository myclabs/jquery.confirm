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

## Options

List of the options:

* `text`: Text to display in the dialog
* `confirm`: Handler executed when the user confirms
* `cancel`: Handler executed when the user cancels
* `confirmButton`: Label of the confirm button
* `cancelButton`: Label of the cancel button
* `post`: If false (default) and no confirm handler is set, redirects the user to the URL of the button/link with a GET request. If true, redirects with a POST request (like a form submission).

Example:

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
    cancelButton: "No",
    post: true
});
```

## Manual triggering

You can manually trigger the confirmation dialog:

```javascript
// Will immediately show the confirmation popup
$.confirm({
    text: "Are you sure you want to delete that comment?",
    confirm: function() {
        delete();
    },
    cancel: function() {
        // nothing to do
    }
});
```

## Change log

* **1.1.0** Trigger the confirm dialog manually with `$.confirm()`
* **1.0.0** First release
