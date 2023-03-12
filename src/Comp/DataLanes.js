import React from "react";
import Nav from "./Nav";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import "./DataLanes.css";
class DataLanes extends React.Component {
  handleShow = () => {
    const { db } = this.props;
    const colRef = query(collection(db, "logLanes"), orderBy("createdAt"));

    onSnapshot(colRef, (snapshot) => {
      const todos = [];
      let todosHtml = "";
      snapshot.docs.forEach((doc) => {
        todos.push({ id: doc.id, ...doc.data() });
        todosHtml += `
        <ul class="data" >
              <li data-id="${doc.id}"> ${doc.data()["area"]} </li>
              <li data-id="${doc.id}"> ${doc.data()["day"]} </li>
              <li data-id="${doc.id}"> ${doc.data()["hour"]} </li>
              <li data-id="${doc.id}"> ${doc.data()["kindSubs"]} </li>
              <li data-id="${doc.id}"> ${doc.data()["count"]} </li>
          </ul>
        `;
      });
      const todosEl = document.querySelector(".data-lanes");
      todosEl.innerHTML = `
      <h1> داتا الايجارات </h1>
      <span> ${document.querySelectorAll(".data").length} </span>
      <ul class="data-title">
            <li> المنطقة </li>
            <li> اليوم </li>
            <li> الساعه </li>
            <li> نوع الاشتراك </li>
            <li> العدد </li>
          </ul>
          ${todosHtml}
      `;
    });
  };

  render() {
    return (
      <>
        <Nav />
        <div className="data-lanes"></div>
        {this.handleShow()}
      </>
    );
  }
}
export default DataLanes;
