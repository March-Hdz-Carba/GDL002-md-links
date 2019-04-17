const mdLinks = require('../index.js');


describe('pathEntered', () => {
  it('should be a function', () => {
    expect(typeof mdLinks.pathEntered).toBe('function');
  });
  it('should be true if user enter a path', () => {
    expect(mdLinks.pathEntered('./README.md')).toBe(true);
  });
  it('should be false if user dont enter a path', () => {
    expect(mdLinks.pathEntered()).toBe(false);
  });
});

describe('pathIsReal', () => {
  it('should be function', () => {
    expect(typeof mdLinks.pathIsReal).toBe('function');
  });
  it('should be true if path exists', () => {
    expect(mdLinks.pathIsReal('./README.md')).toBe(true);
  });
  it('should be false if path dont exists', () => {
    expect(mdLinks.pathIsReal('./README.txt')).toBe(false);
  });
});

/*describe ('pathIsAbsolute', () => {
  it('should be true if user enter a path absolute', () => {
    expect(mdLinks.pathIsAbsolute('/home/laboratoria173/Laboratoria/GDL002-md-links/README.md'))
      .toBe(true);
  })
  it('should be false if user enter a NOT path absolute', () => {
    expect(mdLinks.pathIsAbsolute('Laboratoria/GDL002-md-links/README.md')).toBe(false);
  })
})*/

describe('pathIsDirectory', () => {
  it('should be true if path is a Directory', () => {
    expect(mdLinks.pathIsDirectory('/home/laboratoria173/Laboratoria')).toBe(true);
  });
  it('should be false if path is a file', () => {
    expect(mdLinks.pathIsDirectory('./README.md')).toBe(false);
  });
});

describe('ExtNamePath', () => {
  it('should be true if file is .md', () => {
    expect(mdLinks.ExtNamePath('README.md')).toBe(true);
  });
  it('should be false if file is not .md', () => {
    expect(mdLinks.ExtNamePath('README.txt')).toBe(false);
  });
});

describe('readFileMd', () => {
  it('should be read contend of file', () => {
    expect(mdLinks.readFileMd('./prueba.md')).toBe(true);
  });
});