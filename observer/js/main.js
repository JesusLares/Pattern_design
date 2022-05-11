/* 
// Ejemplo
class Subject {

  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(data) {
    this.observers.forEach(obs => {
      obs.refresh(data)
    })
  }
}

class Observer {

  constructor(fn) {
    this.fn = fn;
  }

  refresh(data) {
    this.fn(data);
  }
}

const s = new Subject();
const o1 = new Observer(d => console.log("observer1", d))
const o2 = new Observer(d => div1.innerHTML = d)
const o3 = new Observer(d => div2.innerHTML = d.split("").reverse().join(""))
s.subscribe(o1);
s.subscribe(o2);
s.subscribe(o3);

s.unsubscribe(o1);
function change() {
  s.notify(myText.value)
}
*/


// Ejemplo de la practica
class SubjectEjemplo {

  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(data) {
    this.observers.forEach(obs => {
      obs.refresh(data)
    })
  }
}

class ItemsSubjects extends SubjectEjemplo {
  constructor() {
    super();
    this.data = []
  }

  add(item) {
    this.data.push(item);
    this.notify(this.data);
  }
}

class HtmlElementObserver {
  constructor(element) {
    this.element = element;
  }

  refresh(data) {
    this.element.innerHTML = data.reduce((ac, e) => {
      return ac + `<p>${e}</p> <hr/>`;
    }, "");
  }
}

const item = new ItemsSubjects();
const obs1 = new HtmlElementObserver(div1);
const obs2 = new HtmlElementObserver(div2);

item.subscribe(obs1);
item.subscribe(obs2);

function add() {
  const name = txtName.value;
  item.add(name)
}