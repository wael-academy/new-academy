import React from "react";
import Nav from "./Nav";
import "./LogLanes.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

class LogLanes extends React.Component {
  handleSubmit = async (e) => {
    e.preventDefault();
    let { db } = this.props;
    let colRef = collection(db, "logLanes");

    if (
      (e.target.area.value !== "") &
      (e.target.date.value !== "") &
      (e.target.hour.value !== "") &
      (e.target.kindSubs.value !== "") &
      (e.target.count.value !== "")
    ) {
      try {
        await addDoc(colRef, {
          area: e.target.area.value,
          day: e.target.date.value,
          hour: e.target.hour.value,
          kindSubs: e.target.kindSubs.value,
          count: e.target.count.value,
          createdAt: serverTimestamp(),
        });
      } catch (error) {}
    }
    e.target.area.value = "";
    e.target.date.value = "";
    e.target.hour.value = "";
    e.target.kindSubs.value = "";
    e.target.count.value = "";
  };

  render() {
    return (
      <>
        <Nav />
        <form className="Log-lanes" onSubmit={this.handleSubmit}>
          <h1>تسجيل الايجارات</h1>
          <label>المنطقة</label>
          <input type="text" placeholder="المنطقة" id="area" />
          <label>اليوم</label>
          <input type="date" id="date" />
          <label>الساعة</label>
          <input type="time" id="hour" />
          <label>نوع الاشتراك</label>
          <select id="kindSubs">
            <option>كروت</option>
            <option>8 تمرينات</option>
            <option>12 تمرينه</option>
          </select>
          <label>العدد</label>
          <input type="text" placeholder="العدد" id="count" />
          <button type="submit">حفظ</button>
        </form>
      </>
    );
  }
}
export default LogLanes;
