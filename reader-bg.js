function onError(error) {
  console.error(`Error: ${error}`);
}

function sendMessageToTabs(tabs) {
  for (let tab of tabs) {
    console.log(`tab: ${tab}`)
    browser.tabs.sendMessage(
      tab.id,
      {}
    ).catch(onError);
  }
}

browser.commands.onCommand.addListener((command) => {
  // console.log("command received");
  browser.tabs.query({
    currentWindow: true,
    active: true
  }).then(sendMessageToTabs).catch(onError);
});
