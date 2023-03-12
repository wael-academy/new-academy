import React from "react";
import Nav from "./Nav";
import "./LogSwimmer.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

class LogSwimmer extends React.Component {
  handleSubmit = async (e) => {
    e.preventDefault();
    let { db } = this.props;
    let colRef = collection(db, "logSwimmers");

    if (
      (e.target.name.value !== "") &
      (e.target.gender.value !== "") &
      (e.target.level.value !== "") &
      (e.target.coach.value !== "") &
      (e.target.price.value !== "") &
      (e.target.subs.value !== "") &
      (e.target.birth.value !== "")
    ) {
      try {
        await addDoc(colRef, {
          "swimmer-name": e.target.name.value,
          "date-birth": e.target.birth.value,
          gender: e.target.gender.value,
          "date-subs": e.target.subs.value,
          level: e.target.level.value,
          "coach-name": e.target.coach.value,
          price: e.target.price.value,
          createdAt: serverTimestamp(),
        });
      } catch (error) {}
    }
    e.target.name.value = "";
    e.target.birth.value = "";
    e.target.gender.value = "";
    e.target.subs.value = "";
    e.target.level.value = "";
    e.target.coach.value = "";
    e.target.price.value = "";
  };

  render() {
    return (
      <>
        <Nav />
        <form className="Log-swimmer" onSubmit={this.handleSubmit}>
          <h1>تسجيل السباحين</h1>
          <label>اسم السباح</label>
          <input type="text" placeholder="اسم السباح" id="name" />
          <label>تاريخ الميلاد</label>
          <input type="date" id="birth" />
          <label>الجنس</label>
          <select id="gender">
            <option>ذكر</option>
            <option>انثى</option>
          </select>
          <label>تاريخ الاشتراك</label>
          <input type="date" id="subs" />
          <label>المستوى</label>
          <select id="level">
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
          </select>
          <label>المدرب</label>
          <input type="text" placeholder="المدرب" id="coach" />
          <label>قيمة الاشتراك</label>
          <select id="price">
            <option>500</option>
            <option>800</option>
            <option>1200</option>
          </select>
          <button type="submit">حفظ</button>
        </form>
      </>
    );
  }
}
export default LogSwimmer;
