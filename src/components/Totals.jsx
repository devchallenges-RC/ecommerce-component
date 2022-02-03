import React from 'react'

export const Totals = () => {


    return (
        <div>
            <div className="totals">
                <div className="line-item">
                    <div className="label">Subtotal:</div>
                    <div className="amount price subtotal">{}</div>
                </div>
                <div className="line-item">
                    <div className="label">Tax:</div>
                    <div className="amount price tax"></div>
                </div>
                <div className="line-item total">
                    <div className="label">Total:</div>
                    <div className="amount price total"></div>
                </div>
            </div>
        </div>
    )
}
