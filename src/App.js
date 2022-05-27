import styles from './App.styles.js'
import JokesList from './components/Jokes/JokesList.js'

function App(){

  return(
    <div style={styles.app}>
      <JokesList></JokesList>
    </div>
  )
}

export default App