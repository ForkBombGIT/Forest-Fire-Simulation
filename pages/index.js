import Layout from '../components/Layout.js'
import Canvas from '../components/Canvas.js'
import ForestFire from '../components/ForestFire.js'

import { Container, Col, Row } from 'reactstrap';

export default () => (
    <Layout>
       <p>This is the about page</p>
       <Canvas />
       <ForestFire />
    </Layout>
)
