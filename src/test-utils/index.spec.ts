
import { createContainer, mountContainer } from './';

describe('Checking test-utils ',() => {
  it('createContainer works',() => {
    const con = createContainer('madoka');
    expect(con.getAttribute('id')).toEqual('test-container-' + 'madoka');
    con.innerText = '2333';
    expect(con.innerHTML).toEqual('2333');
  });

  it('mountContainer works',() => {
    const con = createContainer('homura');
    expect(con.getAttribute('id')).toEqual('test-container-' + 'homura');
    con.innerHTML = '<p>2333</p>';
    const foo = mountContainer(con);
    expect(foo.nodeName.toLowerCase()).toEqual('p');
  });
});
