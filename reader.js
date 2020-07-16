browser.runtime.onMessage.addListener(request => {
  if (modalIsOpen) {
    return Promise.resolve({});
  }

  var selObj = window.getSelection();

  var modal = new tingle.modal({
    closeMethods: ['overlay', 'escape'],
    closeLabel: "Close",
    onOpen: function() {
      modalIsOpen = true;
    },
    onClose: function() {
      modalIsOpen = false;
    },
  });

  modal.setContent(`<p style="line-height: 2em">${selObj}</p>`);
  modal.open();
  return Promise.resolve({});
});

var modalIsOpen = false;
