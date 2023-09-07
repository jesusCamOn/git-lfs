import { AFrameScene } from '../../lib/aframe-components'
// Siempre importar con el sufijo '?raw' al final de la ruta de importacion de un archivo .html para que vite importe su contenido como string.
import htmlContent from './cube.html?raw';

const Experience = () => {
  return (
    <AFrameScene sceneHtml={htmlContent} />
  )
}

export default Experience