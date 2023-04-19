const targetNode = document.querySelector('body');
const elementClass = '.Layout-sc-1xcs6mc-0.bANGbT.chat-signup-gate-overlay';

const removeElement = () => {
  const elements = document.querySelectorAll(elementClass);
  elements.forEach((element) => element.remove());
};

const observerConfig = {
  childList: true,
  subtree: true,
};

const observerCallback = (mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      removeElement();
    }
  }
};

const observer = new MutationObserver(observerCallback);
observer.observe(targetNode, observerConfig);

// In case the element is already in the DOM before the script runs
removeElement();
