import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld'
import logo from './assets/logo.png'

const styles = {
    app: {
        fontFamily: 'Avenir, Helvetica, Arial, sans-serif',
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        textAlign: 'center',
        color: '#2c3e50',
        marginTop: '60px'
    }
}

const App = defineComponent({
    setup() {
        return () => (
            <div style={ styles.app }>
                <img alt="Vue logo" src={ logo } />
                <HelloWorld msg={ "Hello Vue 3 + TypeScript + Vite" } />
            </div>
        )
    }
})

export default App
