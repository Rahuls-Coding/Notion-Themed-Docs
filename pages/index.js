import Head from 'next/head'
import Image from 'next/image'
import { Alert, Title, Text, Mark, Code } from '@mantine/core';
import { Navbar } from '../components/Navbar';
import { IconAlertCircle, IconAlertTriangle } from '@tabler/icons';

export default function Home() {
  return (
    <div>
      <div className="bg-white grid p-2 justify-items-end">
        <Navbar/>
      </div>
      <div className="bg-yellow-500 border-4 border-yellow-500">
        <div className="h-44"></div>
      </div>
      <div className="flex flex-col justify-center items-start max-w-3xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="h-10"></div>
        <Title order={1} className='py-3 text px-2'>Articles</Title>
      </div>
    </div>
  )
}
