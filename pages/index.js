import { Alert, Title, Text, Mark, Code, List } from '@mantine/core';
import { Navbar } from '../components/Navbar';
import { Prism } from '@mantine/prism';



export default function Home() {

  const remove = {color: "red", label: '-'}
  const add = {color: "green", label: '+'}

  return (
    <div>
      <div className=" grid p-2 justify-items-end">
        <Navbar/>
      </div>
      <div className="bg-yellow-500 border-4 border-yellow-500">
        <div className="h-44"></div>
      </div>
      <div className="flex flex-col justify-center items-start max-w-3xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="h-10"></div>
        <Title order={1} className='py-3 text px-2'>Home</Title>
        <div className="content">
        <Title order={3} className='py-3 text px-2'>Notion-Like Template</Title>
          <Text size='sm' className="px-2 text">
            This template could be used to create your own docs and have a nice UI, very similar to Notion&#39;s. This project was bootstrapped with Next.js + TailwindCSS + Mantine. To view an example of how this templete could be used, <Text variant='link' component='a' href='/ethereum'>click here</Text>.
          </Text>
          <Title order={3} className='py-3 text px-2'>How To Use This Templeate</Title>
          <Text size='sm' className="px-2 text">
          To start using this template, follow the steps given <Text variant='link' component='a' href='/tutorial'>here</Text>. 
          </Text>
        </div>
      </div>
    </div>
  )
}
