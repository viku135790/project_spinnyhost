import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAddInCartEndMutation } from '../../features/cartSlice';

const SearchedDomain = () => {
  const location = useLocation();
  const domainData = location?.state?.data;
  const addingToCart =async (domainName, purchasePrice)=>{
    let res = await addDomainInCart(domainName)
  }

  const [addDomainInCart, addDomainInCartResponse] = useAddInCartEndMutation();
  const [addingCartStatus, setAddingCartStatus] = useState('Add In Cart');

  useEffect(() => {
    if (addDomainInCartResponse.isLoading) {
        setAddingCartStatus("pending")
    } else if (addDomainInCartResponse.isError) {
        setAddingCartStatus("rejected")
    } else if (addDomainInCartResponse.isSuccess) {
        setAddingCartStatus("success")
    }
}, [addDomainInCartResponse.isLoading, addDomainInCartResponse.isError, addDomainInCartResponse.isSuccess]);

  return (
    <div>
      {domainData.map((domain, index) => (
        <div key={index}>
          <div>Domain Name: {domain?.domainName}</div>
          <div>Domain Price: {domain?.purchasePrice}</div>
          <button onClick={() => addingToCart(domain.domainName, domain.purchasePrice)}>
            {addingCartStatus}
          </button>
          <br />
        </div>
      ))}
    </div>
  )
}

export default SearchedDomain