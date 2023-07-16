import './css/PaymentButton.css'
function PaymentButton({backgroundColor,text,imgUrl}){
    return(
            <button style={{backgroundColor: backgroundColor}} className="paymentBtn">
                <div>
                    <img className="paymentIcon" src={imgUrl} alt="Payment Icon Image"/> 
                </div>
                <div>
                    {text}
                </div>
            </button>
    );
}
export default PaymentButton;