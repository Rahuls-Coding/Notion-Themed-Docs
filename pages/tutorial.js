
import {  Title, Text, Mark } from '@mantine/core';
import { Navbar } from '../components/Navbar';
import { Prism } from '@mantine/prism';
import { Demo, navcode } from '../components/samplecode'




export default function Home() {

  const remove = {color: "red", label: '-'};
  const add = {color: "green", label: '+'};

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
                {Demo}
            </Prism>
            <Text size='sm' className='tutorial-text' underline>
                You can add your new pages to the navbar burger pop-up by heading into <Mark>Navbar.js</Mark> in the components folder. Insert your link to your page as shown below.  
            </Text>
            <Prism language="jsx" withLineNumbers highlightLines={{
                44: add,
                45: add,
                46: add,
                47: add,
                48: add,
                49: add
              
            }}value="index.js" className='p-3'>
                {navcode}
            </Prism>
            <Text size='sm' className='tutorial-text' underline>
                Finally, in-order to add, remove, or modify the css. Go to the styles folder and modify the <Mark>globals.css</Mark> file. 
            </Text>
            <Text size='sm' className='tutorial-text' >
                Now your all ready and can start working on your website now! Wahoo! Yay!
            </Text>
        </div>
      </div>
    </div>
  )
}
