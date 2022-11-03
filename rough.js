<Button variant={"outline"} onClick={""}>
  {" "}
  CheckOut
</Button>;
// const getDataDelete=()=>{
//   console.log("hello")
//   axios({
//     url: "http://localhost:7005/addtocart",
//     method: "DELETE"
//   }).then((res) => {
//    <Navigate to={"/"} replace={true}/>
//   })
// }

// const loadScript = (src) => {
//   return new Promise((resolve) => {
//     const script = document.createElement("script");
//     script.src = src;
//     script.onload = () => {
//       resolve(true);
//     };
//     script.onerror = () => {
//       resolve(false);
//     };
//     document.body.appendChild(script);
//   });
// };

// export default async function displayRazorpay(sum) {
//   const data = await fetch(
//     `https://rbigbasket.herokuapp.com/razorpay?price=${sum}`,
//     {
//       method: "POST",
//     }
//   ).then((t) => t.json());
//   //   console.log("darttdata")

//   const options = {
//     key: "rzp_test_Mg2MeEGX1Eyeh2",
//     currency: data.currency,
//     amount: data.amount,
//     name: "Big Basket",
//     description: "Wallet Transaction",
//     image: "https://rbigbasket.herokuapp.com/logo",
//     order_id: data.id,
//     handler: function (response) {
//       alert("PAYMENT ID ::" + response.razorpay_payment_id);
//       alert("ORDER ID :: " + response.razorpay_order_id);
//       //   getDataDelete();
//     },
//     prefill: {
//       name: "BigBasket",
//       email: "sumitnarwal@gmail.com",
//       contact: "9467810223",
//     },
//   };

//   const paymentObject = new window.Razorpay(options);
//   paymentObject.open();
// }
