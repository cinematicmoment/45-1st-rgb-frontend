import React from "react";
import "./Payment.scss";
import Button from "../../../../components/Button/Button";
import CheckBox from "../CheckBox/CheckBox";

function Payment({ userList, productList }) {
  // 합계, 사용 포인트
  const getSum = productList => {
    let sum = 0;
    productList.forEach(product => {
      sum += parseInt(product?.price);
    });
    return sum;
  };

  let totalPrice = getSum(productList);
  let totalPriceComma = Number(totalPrice).toLocaleString();

  // 보유 포인트 콤마 사용하여 입력
  const totalPoints = parseInt(userList[0]?.points).toLocaleString();

  return (
    <div className="payment">
      <h2 className="paymentTitle">이대로 주문하시겠습니까?</h2>
      <form className="pointForm">
        <div className="pointTitle">
          <img alt="point logo" src="/images/Order/point_logo.png" />
          <span className="pointText">포인트</span>
        </div>
        <div>
          <label className="pointLabel" for="totalPoint">
            보유 <input type="text" id="totalPoint" readOnly />
            <span className="pointUnit">{totalPoints}&nbsp;P</span>
          </label>
        </div>

        <div>
          <label className="pointLabel" for="pricePoint">
            사용 <input type="text" id="pricePoint" readOnly />
            <span className="pointUnit">{totalPriceComma}&nbsp;P</span>
          </label>
        </div>
        <div className="contractWrapper">
          <div>
            <label className="agreeAll" for="agreeAll">
              <input type="checkbox" id="agreeAll" />
              <label for="agreeAll" />
              전체 동의
            </label>
          </div>
          <div className="agreementDetail">
            <label className="ageCheck" for="ageCheck">
              <input type="checkbox" id="ageCheck" />
              <label for="ageCheck" />
              본인은 만 14세 이상입니다 (필수)
            </label>
          </div>

          <div className="agreementDetail">
            <label className="privacy" for="privacy">
              <input type="checkbox" id="privacy" />
              <label for="privacy" />
              개인정보 수집 및 이용조건에 동의합니다 (필수)
            </label>
            <img
              className="arrowBottom"
              alt="toggle arrow"
              src="/images/order/Expand Arrow.png"
            />
          </div>
          <div className="agreementDetail">
            <label className="orderCheck" for="orderCheck">
              <input type="checkbox" id="orderCheck" />
              <label for="orderCheck" />
              주문내역을 확인했으며, 이에 동의합니다 (필수)
            </label>
          </div>
          {/* <CheckBox
            className="testBox"
            inputText="주문내역을 확인했으며, 이에 동의합니다 (필수)"
          />
          <CheckBox inputText="체크박스 컴포넌트 생성!" /> */}
          {/*  {PAYMENT_TERMS.map(term => {
            return <CheckBox key={term.id} term={term} />;
          })} */}
          {/*  {PAYMENT_TERMS.map(term => {
            return <input type="checkbox" key={term.id} term={term} />;
          })} */}
        </div>
        <Button
          buttonSize="bigButton"
          buttonColor="dark"
          buttonName="결제하기"
        />
      </form>
    </div>
  );
}

export default Payment;

/* const PAYMENT_TERMS = [
  {
    id: 1,
    text: "본인은 만 14세 이상입니다 (필수)",
  },
  {
    id: 2,
    text: "개인정보 수집 및 이용 조건에 동의합니다 (필수)",
  },
];
 */
