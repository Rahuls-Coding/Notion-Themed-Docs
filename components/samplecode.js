const Demo = 
        `import { Title, Text } from '@mantine/core'
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
                    </div>
                    <div className='content'>
                        {/* your code here */}
                    </div>
            </div>
         )
        }`

const navcode = `import { useState } from 'react';
import { Menu, Burger } from '@mantine/core';
import {TbCurrencyEthereum} from 'react-icons/tb';
import {AiOutlineHome} from 'react-icons/ai'

export function Navbar() {
    const [opened, setOpened] = useState(false);
    const title = opened ? 'Close navigation' : 'Open navigation';
    
    return (
      <div className='pop-up'>
      <div className="">
          <div className='m-0 p-0'>
              <Menu width={200} shadow="md">
                  <Menu.Target className='other-text'>
                      <Burger 
                      opened={opened} 
                      onClick={() => setOpened((o) => !o)} 
                      title={title} size='sm'/>
                  </Menu.Target>
  
                  <Menu.Dropdown>
                      <Menu.Label>Pages</Menu.Label>
                          <Menu.Item
                              icon={<AiOutlineHome/>}
                              component="a"
                              href="/"
                              >
                              Home
                          </Menu.Item>
                          <Menu.Item
                              icon={<TbCurrencyEthereum/>}
                              component="a"
                              href="/ethereum"
                          >
                              Ethereum 
                          </Menu.Item>
                          <Menu.Item
                              component='a' 
                              href='/tutorial'
                          >
                              Tutorial
                          </Menu.Item>
                          <Menu.Item
                              component='a' 
                              href='/your page name'
                          >
                              {/* you page name */}
                          </Menu.Item>
                  </Menu.Dropdown>
              </Menu>
          </div>
      </div>
      </div>
    );
  }
    `

export { Demo, navcode }