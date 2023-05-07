async function rateCall() {
    let prom = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
    let data = prom.json();
    let obj = await data;
    let keys = Object.keys(obj.Valute);
    let values = Object.values(obj.Valute);
    document.querySelector(".main-rate").appendChild(createListRate(keys, values));
}

function createListRate(keys, values) {
    let list = document.createElement("div");
    for (let i = 0; i < keys.length; i++) {
        let line = document.createElement("div");
        line.className = "line-action";
        list.appendChild(createBlockRate(keys[i], values[i]));
        if (i !== keys.length - 1) {            
            list.appendChild(line);
        }
    }
    return list;
}

function createBlockRate(key, value) {
    let block = document.createElement("div");
    block.className = "block-rate";

    let blockNames = document.createElement("div");
    blockNames.className = "block-names";

    let id = document.createElement("h1");
    id.innerText = key;
    id.className = "rate-id-style";

    let noninal = document.createElement("h1");
    noninal.innerText = "Nominal " + value.Nominal;
    noninal.className = "nominal-style";

    blockNames.appendChild(id);
    blockNames.appendChild(noninal);

    let blockPrice = document.createElement("div");
    blockPrice.className = "block-rate-price";

    let previous = document.createElement("h1");
    previous.innerHTML = value.Previous;

    let sell = document.createElement("h1");
    sell.innerHTML = value.Value;

    blockPrice.appendChild(previous);
    blockPrice.appendChild(sell);

    block.appendChild(blockNames);
    block.appendChild(blockPrice);

    return block;
}

rateCall();