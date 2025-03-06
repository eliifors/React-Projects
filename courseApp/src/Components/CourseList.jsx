import React from "react";
import { useSelector } from "react-redux";

function CourseList() {
  const { cartItems, quantity, total } = useSelector((store) => store.cart);

  return (
    <>
      {quantity < 1 ? (
        <section>
          <header>
            <h2>SEPETİM</h2>
            <h4>Sepetiniz Boş</h4>
          </header>
        </section>
      ) : (
        <section>
          <header>
            <h2>SEPETİM</h2>
            <div>
              {cartItems.map((item) => {
                return <CourseList {...item} />;
              })}
            </div>
            <footer>
              <hr />
              <div>
                <h3>
                  Toplam Tutar = <span>{total} TL</span>
                </h3>
              </div>
              <button>Temizle</button>
            </footer>
          </header>
        </section>
      )}
    </>
  );
}

export default CourseList;
