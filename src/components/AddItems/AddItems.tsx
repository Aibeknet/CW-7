import React from 'react';
import { MenuItem } from '../../types';

interface AddItemsProps {
    menu: MenuItem[];
    addItem: (item: MenuItem) => void;
}

const AddItems: React.FC<AddItemsProps> = ({ menu, addItem }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">Add Items</h2>
                <div className="row">
                    {menu.map(item => (
                        <div className="col-md-6" key={item.id}>
                            <button
                                type="button"
                                className="btn btn-success w-100 m-1 d-flex align-items-center"
                                onClick={() => addItem(item)}
                            >
                                <img
                                    width='30px'
                                    height='30px'
                                    src={item.image}
                                    alt={item.name}
                                    className="me-2"
                                />
                                {item.name} - {item.price} KGS
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AddItems;
