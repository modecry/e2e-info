function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Example react items with Cypress</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          rel="noopener noreferrer"
          target='_blank'
          data-cypress-element={'for-example-link'}
        >
         Example link
        </a>
      </header>
      <div data-cypress-element={'for-example-list-item'}>Liist iitem 1</div>
      <div data-cypress-element={'for-example-list-item'}>Liist iitem 2</div>
      <div data-cypress-element={'for-example-list-item'}>Liist iitem 3</div>
    </div>
  );
}

export default App;
