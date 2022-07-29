
import { Alert, Title, Text, Mark, Code, List } from '@mantine/core';
import { Navbar } from '../components/Navbar';
import { Prism } from '@mantine/prism';
import {SiJavascript} from 'react-icons/si';



function JsIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="20" height="20"
viewBox="0 0 48 48"
><path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path></svg>
   )
}


export default function Home() {

  const remove = {color: "red", label: '-'};
  const add = {color: "green", label: '+'};

  const demo = `import { Title, Text } from '@mantine/core'
import { Navbar } from '../components/Navbar.'

export default function Home() {

retrun (
    <div>
        <div className="navbar">
            <Navbar/>
        </dvi>
        <div className="color-overhead">
            <div className="h-44"></div>
        </div>
        <div 
        className="overall">
            <div className='content'>
                {/* demo */}
            </dvi>
            <div className='content'>
                {/* your code here */}
            </dvi>
    </div>
 )
}
  
`

  return (
    <div>
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="color-overhead">
        <div className="h-44"></div>
      </div>
      <div className="overall">
        <div className="content">
            <div className="h-10"></div>
            <Title order={1} className='tutorial-text'>Tutorial</Title>
            <Title order={3} className='tutorial-text'>Using the Template</Title>
            <Text size='sm' className="px-2 text">
                Follow the steps below to start using this template.
            </Text>
            <Text size='sm' className="tutorial-text" underline>
                First clone this repo on your local machine.
            </Text>
            <Prism className="p-3" language='bash' withLineNumbers>git clone https://github.com/Rahuls-Cool/Articles.git </Prism>
            <Text  size='sm' className="tutorial-text" underline>Then install all packages</Text>
            <Prism className="p-3"language='bash' withLineNumbers>yarn install</Prism>
            <Text size='sm' className='tutorial-text' underline>
                To start adding your content, head into <Mark>index.js</Mark>, then start removing all things in the div with the class name of &#39;content&#39; 
            </Text>
            <Prism language="jsx" withLineNumbers highlightLines={{
                16: remove,
                17: remove,
                18: remove,
                19: add,
                20: add,
                21: add
            }}value="index.js" className='p-3'>
                {demo}
            </Prism>


        </div>
      </div>
    </div>
  )
}
