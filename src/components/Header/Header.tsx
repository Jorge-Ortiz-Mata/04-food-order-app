import TitleHeader from './TitleHeader';
import CartHeader from './CartHeader';

type HeaderProps = {
  title: string,
};

const Header = ({title}:HeaderProps) => {

  return(
    <nav className='bg-orange-600 fixed w-full flex  items-center justify-between py-2 px-4'>
      <TitleHeader title='Food Order App' />
      <CartHeader />
    </nav>
  )
}

export default Header;
