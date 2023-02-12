import CenterContainer from './components/CenterContainer';
import Card from './components/Card';

import qrcode from "./images/qrcode.png";

import './App.css';

function App() {
  return (
    <CenterContainer>
      <Card
        image={qrcode}
        imageAlt="QR Code"
        title="Improve your front-end skills by building projects"
        content="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
      />
    </CenterContainer>
  );
}

export default App;
