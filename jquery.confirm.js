/**
 * jquery.confirm
 * @author My C-Sense
 * @url https://github.com/myc-sense/jquery.confirm
 */
(function($) {
	/**
	 * Confirm a link or a button
	 * @param options {text, confirm, cancel, confirmButton, cancelButton}
	 */
	$.fn.confirm = function(options) {
		// Options
		if (typeof options === 'undefined') {
			options = {};
		}
		if (typeof options.text === 'undefined') {
			options.text = "Are you sure?";
		}
		if (typeof options.confirmButton === 'undefined') {
			options.confirmButton = "Yes";
		}
		if (typeof options.cancelButton === 'undefined') {
			options.cancelButton = "Cancel";
		}
		if (typeof options.confirm === 'undefined') {
			options.confirm = function(o) {
				window.location = $(o).attr('href');
			};
		}
		if (typeof options.cancel === 'undefined') {
			options.cancel = function(o) {
			};
		}
		this.click(function(e) {
			e.preventDefault();
			var button = $(this);
			// Modal
			var buttons = '<button class="confirm btn btn-primary" type="button" data-dismiss="modal">'
				+ options.confirmButton + '</button>'
				+ '<button class="cancel btn" type="button" data-dismiss="modal">'
				+ options.cancelButton + '</button>';
			var modalHTML = '<div class="modal hide fade" tabindex="-1" role="dialog">'
				+ '<div class="modal-body">' + options.text + '</div>'
				+ '<div class="modal-footer">' + buttons + '</div>'
				+ '</div>';

			var modal = $(modalHTML);

			modal.on('shown', function() {
				modal.find(".btn-primary:first").focus();
			});
			modal.on('hidden', function() {
				modal.remove();
			});
			modal.find(".confirm").click(function(e) {
				options.confirm(button);
			});
			modal.find(".cancel").click(function(e) {
				options.cancel(button);
			});

			// Show the modal
			$("body").append(modal);
			modal.modal();
		});
		return this;
	};
})(jQuery);
