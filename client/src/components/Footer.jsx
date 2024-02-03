import { Footer } from 'flowbite-react';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
          <div className='mt-5'>
            <div>
              <Footer.Title title='Zapratite nas' />
              <Footer.LinkGroup col>
              <Footer.Link
                  href='https://github.com/majanicijevic'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="Elektronske novine"
            year={new Date().getFullYear()}
          />
        </div>
      </div>
    </Footer>
  );
}