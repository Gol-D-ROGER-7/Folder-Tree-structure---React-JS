import React, { useState } from 'react';
import './App.css'

function App() {
  return <div className='container f-large'>
    <Folder name="Desktop " isOpen={false} >
    <Folder name="Music">
      <File name="Downers_at_dusk.mp4" />
      <File name="Superman.mp4" />
    </Folder>
    <Folder name="Pictures" isOpen={false}>
    <File name="dogs.jpeg" />
    <File name="cats.jpeg" />
    </Folder>
    </Folder>
    <Folder name="Downloads" isOpen={false}>
      <File name="hehehe.png" />
    </Folder>
    <Folder name="Documents" isOpen={false}>
      <File name="passwords.txt" />
    </Folder>
    <Folder name="Anime">
      <File name="one piece.zip" />
      <File name="Naruto.zip" />
      <File name="Bleach.zip" />
      <File name="Attack on Titan.zip" />
    </Folder>
  </div>
}

const Folder = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const direction = isOpen ? 'down' : 'right';

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <span onClick={handleClick}>
        <i className='blue folder icon' />
        <i className={`caret ${direction} icon`} />
      </span>
      {name}
      <div style={{ marginLeft: "17px" }}>
        {isOpen ? children : null}
      </div>
    </div>
  )
}

const File = (props) => {
  const { name } = props;
  const fileExtension = name.split('.')[1];
  const fileIcons = {
    mp4: 'headphones',
    jpeg: 'file image',
    png: 'file image outline',
    zip: 'file archive',
    txt: 'file'
  }
  return <div>
    <i className={`${fileIcons[fileExtension]} icon `} />
    {props.name}</div>
}

export default App;
