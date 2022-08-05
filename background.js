let color = '2e8b57';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Default background set to seagreen', `color: ${color}`)
});