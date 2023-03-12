import React from "react";
import Nav from "./Nav";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import "./DataSwimmer.css";
class DataSwimmers extends React.Component {
  handleShow = () => {
    const { db } = this.props;
    const colRef = query(collection(db, "logSwimmers"), orderBy("createdAt"));

    onSnapshot(colRef, (snapshot) => {
      const todos = [];
      let todosHtml = "";
      snapshot.docs.forEach((doc) => {
        todos.push({ id: doc.id, ...doc.data() });
        todosHtml += `
        <ul class="data" >
              <li data-id="${doc.id}"> ${doc.data()["swimmer-name"]} </li>
              <li data-id="${doc.id}"> ${doc.data()["date-birth"]} </li>
              <li data-id="${doc.id}"> ${doc.data()["gender"]} </li>
              <li data-id="${doc.id}"> ${doc.data()["date-subs"]} </li>
              <li data-id="${doc.id}"> ${doc.data()["level"]} </li>
              <li data-id="${doc.id}"> ${doc.data()["coach-name"]} </li>
              <li data-id="${doc.id}"> ${doc.data()["price"]} </li>
          </ul>
        
        `;
      });
      const todosEl = document.querySelector(".data-swim");
      todosEl.innerHTML = `
      <h1> داتا السباحين </h1>
      <span> ${document.querySelectorAll(".data").length} </span>
      <ul class="data-title">
            <li> اسم السباح </li>
            <li> تاريخ الميلاد </li>
            <li> الجنس </li>
            <li> تاريخ الاشتراك </li>
            <li> المستوى </li>
            <li> المدرب </li>
            <li> قيمة الاشتراك </li>
          </ul>
          ${todosHtml}
      `;
    });
  };

  render() {
    return (
      <>
        <Nav />
        <div className="data-swim"></div>
        {this.handleShow()}
      </>
    );
  }
}
export default DataSwimmers;
