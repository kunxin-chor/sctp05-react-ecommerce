import { atom, useAtom } from 'jotai'

const initialCart = [
    {
        "id": 1,
        "product_id": 1,
        "quantity": 10,
        "productName": "Organic Green Tea",
        "price": 12.99,
        "imageUrl": "https://picsum.photos/id/225/300/200",
        "description": "Premium organic green tea leaves, rich in antioxidants and offering a smooth, refreshing taste."
    },
    {
        "id": 2,
        "product_id": 1,
        "quantity": 10,
        "productName": "Organic Black Tea",
        "price": 12.99,
        "imageUrl": "https://picsum.photos/id/225/300/200",
        "description": "Premium organic green tea leaves, rich in antioxidants and offering a smooth, refreshing taste."
    }
]

// create an atom to get the current shopping cart array
// and to update the shopping cart array
export const cartAtom = atom(initialCart); // create the atom (it like a state in React)

// create a hook that returns functions to allow any component
// to do CRUD on the shopping cart
// custom hook: a custom hook is a function that returns functions which add
// new functionality to the component that uses it
export const useCart = () => {
    const [cart, setCart] = useAtom(cartAtom);

    const getCart = () => {
        return cart;
    }

    const getCartTotal = () => {
        // straightforward way to reduce
        // let total = 0;
        // for (let item of cart) {
        //     total = total + item.price * item.quantity
        // }
        // return total;

        let total = cart.reduce(function(total, item){
            return total + (item.price * item.quantity)
        }, 0);

        return total;
    }

    return {
        getCart, getCartTotal
    }
}