import React, { useState } from 'react';
import { MdOutlineDeleteForever } from "react-icons/md";
import './Carte.css';
import { useDeleteCartItemMutation, useGetAllItemFromCartQuery } from '../../features/cartSlice';

function Carte() {
  const getAllItemFromCart = useGetAllItemFromCartQuery();
  console.log(getAllItemFromCart?.data?.subTotal)
  const cartData = getAllItemFromCart?.data?.items;
  const [deletePost, deletePostResponse] = useDeleteCartItemMutation();
  console.log(cartData)
  const [quantityProduct1, setQuantityProduct1] = useState(1);
  const [quantityProduct2, setQuantityProduct2] = useState(1);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('all');
  const [promocode, setPromocode] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleProduct1QuantityChange = (event) => {
    setQuantityProduct1(parseInt(event.target.value));
  };

  const handleProduct2QuantityChange = (event) => {
    setQuantityProduct2(parseInt(event.target.value));
  };

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const handlePromocodeChange = (event) => {
    setPromocode(event.target.value);
  };

  const handleAgreeTermsChange = (event) => {
    setAgreeTerms(event.target.checked);
  };



  const handleMonthsChange = (index, value) => {
    setSelectedMonths({ ...selectedMonths, [index]: value });
  };


  const [selectedMonths, setSelectedMonths] = useState({});

  const handleDeleteItem = async (index, id) => {
    const respon = await deletePost(id);
    console.log(respon)
  };


  return (
    <div className="Cart">

      <div className='check-head'>
        <div className='check-main'>
          <div className='check-content'>
            <p className='check-first'>Cart !</p>
            <p className='check-sec'>You are almost there! Complete Your order.</p>
          </div>
        </div>



      </div>
      <div className="Cartcontainer">
        <div className="Cart-container">

          <div className="Cartrow">
            <div className="Cartcol-container">
              <div className="Cartcol-header">
                <span>Review & Checkout</span>
              </div>

              <div className="Cartrow-container">
                <div className="Cartrowtable">
                  <div className="Cartrowtable">
                    <div>
                      <table>
                        <thead>
                          <tr>
                            <td>Product/Options</td>
                            <td>Price/Cycle</td>
                            <td>Months</td>
                            <td>Edit</td>
                            <td>Delete</td>
                          </tr>
                        </thead>
                        <tbody>
                          {cartData?.map((item, index) => (
                            <tr key={index}>
                              <td>{item?.product?.displayName}</td>
                              <td>{item?.price}</td>
                              <td>
                                <select
                                  value={selectedMonths[index] || ''}
                                  onChange={(e) => handleMonthsChange(index, e.target.value)}
                                >
                                  <option value="">Select Months</option>
                                  <option value="1">1 Month</option>
                                  <option value="3">3 Months</option>
                                  <option value="6">6 Months</option>
                                  <option value="12">12 Months</option>
                                  <option value="24">24 Months</option>
                                </select>
                              </td>
                              <td>Edit Button</td>
                              <td>
                                <button onClick={() => handleDeleteItem(index,item.id)}>Delete</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>


                <div className="PaymentMethod">
                  <div className="Payment-Method">
                    <div className="Payment-Method-header">
                      <span>Payment Method</span>
                    </div>
                    <div className="radio-group">
                      <div className="table-responsive-sm">
                        <table className="tablecompare">
                          <tbody>
                            <tr>
                              <td>Payments Methods</td>
                              <td>
                                <div className="cart-select">
                                  <select className="cart-select-filter" value={selectedPaymentMethod} onChange={handlePaymentMethodChange}>
                                    <option value="all">Select Payment Method</option>
                                    <option value=".data1">Pay by Bank Transfer</option>
                                    <option value=".data2">Pay with Paypal</option>
                                    <option value=".data3">Pay by Check</option>
                                  </select>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td> Promocode</td>
                              <td>
                                <input type="text" name="promocode" placeholder="Put your promocode here" value={promocode} onChange={handlePromocodeChange} required />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <a className="golink" href="legal" target="_blank">Terms (GDPR)</a>
                              </td>
                              <td className="Term-pt">
                                <div className="Term-con">
                                  <input className="filter" value="" type="checkbox" id="checkbox1" checked={agreeTerms} onChange={handleAgreeTermsChange} />
                                  <label className="checkbox-label" htmlFor="checkbox1">Agree with terms and conditions?</label>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>




        <div className="Cartorder">
          <div className="Cart-order">
            <div className="Cart-order-header">
              <span>Order Summary</span>
            </div>
            <div className="ordersummary">
              <table className="order-summary">
                <tbody>
                  <tr>
                    <td><div className="title-table">Subtotal</div></td>
                    <td>₹{getAllItemFromCart?.data?.subTotal}</td>
                  </tr>
                  <tr>
                    <td><div className="title-table">Cycle</div></td>
                    <td>₹{(960 * quantityProduct1).toFixed(2)} Montly <br /> ₹{(1310.88 * quantityProduct2).toFixed(2)} Annually</td>
                  </tr>
                  <tr>
                    <td><div className="title-table">Total Amount</div></td>
                    <td><h6><b>₹{getAllItemFromCart?.data?.subTotal}</b></h6></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <a href="checkout" className="Checkout-Cart">Checkout <i className="fas fa-arrow-alt-circle-right"></i></a>
          <a href="/" className="Continue-Shopping">Continue Shopping</a>
        </div>
      </div>
    </div>
  );
}

export default Carte;


