import { logo, github_logo } from "../assets"

const Header = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-12 pt-10'>
        <img src={logo} alt='Sum App Logo' className='w-32 object-contain' />

        <button
          type='button'
          onClick={() => window.open("https://github.com/AleksandrMalinin")}
        >
          <img
            src={github_logo}
            alt='GitHub logo'
            className='w-12 object-contain hover:opacity-60'
          />
        </button>
      </nav>

      <h1 className='title-text'>
        Sum up web content with <br className='max-md:hidden' />
        <span className='title-gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='caption'>
        Make reading easier and faster with{" "}
        <span className='font-medium'>Sum&nbsp;app</span>, an&nbsp;accessible
        tool that transforms voluminous content into a&nbsp;concise and
        informative summary
      </h2>
    </header>
  )
}

export default Header
