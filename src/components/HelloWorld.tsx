import { defineComponent, withModifiers, ref } from 'vue'

const styles = {
    a: {
        color: '#42b983'
    },
    code: {
        backgroundColor: '#eee',
        padding: '2px 4px',
        borderRadius: '4px',
        color: '#304455'
    }
}

const HelloWorld = defineComponent({
    props: {
        msg: String
    },
    setup(props) {
        const count = ref(0)

        function increment() {
            count.value++
        }

        return () => (
            <div>
                <h1>{ props.msg }</h1>
                <p>
                    Recommended IDE setup:
                    <a href="https://code.visualstudio.com/" style={styles.a} target="_blank">VSCode</a>
                    +
                    <a href="https://github.com/johnsoncodehk/volar" style={styles.a} target="_blank">Volar</a>
                </p>

                <p>See <code>README.md</code> for more information.</p>

                <p>
                    <a href="https://vitejs.dev/guide/features.html" style={styles.a} target="_blank">
                        Vite Docs
                    </a>
                    |
                    <a href="https://v3.vuejs.org/" style={styles.a} target="_blank">Vue 3 Docs</a>
                </p>

                <button type="button" onClick={withModifiers(increment, ['self'])}>count is: {count.value}</button>
                <p>
                    Edit
                    <code style={styles.code}>components/HelloWorld.tsx</code> to test hot module replacement.
                </p>
            </div>
        )
    }
})

export default HelloWorld
