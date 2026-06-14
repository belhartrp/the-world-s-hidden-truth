
  const textEl = document.getElementById("text");
  const finalWords = document.getElementById("finalWords");
  const layer = document.getElementById("countLayer");

  const counts = [
    document.getElementById("count3"),
    document.getElementById("count2"),
    document.getElementById("count1")
  ];

  const lines = [
    "Bagaimana jika sebagian sejarah yang kita kenal sebenarnya sengaja disembunyikan..?",
    "dan bukti-buktinya ada di sekitar kita, tapi jarang sekali benar-benar diperhatikan..",
    "Jika kamu siap melihat dari sudut pandang yang berbeda..",
    "tarik napas..",
    "fokus..",
    "dan bersiaplah"
  ];

  const sleep = ms => new Promise(r=>setTimeout(r,ms));

  async function typeLine(t){
    textEl.className="cursor";
    textEl.textContent="";
    for(const c of t){
      textEl.textContent+=c;
      await sleep(50);
    }
    await sleep(1200);
  }

  async function countdown(){
    textEl.classList.add("hidden");

    layer.classList.add("show");
    for(const c of counts){
      c.classList.add("show");
      await sleep(1000);
      c.classList.remove("show");
    }
    layer.classList.remove("show");
  }

  async function run(){
    for(const l of lines) await typeLine(l);

    await countdown();

    document.body.classList.add("dark");
    void document.body.offsetHeight;
    document.body.classList.add("fadeToWhite");

    finalWords.classList.add("show");
  }

  run();