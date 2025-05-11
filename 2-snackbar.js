import"./assets/styles-B4zVjhdP.js";import{i as l}from"./assets/vendor-BbbuE1sJ.js";const a=`
  <form class="form">
    <label>
      Delay (ms)
      <input type="number" name="delay" required />
    </label>

    <fieldset>
  <legend>State</legend>
  <div class="radio-group">
    <label>
      <input type="radio" name="state" value="fulfilled" required />
      Fulfilled
    </label>
    <label>
      <input type="radio" name="state" value="rejected" required />
      Rejected
    </label>
  </div>
</fieldset>

    <button type="submit">Create notification</button>
  </form>
`;document.body.insertAdjacentHTML("beforeend",a);const t=document.querySelector(".form");t.addEventListener("submit",s=>{s.preventDefault();const i=Number(t.elements.delay.value),o=t.elements.state.value;new Promise((e,r)=>{setTimeout(()=>{o==="fulfilled"?e(i):r(i)},i)}).then(e=>{l.success({title:"✅",message:`Fulfilled promise in ${e}ms`,position:"topRight"})}).catch(e=>{l.error({title:"❌",message:`Rejected promise in ${e}ms`,position:"topRight"})}),t.reset()});
//# sourceMappingURL=2-snackbar.js.map
