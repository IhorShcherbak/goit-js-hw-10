import"./assets/styles-B4zVjhdP.js";import{f as m,i as f}from"./assets/vendor-BbbuE1sJ.js";document.body.innerHTML=`
  <div class="picker-container">
    <input type="text" id="datetime-picker" />
    <button type="button" data-start disabled>Start</button>
  </div>
  <div class="timer">
    <div class="field">
      <span class="value" data-days>00</span>
      <span class="label">Days</span>
    </div>
    <div class="field">
      <span class="value" data-hours>00</span>
      <span class="label">Hours</span>
    </div>
    <div class="field">
      <span class="value" data-minutes>00</span>
      <span class="label">Minutes</span>
    </div>
    <div class="field">
      <span class="value" data-seconds>00</span>
      <span class="label">Seconds</span>
    </div>
  </div>
`;let o=null,i=null;const e={input:document.getElementById("datetime-picker"),startBtn:document.querySelector("[data-start]"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")},y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const s=t[0];s<=new Date?(f.warning({title:"Warning",message:"Please choose a date in the future",position:"topRight"}),e.startBtn.disabled=!0):(o=s,e.startBtn.disabled=!1)}};m(e.input,y);e.startBtn.addEventListener("click",()=>{o&&(e.startBtn.disabled=!0,e.input.disabled=!0,i=setInterval(()=>{const s=o-new Date;if(s<=0){clearInterval(i),r({days:0,hours:0,minutes:0,seconds:0}),e.input.disabled=!1;return}const a=v(s);r(a)},1e3))});function r({days:t,hours:s,minutes:a,seconds:d}){e.days.textContent=n(t),e.hours.textContent=n(s),e.minutes.textContent=n(a),e.seconds.textContent=n(d)}function n(t){return String(t).padStart(2,"0")}function v(t){const l=Math.floor(t/864e5),u=Math.floor(t%864e5/36e5),c=Math.floor(t%864e5%36e5/6e4),p=Math.floor(t%864e5%36e5%6e4/1e3);return{days:l,hours:u,minutes:c,seconds:p}}
//# sourceMappingURL=1-timer.js.map
