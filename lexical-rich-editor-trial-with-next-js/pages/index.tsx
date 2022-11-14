import dynamic from 'next/dynamic'
const Editor = dynamic(import('../components/Editor/Index'), { ssr: false })

export default function Home() {
  return (
    <div className='App'>
      <Editor />
    </div>
  )
}
