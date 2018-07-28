import Layout from '../components/Layout.js'
import Canvas from '../components/Canvas.js'

import { Container, Col, Row } from 'reactstrap';

export default () => (
    <Layout>
       <p>This is the about page</p>
       <Canvas render={data => ( <canvas ref="canvas" style={{width: '100%', height: '100%'}}></canvas>)}/>
    </Layout>
)
