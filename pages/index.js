import Layout from '../components/Layout.js'
import Canvas from '../components/Canvas.js'

export default () => (
    <Layout>
       <p>This is the about page</p>
       <Canvas>
          <canvas id="myCanvas" width="100%" height="100"></canvas>
       </Canvas>
    </Layout>
)
