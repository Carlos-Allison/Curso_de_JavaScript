import React from 'react';

class App extends React.Component{

    render(){
        return (
          <>
            <p>Meu primeiro parágrafo em React.</p>
            <p>Meu segundo parágrafo em React.</p>
            <div>
              <pre>Cansei de parágrafos...</pre>
            </div>
            <p>{ new Date().toLocaleDateString("pt-BR") }</p>
          </>
        );
    }
}

export default App;