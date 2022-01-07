import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer className="items-center text-center">
      <div className="flex flex-row text-5xl justify-center mt-12">
        <a href="https://github.com/JPDBrodeur" target="_blank" rel="noreferrer"><Icon icon="akar-icons:github-fill" className="mx-2 opacity-20 hover:opacity-100 duration-300"/></a>
        <a href="https://www.linkedin.com/in/jpdbrodeur/" target="_blank" rel="noreferrer"><Icon icon="akar-icons:linkedin-fill" className="mx-2 opacity-20 hover:opacity-100 duration-300"/></a>
        <a href="https://stackoverflow.com/users/16431413/john-brodeur" target="_blank" rel="noreferrer"><Icon icon="akar-icons:stack-overflow-fill" className="mx-2 opacity-20 hover:opacity-100 duration-300"/></a>
      </div>
      <div className="m-6">
        &copy;{new Date().getFullYear()} by John Brodeur
      </div>
    </footer>
  );
};

export default Footer;
