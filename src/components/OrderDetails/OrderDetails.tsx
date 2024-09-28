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

// import React from 'react';
// import { MenuItem } from '../../types';
//
// interface OrderDetailsProps {
//     order: MenuItem[];
//     deleteItem: (id: number) => void;
//     deleteAll: (id: number) => void;
// }
//
// const OrderDetails: React.FC<OrderDetailsProps> = ({ order, deleteItem, deleteAll }) => {
//     const totalPrice = order.reduce((sum, item) => sum + item.price * item.count, 0);
//
//     return (
//         <div className="card">
//             <div className="card-body">
//                 <h2 className="card-title">Order Details</h2>
//                 {order.length === 0 ? (
//                     <p className="text-muted">Order is empty! <br /> Please add some items!</p>
//                 ) : (
//                     <ul className="list-group">
//                         {order.map(item => (
//                             <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
//                                 <div>
//                                     {item.name} x {item.count} = {item.price * item.count} KGS
//                                 </div>
//                                 <div>
//                                     <button className="btn btn-warning btn-sm me-2" onClick={() => deleteItem(item.id)}>
//                                         <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
//                                              xmlns="http://www.w3.org/2000/svg" width="24" height="24"
//                                              fill="currentColor"
//                                              viewBox="0 0 24 24">
//                                             <path fillRule="evenodd"
//                                                   d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
//                                                   clipRule="evenodd"/>
//                                         </svg>
//                                         Delete One
//                                     </button>
//                                     <button className="btn btn-danger btn-sm" onClick={() => deleteAll(item.id)}>
//                                         <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
//                                              xmlns="http://www.w3.org/2000/svg" width="24" height="24"
//                                              fill="currentColor"
//                                              viewBox="0 0 24 24">
//                                             <path fillRule="evenodd"
//                                                   d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
//                                                   clipRule="evenodd"/>
//                                         </svg>
//                                         Delete All
//                                     </button>
//                                 </div>
//                             </li>
//                         ))}
//                     </ul>
//                 )}
//                 <h3 className="mt-3">Total Price: {totalPrice} KGS</h3>
//             </div>
//         </div>
//     );
// };
//
// export default OrderDetails;
//
