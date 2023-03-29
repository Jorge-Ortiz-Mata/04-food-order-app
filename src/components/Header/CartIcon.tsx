import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faCartPlus } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faCartPlus);

const CartIcon = () => {

  return (
    <FontAwesomeIcon icon={["fas", "cart-plus"]} className="text-white text-sm" />
  )
}

export default CartIcon;
