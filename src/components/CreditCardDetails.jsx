import React from "react";


const CreditCardDetails = () =>{


return(

<div className=" bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg  shadow-lg   max-w-xs mx-auto overflow-hidden mt-10">
     
<div className="bg-gray-600 flex justify-center py-2">
   <h2 className="text-lg font-medium text-white">Credit Card</h2>

</div>

<div className="px-4 py-5">
   <div className="flex flex-col items-start justify-between mb-6">
<span className="text-sm font-medium text-white">Cardholder Name</span>
<span className="text-sm font-medium  text-white">Yemo Super</span>
   </div>

   <div className="flex flex-col items-start justify-between mb-6">
      <span className="text-sm font-medium text-white">Card Number</span>
      <span className="text-sm font-medium text-white">**** **** **** 1234</span>


   </div>

   <div className="flex justify-between">

      <div className="flex flex-col items-start justify-between mb-6">
         <span className="text-sm font-medium text-white">Expiration Date</span>
         <span className="text-sm font-medium text-white">12/24</span>

      </div>

      <div className="flex flex-col items-start justify-between mb-6">
         <span className="text-sm font-medium text-white">CVV</span>
         <span className="text-sm font-medium text-white">***</span>

      </div>

   </div>

   <div className="flex justify-between items-center">

<div className="flex flex-col items-start justify-between mb-6">
   <span className="text-sm font-medium text-white">Credit limit</span>
   <span className="text-sm font-medium text-white">$10,000</span>

</div>

<div className="flex flex-col items-start justify-between mb-6">
   <span className="text-sm font-medium text-white">Available Balance</span>
   <span className="text-sm font-medium text-white">$7,500</span>

</div>

</div>



</div>


</div>



)


}
export default CreditCardDetails;
