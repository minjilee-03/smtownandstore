import React, { useState, useRef} from "react";
import down_arrow from "../assets/down_arow.png";
import closeBtn from "../assets/closeBtn.gif";

import { Link } from "react-router-dom";

import "../css/cart.css";
import "../css/modal.css";
import celeb_nct_weekly from "../data/celeb-nct-weeklybest.json";

import "../css/optionSelect.css";

const Modal = (props) => {
  const { showcaseId } = props || {};

  const [Selected, setSelected] = useState("");

  const nextId = useRef(0);

  const [todos, setTodos] = useState([]);

  const [count, setCount] = useState({});

  const increase = (id) => {
    const member = (count[id] || 1) + 1;
    console.log(":id", id);
    setCount((count) => ({
      ...count,
      [id]: member,
    }));
    if (member > 20) {
      return alert("최소 주문수량은 20개 입니다."), setCount(20);
    }
    console.log("increase==>", member);
  };

  const decrease = (id) => {
    const member = (count[id] || 1) - 1;
    console.log(":id", id);
    setCount((count) => ({
      ...count,
      [id]: member,
    }));
    if (member < 1) {
      return alert("최소 주문수량은 1개 입니다."), setCount(1);
    }
  };

  const countChange = (e) => {
    console.log("시작전 count ==> ", count);
    console.log("시작전 e ==> ", e);
    if (count === 0) {
      return;
    } else {
      // setCount(e.target.value);
      const newCount = {
        id: nextId.current,
        count: count,
      };
      setCount([...count, newCount]);
      console.log("카운트채인지 ===> ", newCount);
    }
  };

  const onCreate = () => {
    if (Selected.length < 1) {
      return;
    } else {
      const newTodo = {
        id: nextId.current,
        selectName: celeb_nct_weekly.celeb_nct_weekly[showcaseId].artist,
        productName: celeb_nct_weekly.celeb_nct_weekly[showcaseId].name,
        member: Selected,
      };
      setTodos([...todos, newTodo]);
      nextId.current += 1;
      setSelected("");
    }
  };

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const multiple = (e, multipleMemberArray) => {
    console.log("내가 선택한 거 ==> ", e);
    console.log("멀티플", multipleMemberArray);

    const multipleFind = multipleMemberArray.find((todo) => todo);

    console.log(
      "multipleFind==> ",
      multipleMemberArray.find((todo) => todo)
    );

    if (multipleFind === e) {
      console.log("이미 있는 아티스트 입니다 ==>", e);
      setTodos(todos.filter((todo) => todo !== e));
    } else {
      console.log("새 아티스트 입니다 ==>", e);
    }
  };

  const handleSelect = (e) => {
    const { value } = e.target;

    const multipleMemberArray = todos.map((todo) => todo.member);

    setSelected(value);
    multiple(value, multipleMemberArray);
  };

  const price = (id) => {
      console.log("id입니다 ==> " , count[id])
      return "₩" + celeb_nct_weekly.celeb_nct_weekly[showcaseId].price * count[id]
  };

  // const price = (id) => {
  //   return "₩" + celeb_nct_weekly.celeb_nct_weekly[showcaseId].price * count[id];
  // };
  //
  // const totalPrice = (id) => {
  //   return "₩"
  // }


  const nctDream = [
    { id: 0, value: "MARK" },
    { id: 1, value: "RENJUN" },
    { id: 2, value: "JENO" },
    { id: 3, value: "HEACHAN" },
    { id: 4, value: "JAEMIN" },
    { id: 5, value: "CHENLE" },
    { id: 6, value: "JISUNG" },
  ];

  const nct127 = [
    { id: 0, value: "TAEIL" },
    { id: 1, value: "JHONNY" },
    { id: 2, value: "TAEYONG" },
    { id: 3, value: "YUTA" },
    { id: 4, value: "DOYOUNG" },
    { id: 5, value: "JAEHYUN" },
    { id: 6, value: "JUNGWOO" },
    { id: 7, value: "MARK" },
    { id: 8, value: "HEACHAN" },
  ];

  const nctAll = [
    { id: 0, value: "TAEIL" },
    { id: 1, value: "JHONNY" },
    { id: 2, value: "TAEYONG" },
    { id: 3, value: "YUTA" },
    { id: 4, value: "DOYOUNG" },
    { id: 5, value: "JAEHYUN" },
    { id: 6, value: "JUNGWOO" },
    { id: 7, value: "MARK" },
    { id: 8, value: "HEACHAN" },
    { id: 9, value: "RENJUN" },
    { id: 10, value: "JENO" },
    { id: 11, value: "JAEMIN" },
    { id: 12, value: "CHENLE" },
    { id: 13, value: "JISUNG" },
  ];

  if (!showcaseId) {
    return null;
  }

  if (!celeb_nct_weekly.celeb_nct_weekly[showcaseId].imagePath) {
    return null;
  } else if (!celeb_nct_weekly.celeb_nct_weekly[showcaseId].artist) {
    return "NCT";
  } else if (!celeb_nct_weekly.celeb_nct_weekly[showcaseId].name) {
    return "빈값입니다";
  } else if (!celeb_nct_weekly.celeb_nct_weekly[showcaseId].price) {
    return "0";
  }


  return (
    <div>
      <div className="header">
        <h1>옵션 선택</h1>
      </div>
      <div className="content">
        <div className="content-wrap">
          <div className="content-container">
            <div className="exam-image-wrap">
              <img
                src={
                  "https://www.smtownandstore.com" +
                  celeb_nct_weekly.celeb_nct_weekly[showcaseId].imagePath
                }
                className="exam-iamge"
              />
            </div>
            <div className="content-info">
              <div className="content-text">
                <div className="content-artist">
                  {celeb_nct_weekly.celeb_nct_weekly[showcaseId].artist}
                </div>
                <div className="content-title">
                  {celeb_nct_weekly.celeb_nct_weekly[showcaseId].name}
                </div>
              </div>
              <div className="select-detail">
                <p>
                  <select
                    className="select"
                    style={{ backgroundImage: `url(${down_arrow}` }}
                    value={Selected}
                    onChange={handleSelect}
                    onClick={onCreate}
                  >
                    <option>[필수] CELEB 선택</option>
                    {(function () {
                      //시간 남으면 수정하기

                      const nowArtist =
                        celeb_nct_weekly.celeb_nct_weekly[showcaseId].artist;

                      if ("NCT DREAM" === nowArtist)
                        return nctDream.map((period) => {
                          return (
                            <option key={period.id || ""}>
                              {period.value}
                            </option>
                          );
                        });

                      if ("NCT 127" === nowArtist)
                        return nct127.map((period) => {
                          return (
                            <option key={period.id || ""}>
                              {period.value}
                            </option>
                          );
                        });

                      if ("NCT" === nowArtist)
                        return nctAll.map((period) => {
                          return (
                            <option key={period.id || ""}>
                              {period.value}
                            </option>
                          );
                        });
                    })()}
                  </select>
                </p>
              </div>
              <div className="read-comment">
                위 옵션을 선택하시면 아래에 상품이 추가됩니다.
              </div>
            </div>
          </div>
          {/*여기서부터 select 선택시 추가 되는 덩어리들 */}
          <div className="OptionDetail">
            {todos.map((todo) => (
              // onClick={()=>{console.log("키 ==> ", todo.id)}}
              <div className="OptionDetailWrap" key={todo.id}>
                <div>
                  <p className="product">
                    <span className="groupName">{todo.selectName}</span>
                    <span className="productName">{todo.productName}</span>
                    <span className="artistName">{todo.member}</span>
                  </p>
                </div>

                <div className="productCount">
                  <button
                    className="CountBtn"
                    onClick={() => {
                      decrease(todo.id);
                    }}
                  >
                    -
                  </button>

                  <input
                    className="productCountInput"
                    type="number"
                    value={count[todo.id] || 1}
                    key={todo.id}
                    onChange={countChange}
                  ></input>

                  <button
                    className="CountBtn"
                    onClick={() => {
                      // countChange(count+1);
                      // setCount(count+1)}
                      increase(todo.id);
                    }}
                  >
                    +
                  </button>
                </div>
                <div className="priceWrap">
                  <img
                    src={closeBtn}
                    alt="삭제"
                    onClick={() => onRemove(todo.id)}
                    className="closeBtn"
                  />
                  <span
                    onClick={() => {
                      console.log(
                        "todos",
                        todos.map((todo) => todo.member)
                      );
                    }}
                  >

                    { price(todo.id)}

                  </span>
                </div>
              </div>
            ))}
          </div>
          {/*여기까지 select 선택시 추가 되는 덩어리들 */}
          <div className="totalPrice">
            총 상품금액(수량){price()}
            <span className="total">
              <em> </em>(0개)
            </span>
          </div>
        </div>
      </div>
      <div className="footer">
        <Link to="/celeb_boa" className="buy-wrap">
          <span className="buy">바로 구매하기</span>
        </Link>
        <Link to="/celeb_exo" className="gotocart-wrap">
          <span className="gotocart">장바구니 담기</span>
        </Link>
      </div>
    </div>
  );
};

export default Modal;
