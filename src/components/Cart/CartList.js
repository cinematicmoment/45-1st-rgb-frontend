/* eslint-disable react/jsx-no-useless-fragment */
import { useState, useEffect } from "react";
import "./Cart.scss";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { API_ADDRESS_ORDERS } from "../../utils/API_ADDRESS";

export default function CartList({ handleClose, setShowCart }) {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const token = localStorage.getItem("TOKEN");
  const [showChangeButton, setShowChangeButton] = useState();

  const handleMouseEnter = id => {
    setShowChangeButton(id);
  };

  const handleMouseLeave = () => {
    setShowChangeButton(false);
  };

  useEffect(() => {
    fetch(`${API_ADDRESS_ORDERS}carts`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => setItems(data));
  }, [token]);

  const handleCount = id => {
    const url = `${API_ADDRESS_ORDERS}carts/${items[id].id}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ count: items[id].count }),
    })
      .then(response => response.json())
      .then(data => data)
      .catch(error => error);
  };

  useEffect(() => {
    let total = 0;
    items.length &&
      items.forEach(item => {
        total += item.price * item.count;
      });
    setTotalPrice(total);
  }, [items]);

  const decrement = id => {
    const newItems = [...items];
    if (newItems[id].count > 1) {
      newItems[id].count--;
      setItems(newItems);
    }
  };

  const increment = id => {
    const newItems = [...items];
    if (newItems[id].count < items[id].inventory) {
      newItems[id].count++;
      setItems(newItems);
    } else {
      alert(`최대 수량은 ${items[id].inventory}개입니다.`);
    }
  };

  const deleteItem = id => {
    fetch(`${API_ADDRESS_ORDERS}carts/${items[id].id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const newItems = items.filter((_, i) => i !== id);
    setItems(newItems);
  };

  useEffect(() => {
    if (items.length === 0) {
      const timer = setTimeout(() => {
        setShowCart(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [items, setShowCart]);

  return (
    <>
      {items.length === 0 || !token ? (
        <div className="cartList">카트가 비어있습니다.</div>
      ) : (
        <>
          <div className="cartCategoryBox">
            <div className="cartCategory">카트</div>
            <div className="cartCategory">사이즈</div>
            <div className="cartCategory">수량</div>
            <div className="cartCategory">가격</div>
            <div className="cartCategory" />
          </div>
          {items.length &&
            items.map((item, id) => (
              <div key={item.id} className="cartItem">
                <div className="itemName">{item.title}</div>
                <div className="itemSize">
                  {item.width}/{item.height}
                </div>
                <div
                  className="itemQuantity"
                  onMouseEnter={() => handleMouseEnter(id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="minus" onClick={() => decrement(id)}>
                    -
                  </button>
                  {item.count}
                  <button className="plus" onClick={() => increment(id)}>
                    +
                  </button>
                  {showChangeButton === id && (
                    <button className="check" onClick={() => handleCount(id)}>
                      수량변경
                    </button>
                  )}
                </div>
                <div className="itemPrice">
                  {(item.price * item.count).toLocaleString()} P
                </div>
                <div className="cartDelete">
                  <button
                    className="deleteButton"
                    onClick={() => {
                      deleteItem(id);
                    }}
                  />
                </div>
              </div>
            ))}
          <div className="cartSumBox">
            <div className="cartSummary">
              <div className="bottomPadding">
                <span className="cartFree">
                  rgb . 만의 무료 배송 혜택을 즐겨보세요.
                </span>
                <div className="totalPrice">
                  <span className="vat">소계(세금 포함)</span>
                  <span className="sum">{totalPrice.toLocaleString()} P</span>
                </div>
                <div className="payBtn">
                  <Button
                    action={() => {
                      navigate("/order");
                      setShowCart(false);
                    }}
                    buttonSize="mediumButton"
                    buttonColor="bright"
                  >
                    결제하기
                  </Button>
                </div>
              </div>
              <button
                className="arrowUp"
                onClick={() => {
                  handleClose();
                }}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
