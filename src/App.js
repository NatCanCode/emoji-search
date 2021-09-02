import "./App.css"
import Line from "./components/Line"
import Search from "./components/Search"
import emojis from "./emojis.json"
import React, { useDebugValue } from "react"


class App extends React.Component {
  constructor(props) {
    super(props);
    // declare state containing emojis
    this.state = {emojis: emojis, inputValue: ""}
  }
  // get input event and update the state
  handleChange = (event) => {
    this.setState({inputValue: event.target.value})
    // console.log(event.target.value)
  }

  componentDidUpdate() {
    console.log(this.state.inputValue)
  }

  // filterInput = (value) => {
  //   let filteredValue = [...emojis]
  //   filteredValue = filteredInput.filter(elem => elem.keywords.includes(value))
  //   this.setState({emojis: filteredValue})
  // }

  clickToFilter = (kind) => {
    // display button value in console
    // console.log("button value: ", kind)
    // change emoji state to get animal emojis only
    // filter() includes() indexOf()
    // 1. copy state value in a variable
    // let newEmojis = [...this.state.emojis]
    const emojiList = [...emojis]
    let filteredEmojis = []
    switch(kind) {
      case "Animals":
        // let newEmojis = [...this.state.emojis]
        // 2. change variable value
        filteredEmojis = emojiList.filter(elem => elem.keywords.includes("animal"))
        // 3. update state value using setState
        this.setState({emojis: filteredEmojis}) 
        break
      case "Nature":
        filteredEmojis = emojiList.filter(elem => elem.keywords.includes("nature" || "plant"))
        this.setState({emojis: filteredEmojis})
        break
      case "Humans": 
        // let newEmojis = [...this.state.emojis]
        filteredEmojis = emojiList.filter(elem => elem.keywords.includes("people" || "person" || "smiley"))
        this.setState({emojis: filteredEmojis}) 
        break 
      case "Food":
        filteredEmojis = emojiList.filter(elem => elem.keywords.includes("food" || "drink"))
        this.setState({emojis: filteredEmojis})
        break
      case "Sport":
        // let newEmojis = [...this.state.emojis]
        filteredEmojis = emojiList.filter(elem => elem.keywords.includes("sport"))
        this.setState({emojis: filteredEmojis}) 
        break 
      default: 
        this.setState({emojis: emojis})
    }
  }

  render() {
    // console.log(this.state.emojis)
    return (
      <>
        <h1>My Emoji Search</h1>
        <Search 
        inputValue={this.state.inputValue} 
        handleChange={this.handleChange}/>
      {/* arrow fct to lauch only on click */}
        <div className="buttons btn1">
          <button onClick={() => this.clickToFilter("All")}>All</button>
          <button onClick={() => this.clickToFilter("Animals")}>Animals</button>
          <button onClick={() => this.clickToFilter("Food")}>Food</button>
        </div>
        <div className="buttons btn2">
          <button onClick={() => this.clickToFilter("Humans")}>Humans</button>
          <button onClick={() => this.clickToFilter("Nature")}>Nature</button>
          <button onClick={() => this.clickToFilter("Sport")}>Sport</button>
        </div>
        <h3>Click on an emoji to copy it!</h3> 
        <div className="container">
          {this.state.emojis.map((elem, index) => {
            //your filtered condition => si le keywords n'est pas dans l'array, il renvoie -1
            if (
              elem.keywords
              .toLowerCase()
              .indexOf(this.state.inputValue.toLowerCase()) !== -1 ||
              elem.title
              .toLowerCase()
              .indexOf(this.state.inputValue.toLowerCase()) !== -1) {
              return (
                <div key={index + elem.title}>
                  <Line title={elem.title} symbol={elem.symbol}/>
                </div>
              )
            }
            return null
          })}
        </div>
        <footer className="copyright">© 2021 - Made with 🤍</footer>
      </>
    )
  }
}

export default App;


// Étape 1 : dans App.js , afficher une ligne avec le titre de l'emoji et son symbole (dans le fichier json ça correspond à ''title' et 'symbol')
// Étape 2 : utiliser le composant Line.js pour afficher une ligne
// Étape 3 : depuis App.js afficher toutes les lignes
// Étape 4 : implémenter le composant Line pour qu'on puisse copier le symbole en cliquant sur la ligne
// navigator.clipboard.writeText(/* ici ce qu'on veut copier */)