browser.runtime.onMessage.addListener(request => {
  if (modalIsOpen) {
    return Promise.resolve({});
  }

  var selObj = window.getSelection();

  var modal = new tingle.modal({
    closeMethods: ['overlay', 'escape'],
    closeLabel: "Close",
    onOpen: function () {
      modalIsOpen = true;
    },
    onClose: function () {
      modalIsOpen = false;
    },
  });

  var text = selObj.toString().replaceAll("\n", "<br/>");
  modal.setContent(`<p class="para-reader_readable">${text}</p>`);
  modal.open();
  return Promise.resolve({});
});

var modalIsOpen = false;
