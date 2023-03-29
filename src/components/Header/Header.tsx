import TitleHeader from './TitleHeader';
import CartHeader from './CartHeader';

type HeaderProps = {
  title: string,
};

const Header = ({title}:HeaderProps) => {

  return(
    <nav className='flex bg-orange-600 justify-between p-5 items-center'>
      <TitleHeader title='Food Order App' />
      <CartHeader />
    </nav>
  )
}

export default Header;
