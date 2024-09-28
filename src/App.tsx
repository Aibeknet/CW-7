import React, { useState } from 'react';
import OrderDetails from "./components/OrderDetails/OrderDetails.tsx";
import AddItems from './components/AddItems/AddItems.tsx';
import { MenuItem, initialMenu} from './types';


const App: React.FC = () => {
    const [order, setOrder] = useState<MenuItem[]>([]);

    const addItem = (item: MenuItem) => {
        setOrder(prevOrder => {
            const itemInOrder = prevOrder.find(o => o.id === item.id);
            if (itemInOrder) {
                return prevOrder.map(o =>
                    o.id === item.id
                        ? { ...o, count: o.count + 1 }
                        : o
                );
            }
            return [...prevOrder, { ...item, count: 1 }];
        });
    };

    const deleteItem = (id: number) => {
        setOrder(prevOrder => {
            return prevOrder.map(item => {
                if (item.id === id) {
                    if (item.count > 1) {
                        return { ...item, count: item.count - 1 };
                    }
                    return null;
                }
                return item;
            }).filter(item => item !== null);
        });
    };

    const deleteAll = (id: number) => {
        setOrder(prevOrder => prevOrder.filter(item => item.id !== id));
    };

    return (
        <div className="container-fluid" style={{ backgroundColor: '#006400', minHeight: '100vh' }}>
            <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <div className="col-md-10">
                    <div className="bg-white p-4 rounded">
                        <div className="row">
                            <div className="col-md-6">
                                <OrderDetails
                                    order={order}
                                    deleteItem={deleteItem}
                                    deleteAll={deleteAll}
                                />
                            </div>
                            <div className="col-md-6">
                                <AddItems
                                    menu={initialMenu}
                                    addItem={addItem}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
