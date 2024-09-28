import React from 'react';
import { MenuItem } from '../../types';
import DeleteButtons from '../DeleteButtons/DeleteButtons.tsx';

interface OrderDetailsProps {
    order: MenuItem[];
    deleteItem: (id: number) => void;
    deleteAll: (id: number) => void;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order, deleteItem, deleteAll }) => {
    const totalPrice = order.reduce((sum, item) => sum + item.price * item.count, 0);

    return (
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">Order Details</h2>
                {order.length === 0 ? (
                    <p className="text-muted">Order is empty! <br /> Please add some items!</p>
                ) : (
                    <ul className="list-group">
                        {order.map(item => (
                            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    {item.name} x {item.count} = {item.price * item.count} KGS
                                </div>
                                <DeleteButtons itemId={item.id} deleteItem={deleteItem} deleteAll={deleteAll} />
                            </li>
                        ))}
                    </ul>
                )}
                <h3 className="mt-3">Total Price: {totalPrice} KGS</h3>
            </div>
        </div>
    );
};

export default OrderDetails;

