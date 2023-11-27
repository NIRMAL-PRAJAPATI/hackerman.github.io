let codebox1 = document.getElementById('code01');
let codebox2 = document.getElementById('code02');
let line = document.getElementById('line1');
let input = document.getElementById('inputer').value;
let btn = document.getElementById('btn');
let box1 = document.getElementById('side1');
let box2 = document.getElementById('side2');
let linebox = document.getElementById('linebox');
let speed = document.getElementById('speed');
let rebtn = document.getElementById('rebtn');
let mrq = document.getElementById('mrqmsg');

let arr = ["Initialize & connect network connection. . .",
    "Device Name : \"Redmi note 10s",
    "Device Password : \"2 0 0 5\"",
    "Connecting user device to green web. . .",
    "Applock password : \"1 2 3 4\" ",
    "Filemanager opened successfully.",
    "Gathering PNG, MP3&4, PDF, DOC formated files. . . ",
    "Upload all the files to green web. . .",
    "Files uploaded successfully."];

    let mrqmsg = ["Relience share price is down from \"$43.22\" to \"$35.23\".",
"Indian actor Salman khan's phone number is leaked.",
"OpenAI's CEO is fired today at 4PM.",
"Cristiano Ronaldo's daughter is missing for 2 hours.",
"Donald trum's location is changed to australia from japan."];

let flag = 0;
let btnval = 0;

function run() {
    if (flag == 0) {

        const sleep = (sec) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => { resolve(true) }, sec * 1000)
            })
        }

        const coderunner = () => {

            for (let i = 0; i <= 800; i++) {

                let coder = Math.random() * (2 - 0) + 0;
                coder = Number.parseInt(coder);

                setTimeout(async () => {

                    codebox1.innerText += (" " + coder);
                    await sleep(1);
                    codebox2.innerText += (" " + coder);
                }, 1000);
            }

            box1.style.backgroundColor = "rgba(0, 0, 0, 0.705)";
            box2.style.backgroundColor = "rgba(0, 0, 0, 0.705)";
            linebox.style.backgroundColor = "rgba(0, 0, 0, 0.705)";

            setInterval(netspeed, 1500);
        }

        const netspeed = () => {

            for (let i = 0; i == 0; i++) {
                let spd = Math.random() * (873 - 111) + 111;
                spd = Number.parseFloat(spd);
                spd = spd.toFixed(2);

                speed.innerHTML = (spd + " MB/s");
            }
        }

        const showline = async (msg) => {
            let ren = Math.random() * (4 - 1) + 1;
            await sleep(ren);
            line.innerHTML += (msg + "<br>");
        }


        const show = async () => {
            for (let i = 0; i < arr.length; i++) {
                await showline(arr[i]);
            }
        }

        const btnchanger = () => {
            if (btnval == 0) {
                rebtn.innerHTML = "Reload";
                btnval = 1;
            }

            else {

            }
        }

        let index = 0;

        const marquee = () => {

            index++;

            if(index == mrqmsg.length) {
                index = 0;
            }

            mrq.innerHTML = mrqmsg[index];
        }

        coderunner();
        show();
        btnchanger();
        setInterval(marquee, 6000);

        flag = 1;
    }

    else {
        location.reload();
    }
}

btn.addEventListener("click", run)