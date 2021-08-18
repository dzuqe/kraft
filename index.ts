//import MyAlgoConnect from '@randlabs/myalgo-connect';
import MyAlgoConnect, {CallApplTxn} from '@randlabs/myalgo-connect';
import algosdk from 'algosdk';
import { createNoSubstitutionTemplateLiteral } from 'typescript';

let hammer = "🛠";
let wood = "🪵";
let vegetable = "🥑";
let fruit = "🍎";
let robot = "🤖";
let steak = "🍲";
let salad = "🥗";
let nail = "🔩";
let metal = "⚓";
let meat = "🥩";
let car = "🚗";
let pot = "🫕";

let items = {
  "hammer": "🛠",
  "wood": "🪵",
  "vegetable": "🥑",
  "fruit": "🍎",
  "metal robot": "🤖",
  "steak and chips": "🍲",
  "salad and fruit": "🥗",
  "nail": "🔩",
  "metal": "⚓",
  "meat": "🥩",
  "car": "🚗",
  "pot": "🫕",
};

class App {
  elem: HTMLElement;
  btns: HTMLElement;
  box: HTMLElement;
  board: HTMLElement;
  wallet: any;
  algodClient: any;
  accounts: any;
  addresses: any;
  isConnected: boolean;
  gamestate: object;
  appid: number;

  constructor(appid: number)
  {
    this.appid = appid;
    this.elem = document.createElement('div');
    this.elem.id = "viewport";
    this.algodClient = new algosdk.Algodv2(
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 
      'http://127.0.0.1', 
      '4001'
    );
    this.wallet = new MyAlgoConnect();

    this.box = document.createElement('div');
    this.box.id = 'notification-message';
    this.box.innerText = 'Nothing to see here'
    this.elem.appendChild(this.box);

    this.board = document.createElement('div')
    this.board.id = 'board';
    this.elem.appendChild(this.board);

    var craftopts = "";
    var getopts = "";
    for (var key in items) {
      console.log(key, items[key]);
      if (key.includes(' ')) {
        craftopts += "<option>" + key + "</option>";
      } else {
        getopts += "<option>" + key + "</option>";
      }
    }

    let controllertxt = `
    <div class="control">
      <h4>Get</h4>
      <select name="option_get">
        ${getopts}
      </select>
      <input type="number" name="amount_get" value=1 />
      <input type="submit" name="submit_get" value="Get" />
    </div>

    <div class="control">
      <h4>Craft</h4>
      <select name="option_craft">
        ${craftopts}
      </select>
      <input type="number" name="amount_craft" value=1>
      <input type="submit" name="submit_craft" value="Craft" />
    </div>
    `;

    let controller = document.createElement('form');
    controller.id = "controller";
    controller.innerHTML = controllertxt;

    let _this = this;
    controller.onsubmit = function(event) {
      event.preventDefault();
      console.log(event.target);
      if (event.submitter.name === "submit_get") {
        _this.getItem(event.target);
      } else {
        _this.craftItem(event.target);
      }
    }
    this.elem.append(controller);
  }

  async getItem(form: HTMLElement) {
    let option_get = form[0];
    let amount_get = form[1];
    console.log(`Get ${amount_get.value} ${option_get.value}`);
    let args = [btoa("get"), btoa(option_get.value), btoa(amount_get.value)];
    console.log(args);
    await this.callapp(args);
  }

  async craftItem(form: HTMLElement) {
    let option_craft = form[3];
    let amount_craft = form[4];
    console.log(`Craft ${amount_craft.value} ${option_craft.value}`);
    let args = [btoa(`craft ${option_get.value}`), btoa(amount_get.value)];
    console.log(args);
    await this.callapp(args);
  }

  render()
  {
    document.getElementById('root').appendChild(this.elem);
  }

  async readapp(loadLocal: boolean = false): Promise<boolean> {
    try {
      let app = await this.algodClient.getApplicationByID(this.appid).do();
      var p = {};
      for (var key in app.params['global-state']) {
        let r = app.params['global-state'][key];
        p[atob(r.key)] = r.value;
      }

      var linfo = "";
      if (loadLocal) {
        console.log("Local state");
        let lapp = await this.algodClient.accountInformation(this.addresses[0]).do();
        console.log("LOCAL STATE: ", lapp);
        var local  = {};
        for (var key in lapp['apps-local-state'][0]['key-value']) {
          let r = lapp['apps-local-state'][0]['key-value'][key];
          local[atob(r.key)] = r.value;
        }
        console.log(local);
        
        linfo = `
          <table>
            <tr><td>hammer</td><td>${hammer}</td><td>${local.hammer.uint}</td></tr>
            <tr><td>wood</td><td>${wood}</td><td>${local.wood.uint}</td></tr>
            <tr><td>fruit</td><td>${fruit}</td><td>${local.fruit.uint}</td></tr>
            <tr><td>metal robot</td><td>${robot}</td><td>${local['metal robot'].uint}</td></tr>
            <tr><td>steak and chips</td><td>${steak}</td><td>${local['steak and chips'].uint}</td></tr>
            <tr><td>salad and fruits</td><td>${salad}</td><td>${local['salad and fruits'].uint}</td></tr>
            <tr><td>nail</td><td>${nail}</td><td>${local.nail.uint}</td></tr>
            <tr><td>vegetable</td><td>${vegetable}</td><td>${local.vegetable.uint}</td></tr>
            <tr><td>meat</td><td>${meat}</td><td>${local.meat.uint}</td></tr>
            <tr><td>pot</td><td>${pot}</td><td>${local.pot.uint}</td></tr>
            <tr><td>wooden cart</td><td>${car}</td><td>${local['wooden cart'].uint}</td></tr>
          </table>
        `;
      }

      let info = `
        <table>
          <tr><td>hammer</td><td>${hammer}</td><td>${p.hammer.uint}</td></tr>
          <tr><td>wood</td><td>${wood}</td><td>${p.wood.uint}</td></tr>
          <tr><td>fruit</td><td>${fruit}</td><td>${p.fruit.uint}</td></tr>
          <tr><td>metal robot</td><td>${robot}</td><td>${p['metal robot'].uint}</td></tr>
          <tr><td>steak and chips</td><td>${steak}</td><td>${p['steak and chips'].uint}</td></tr>
          <tr><td>salad and fruits</td><td>${salad}</td><td>${p['salad and fruits'].uint}</td></tr>
          <tr><td>nail</td><td>${nail}</td><td>${p.nail.uint}</td></tr>
          <tr><td>vegetable</td><td>${vegetable}</td><td>${p.vegetable.uint}</td></tr>
          <tr><td>meat</td><td>${meat}</td><td>${p.meat.uint}</td></tr>
          <tr><td>pot</td><td>${pot}</td><td>${p.pot.uint}</td></tr>
          <tr><td>wooden cart</td><td>${car}</td><td>${p['wooden cart'].uint}</td></tr>
        </table>
      `;
      document.getElementById('board').innerHTML = info + linfo;
      return true;
    } catch (e) {
      console.log(e.response.text);
      this.box.innerText = e.response.text;
      return false;
    }
  }

  async connect() {
    try {
      this.isConnected = true;
      this.accounts = await this.wallet.connect();
      this.addresses = this.accounts.map(account => account.address);

      let canread = await this.readapp();

      if (canread) {
        document.getElementById("connect").style.display = 'none';
        document.getElementById("call").style.display = 'block';
      }

    } catch(e) {
      console.log(e.response.text);
      this.box.innerText = e.response.text;
    }
  }

  async callapp(args: any) {
    try {
      let txnn = await this.algodClient.getTransactionParams().do();
      let txn: CallApplTxn = {
        ...txnn,
        from: this.addresses[0],
        fee: 1000,
        flatFee: true,
        appIndex: this.appid,
        type: 'appl',
        appArgs: args,
        appOnComplete: 0,
      };

      let signedTxn = await this.wallet.signTransaction(txn);
      await this.algodClient.sendRawTransaction(signedTxn.blob).do();
      this.readapp();
    } catch(e) {
      console.error(e.response.text);
      this.box.innerText = e.response.text;
    }
  }

  addbtn(b: HTMLElement) {
    this.elem.appendChild(b);
  }

  async optin() {
    await this.opt(1);
    await this.readapp(true);
  }

  async optout() {
    await this.opt(2);
    await this.readapp();
  }

  async opt(action) {
    try {
      let txnn = await this.algodClient.getTransactionParams().do();
      let txn: CallApplTxn = {
        ...txnn,
        from: this.addresses[0],
        fee: 1000,
        flatFee: true,
        appIndex: this.appid,
        type: 'appl',
        appOnComplete: action,
      };

      let signedTxn = await this.wallet.signTransaction(txn);
      await this.algodClient.sendRawTransaction(signedTxn.blob).do();
      this.readapp();
    } catch(e) {
      console.error(e.response.text);
      this.box.innerText = e.response.text;
    }
  }
};

let app: App = new App(331);

let btn = document.createElement('button');
btn.id = "connect"
btn.innerText = "Connect Wallet";
btn.onclick = async function() {
  app.connect();
}

let cbtn = document.createElement('button');
cbtn.id = "call";
cbtn.style.display = "none";
cbtn.innerText = "Call App";
cbtn.onclick = async function() {
  app.callapp('test');
}

let optin = document.createElement('button')
optin.innerText = "Optin";
optin.onclick = async function() {
  app.optin();
}


let optout = document.createElement('button')
optout.innerText = "Optout";
optout.onclick = async function() {
  app.optout();
}



app.addbtn(btn);
app.addbtn(cbtn);
app.addbtn(optin);
app.addbtn(optout);

window['app'] = app;

app.render();
