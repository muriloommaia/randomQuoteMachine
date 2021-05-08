var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];
  
  var quotes = [
    {"quote" : "Toda a minha esperança baseia-se na grandeza da tua misericórdia. Concede-me o que me ordenas, e ordena o que quiseres.",
     "author" : "Santo Agostinho"},
    {"quote" : "Todo cristão deveria relutar em aceitar com o coração uma fé que falha em convencer a sua mente.",
     "author" : "Michael Horton"},
    {"quote" : "Quanto mais as pessoas pecam, mais elas se inclinam para o mal. É pelo engano dessa lei do pecado [...] que as pessoas se persuadem de que, por este ou aquele pecado particular, satisfarão suas concupiscências de modo que não precisarão mais pecar.",
     "author" : "John Owen"},
    {"quote" : "[...] em tempos de tentação, o engano do pecado se estende a ponto de sugerir a necessidade de pecar, a fim de expor a realidade do Evangelho da Graça",
     "author" : "John Owen"},
    {"quote" : "A verdadeira santidade não consiste apenas em crer e sentir, mas em realizar e suportar, em uma demonstração prática da graça ativa e passiva.",
     "author" : "J. C. Ryle"},
    {"quote" : "O seu Deus é aquilo a que você prende o seu coração e confia",
     "author" : "Martinho Lutero"},
    {"quote" : "Tradição é a fé viva dos mortos; tradicionalismo é a fé morta dos vivos",
     "author" : "Jaroslav Pelikan"},
    {"quote" : "A razão não é zombada por teólogos fiéis: é colocada em seu uso correto, como serva da fé e não sua senhora.",
     "author" : "Kelly Kapic"},
    {"quote" : "Quase toda a sã doutrina consiste nestas duas partes: o conhecimento de Deus e de nós mesmos",
     "author" : "João Calvino"},
  ]
  
  class App  extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          indexQuote: Math.floor(Math.random() * quotes.length),
          index: Math.floor(Math.random() * colors.length)
        }
       this.getRandomIndex = this.getRandomIndex.bind(this);
      }
    getRandomIndex () {
         this.setState ({
         indexQuote: Math.floor(Math.random() * quotes.length),
         index: Math.floor(Math.random() * colors.length)
          })
    }
  
    render () {
      const myQuote = quotes[this.state.indexQuote].quote;
      const myAuthor = "- " + quotes[this.state.indexQuote].author;
      let styleColor = {
        color: colors[this.state.index],
        transition:'1.5s'
      }
      let styleBackground = {
        'background-color': colors[this.state.index],
        border: '2px solid',
        transition: '1.5s',
      }
      const twitterURL = `http://www.twitter.com/intent/tweet?text=${myQuote}-${myAuthor}`
    return (
      <div className="container-fluid color" style={styleBackground}>
        <div className="wrapper d-flex align-items-center justify-content-center">
          <div className="col-10 col-sm-8 p-5 box rounded" id="quote-box">
            
              <h4 style={styleColor} className="text-center" 
                id="text"><i className="fas fa-quote-left"></i>
                {myQuote} 
              </h4>
              <cite style={styleColor} 
                className="d-block text-right m-2 p-1" id="author">
                {myAuthor} 
              </cite>
              <div className="row justify-content-between">
                <a id="tweet-quote" className="btn btn-primary color"
                  href={twitterURL} 
                  target="_top" style={styleBackground}> 
                  <i className="fab fa-twitter"></i> twitter 
                </a>
                <button className="btn btn-primary color" 
                  style={styleBackground}
                  id="new-quote" onClick={this.getRandomIndex}> New quote 
                </button>
              </div>
          </div>
      </div>
     </div>
     )
    }
  }
  
  
  ReactDOM.render(<App />, document.getElementById("app"))