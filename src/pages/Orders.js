import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../components/header';
function Orders() {
    const orderData = useSelector((state) => state.mainslice.orderList)
    const isLog = useSelector((state) => state.mainslice.isLog)
    let totalprice = orderData.map((num, i) => num.price);
    let totalnames = orderData.map((nam, i) => nam.name);
    let total = totalprice.reduce((all, amount) => all + amount, 0)
    let totalLength = orderData.length;
    return (
        <div className='main-order mt-5'>
            <Header />

            {orderData.length &&isLog ?
                <div className='container mt-5 order-detail'>
                    <h2 className='text-primary pt-3 mb-5'>Your Orders</h2>
                    <div className='border '>
                        <h5>Food Items: {totalnames.join(',')}.</h5>
                        <h5>Total products: {totalLength}.</h5>
                        <h5>Total Amount: {total}rs.</h5>
                    </div>
                    <h6 className='mt-5'>Thank you for ordering on krish app, You will soon receive your food :)</h6>
                    <p>Pay and get it ;)</p>

                </div> :
                <h2 className='text-white pt-5'>No orders yet!</h2>}

        </div>
    )
}


export default Orders