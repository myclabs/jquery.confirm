/**
 * jquery.confirm
 *
 * @version 1.2
 *
 * @author My C-Labs
 * @author Matthieu Napoli <matthieu@mnapoli.fr>
 *
 * @url https://github.com/myclabs/jquery.confirm
 */
(function ($) {

    /**
     * Confirm a link or a button
     * @param options {text, confirm, cancel, confirmButton, cancelButton, post}
     */
    $.fn.confirm = function (options) {
        if (typeof options === 'undefined') {
            options = {};
        }

        options.button = $(this);

        this.click(function (e) {
            e.preventDefault();

            $.confirm(options, e);
        });

        return this;
    };

    /**
     * Show a confirmation dialog
     * @param options {text, confirm, cancel, confirmButton, cancelButton, post}
     */
    $.confirm = function (options, e) {
        // Default options
        var settings = $.extend({
            text: "Are you sure?",
            confirmButton: "Yes",
            cancelButton: "Cancel",
            post: false,
            confirm: function (o) {
                var url = e.currentTarget.attributes['href'].value;
                if (options.post) {
                    var form = $('<form method="post" class="hide" action="' + url + '"></form>');
                    $("body").append(form);
                    form.submit();
                } else {
                    window.location = url;
                }
            },
            cancel: function (o) {
            },
            button: null
        }, options);

        // Modal
        var buttons = '<button class="confirm btn btn-primary" type="button" data-dismiss="modal">'
            + settings.confirmButton + '</button>'
            + '<button class="cancel btn" type="button" data-dismiss="modal">'
            + settings.cancelButton + '</button>';
        var modalHTML = '<div class="confirmation-modal modal hide fade" tabindex="-1" role="dialog">'
            + '<div class="modal-body">' + settings.text + '</div>'
            + '<div class="modal-footer">' + buttons + '</div>'
            + '</div>';

        var modal = $(modalHTML);

        modal.on('shown', function () {
            modal.find(".btn-primary:first").focus();
        });
        modal.on('hidden', function () {
            modal.remove();
        });
        modal.find(".confirm").click(function (e) {
            settings.confirm(settings.button);
        });
        modal.find(".cancel").click(function (e) {
            settings.cancel(settings.button);
        });

        // Show the modal
        $("body").append(modal);
        modal.modal();
    }

})(jQuery);
