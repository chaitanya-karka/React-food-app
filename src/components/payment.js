import React,{useState} from 'react';
import { useSelector } from 'react-redux';

function Payment() {
  const [amount, setamount] = useState('');
  const orderData = useSelector((state) => state.mainslice.orderList)
  let totalprice = orderData.map((num, i) => num.price);
  let total = totalprice.reduce((all, amount) => all + amount, 0)
  const handleSubmit = (e)=>{
    e.preventDefault();
    // if(amount === ""){
    // alert("please enter amount");
    // }else{
      var options = {
        key: "rzp_test_y6hQ1v0InwpcSe",
        key_secret:"9nosaWDyluiP5gWrjoKwQdHZ",
        amount: total *100,
        currency:"INR",
        name:"Krish app",
        description:"for testing purpose",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:"Chaitanya",
          email:"chaitanyav543@gmail.com",
          contact:"8220745916"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    // }
  }
  // pay_LFpSm8oBjaKtiX
  return (
    // <div className="App">
    //  <h2>Razorpay Payment Integration Using React</h2>
    //  <br/>
    //  <input type="text"placeholder='Enter Amount'value={amount}onChange={(e)=>setamount(e.target.value)} />
    //  <br/><br/>
    //  <button onClick={handleSubmit}>submit</button>
    // </div>
    <></>
  );
}

export default Payment;