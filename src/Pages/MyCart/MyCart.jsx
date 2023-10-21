
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
const MyCart = () => {
    const loadedCartProducts = useLoaderData();
    const [cartProducts, setCartProducts] = useState(loadedCartProducts);
    console.log(cartProducts);

    const handleDelete = (id) => {
        fetch(`https://brand-shop-server-b8-a10.vercel.app/cart/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    const reamaining = cartProducts.filter(product => product._id !== id)
                    setCartProducts(reamaining)
                    Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )
                        }
                    })
                }
            })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Car Name</th>
                        <th>Price</th>
                        <th>Brand</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        cartProducts.map(product => (
                            <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-24 ">
                                                <img src={product.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <div className="font-bold text-2xl">{product.name}</div>
                                    </div>
                                </td>
                                <td className='text-lg'>
                                    ${product.price}
                                </td>
                                <td className='uppercase font-bold text-lg'>{product.brand}</td>
                                <th>
                                    <button onClick={() => handleDelete(product._id)} className="btn">X</button>
                                </th>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MyCart;