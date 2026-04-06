import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AddExpensePage.css';

const AddExpensePage = () => {
    const navigate = useNavigate();

    const rows = [
        {
            id: 1,
            date: '22/03/2025',
            expenseNo: '125',
            expenser: 'CHANDI PATRA',
            category: 'FUEL',
            paymentType: 'UPI',
            amount: '200.00',
            remark: '-',
        },
        {
            id: 2,
            date: '22/03/2025',
            expenseNo: '125',
            expenser: 'CHANDI PATRA',
            category: 'FUEL',
            paymentType: 'CASH',
            amount: '200.00',
            remark: '-',
        },
        {
            id: 3,
            date: '22/03/2025',
            expenseNo: '125',
            expenser: 'CHANDI PATRA',
            category: 'FOOD',
            paymentType: 'UPI',
            amount: '200.00',
            remark: '-',
        },
    ];

    return (
        <div className="page-container">
            <div className="breadcrumbs">
                <span className="breadcrumb-item">Home</span>
                <span className="breadcrumb-separator">{'>'}</span>
                <span className="breadcrumb-item active">Expense</span>
            </div>

            <div className="material-form-card">
                <div className="material-form-header">Add Expence</div>

                <div className="material-form-body">
                    <div className="material-form-section">
                        <div className="material-form-grid grid-6 add-expense-top-grid">
                            <div className="material-field">
                                <label>Expense No</label>
                                <input type="text" />
                            </div>
                            <div className="material-field">
                                <label>Date</label>
                                <input type="date" />
                            </div>
                            <div className="material-field">
                                <label>Expenser Name</label>
                                <select>
                                    <option>Select</option>
                                </select>
                            </div>
                            <div className="material-field">
                                <label>Expence Category</label>
                                <select>
                                    <option>Select</option>
                                </select>
                            </div>
                            <div className="material-field">
                                <label>Payment Type</label>
                                <select>
                                    <option>Select</option>
                                </select>
                            </div>
                            <div className="material-field">
                                <label>Amount</label>
                                <input type="text" />
                            </div>
                        </div>

                        <div className="material-form-grid grid-6 add-expense-remark-grid">
                            <div className="material-field span-4">
                                <label>Remark:</label>
                                <textarea className="add-expense-remark" rows="2" />
                            </div>
                            <div className="material-field material-add-wrap expense-add-wrap">
                                <button type="button" className="material-add-btn">+ Add</button>
                            </div>
                        </div>
                    </div>

                    <div className="material-table-wrap">
                        <table className="material-table add-expense-table">
                            <thead>
                                <tr>
                                    <th>Action</th>
                                    <th>Expense No</th>
                                    <th>Date</th>
                                    <th>Expenser Name</th>
                                    <th>Category</th>
                                    <th>Payment Type</th>
                                    <th>Amount</th>
                                    <th>Remark</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row) => (
                                    <tr key={row.id}>
                                        <td>
                                            <div className="material-action-icons">
                                                <button type="button" className="material-action edit">E</button>
                                                <button type="button" className="material-action delete">D</button>
                                            </div>
                                        </td>
                                        <td>{row.expenseNo}</td>
                                        <td>{row.date}</td>
                                        <td>{row.expenser}</td>
                                        <td>{row.category}</td>
                                        <td>{row.paymentType}</td>
                                        <td>{row.amount}</td>
                                        <td>{row.remark}</td>
                                    </tr>
                                ))}
                                <tr className="material-total-row add-expense-total-row">
                                    <td colSpan="6">TOTAL</td>
                                    <td>600.00</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="material-form-footer">
                    <button
                        type="button"
                        className="material-action-btn cancel"
                        onClick={() => navigate('/account/expense')}
                    >
                        Cancel
                    </button>
                    <button type="button" className="material-action-btn save">Save</button>
                </div>
            </div>
        </div>
    );
};

export default AddExpensePage;