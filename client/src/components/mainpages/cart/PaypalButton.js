
import React, { useState } from "react";
import GooglePayButton from "@google-pay/button-react";
 


export default function PaypalButton() {
    const paymentRequest = {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [
        {
          type: "CARD",
          parameters: {
            allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
            allowedCardNetworks: ["MASTERCARD", "VISA"]
          },
          tokenizationSpecification: {
            type: "PAYMENT_GATEWAY",
            parameters: {
              gateway: "example"
            }
          }
        }
      ],
      merchantInfo: {
        merchantId: "12345678901234567890",
        merchantName: "Demo Merchant"
      },
      transactionInfo: {
        totalPriceStatus: "FINAL",
        totalPriceLabel: "Total",
        totalPrice: "100.00",
        currencyCode: "USD",
        countryCode: "US"
      }
    };
  
    const [buttonColor] = useState("default");
    const [buttonType] = useState("buy");
    const [buttonSizeMode] = useState("static");
    const [buttonWidth] = useState(240);
    const [buttonHeight] = useState(40);
  
  
    return (
        <div className="demo">
        <GooglePayButton
          environment="TEST"
          buttonColor={buttonColor}
          buttonType={buttonType}
          buttonSizeMode={buttonSizeMode}
          paymentRequest={paymentRequest}
          onLoadPaymentData={paymentRequest => {
            console.log("load payment data", paymentRequest);
          }}
          style={{ width: buttonWidth, height: buttonHeight }}
        />
      </div>
    );
  }
