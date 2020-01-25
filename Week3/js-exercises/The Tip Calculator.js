// Bills Class: Represent a Bills
class Bill {
  constructor(amount, options, people, tip) {
    this.amount = amount;
    this.options = options;
    this.people = people;
    this.tip = tip;
  }
}
//UI Class : Handle UI Tasks
class UI {
  static displayBills() {
    const bills = Store.getBills();
    bills.forEach(bill => UI.addBillToList(bill));
  }
  static addBillToList(bill) {
    const list = document.querySelector('#bill-list');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${bill.amount}</td>
    <td>${bill.options} % </td>
    <td>${bill.people}</td>
    <td> $ ${bill.tip} each </td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;
    list.appendChild(row);
  }
  static deleteBill(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#bill-form');
    //to display it before the form
    container.insertBefore(div, form);
    //gone after 1 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 1000);
  }

  static clearFields() {
    document.querySelector('#amount').value = '';
    document.querySelector('#options').value = '';
    document.querySelector('#people').value = '';
  }
}

// Store Class: HandlesStorage
class Store {
  static getBills() {
    let bills;
    if (localStorage.getItem(bills) === null) {
      bills = [];
    } else {
      bills = localStorage.getItem(bills);
    }
    return bills;
  }

  static addBill(bill) {
    const bills = Store.getBills();
    bills.push(bill);
    localStorage.setItem('bills', bills);
  }
  static removeBill(tip) {
    const bills = Store.getBills();
    bills.forEach((bill, index) => {
      if (bill.tip === tip) {
        bills.splice(index, 1);
      }
    });
    localStorage.setItem('bills', bills);
  }
}
//Event: Display Bill
document.addEventListener('DOMContentLoaded', UI.displayBills);
//Event: Add a bill with tip
document.querySelector('#bill-form').addEventListener('submit', e => {
  //prevent actual submit
  e.preventDefault();

  //Get form Value
  const amount = document.querySelector('#amount').value;
  const options = document.querySelector('#options').value;
  const people = document.querySelector('#people').value;
  let totalBill = (amount * options) / 100;
  let tip = totalBill / people;
  tip = Math.floor(tip * 100) / 100;
  //Balidate
  if (amount === '' || options === '' || people === '') {
    UI.showAlert('Please fill in all fields as Numbers', 'danger');
  } else {
    // Instatiate bills
    const bill = new Bill(amount, options, people, tip);

    // Add bill to UI
    UI.addBillToList(bill);

    //Add bill to store
    Store.addBill(bill);

    //Show success message
    UI.showAlert('Bill Added', 'success');

    //Clear fields
    UI.clearFields();
  }
});
//Event : Remove a Bill
document.querySelector('#bill-list').addEventListener('click', e => {
  //Remove Bill from UI
  UI.deleteBill(e.target);

  //Remove Bill from Store
  Store.removeBill(e.target.parentElement.previousElementSibling.textContent);

  //Show success message
  UI.showAlert('Bill Removed', 'success');
});
