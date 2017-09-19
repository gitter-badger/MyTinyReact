// init
const testRootDiv = document.createElement('div');
testRootDiv.setAttribute('id', 'test-container');
document.body.appendChild(testRootDiv);

function createContainer(name:string):HTMLDivElement {
  const container = document.createElement('div');
  container.setAttribute('id', 'test-container-' + name);
  return container;
}

function mountContainer(container:HTMLDivElement):Node {
  testRootDiv.appendChild(container);
  return container.childNodes[0];
}

export { createContainer,mountContainer };
