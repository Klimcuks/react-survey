import { useState } from "react";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [rateColor, setRateColor] = useState()
  const [selectOption, setSelectOption] = useState()
  const [comment, setComment] = useState()
  const [name, setName] = useState()
  const [email, setEmail] = useState()

 
  


  function handleSubmit(e){
    e.preventDefault()
    e.target.reset()
    console.log(rateColor, selectOption, comment, name, email)
  }

  function handleChange(e){
    console.log(e.target.value)
    setRateColor(e.target.value)
  }
  function selectOptions(e){
    console.log(e.target.value)
    setSelectOption(e.target.value)
  }
  function handleText(e){
    console.log(e.target.value)
    setComment(e.target.value)
  }
  function handleNameInput(e){
    console.log(e.target.value)
    setName(e.target.value)
  }
  function handleEmailInput(e){
    console.log(e.target.value)
    setEmail(e.target.value)
  }
 
  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">
        <form className="form" onSubmit={handleSubmit}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <ul>
          <li>
            <input id="color-one" type="radio" name="color" value="1" onChange={handleChange}/>
            <label htmlFor="color-one">1</label>
          </li>
          <li>
            <input id="color-two" type="radio" name="color" value="2" onChange={handleChange}/>
            <label htmlFor="color-two">2</label>
          </li>
          <li>
            <input id="color-three" type="radio" name="color" value="3" onChange={handleChange}/>
            <label htmlFor="color-three">3</label>
          </li>
          <li>
            <input id="color-four" type="radio" name="color" value="4" onChange={handleChange}/>
            <label htmlFor="color-four">4</label>
          </li>
        </ul>
      </div>
      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        <ul>
          <li>
            <label>
              <input name="spend-time" type="checkbox" value="swimming" onChange={selectOptions}/>
              Swimming
            </label>
          </li>
          <li>
            <label>
              <input name="spend-time" type="checkbox" value="bathing" onChange={selectOptions}/>
              Bathing
            </label>
          </li>
          <li>
            <label>
              <input name="spend-time" type="checkbox" value="chatting" onChange={selectOptions}/>
              Chatting
            </label>
          </li>
          <li>
            <label>
              <input name="spend-time" type="checkbox" value="noTime" onChange={selectOptions}/>I don't
              like to spend time with it
            </label>
          </li>
        </ul>
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea name="review" cols="30" rows="10" onChange={handleText}></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input type="text" name="username" value={name} onChange={handleNameInput}/>
      </label>
      <label>
        Leave us your email pretty please??
        <input type="email" name="email" value={email} onChange={handleEmailInput}/>
      </label>
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
        </section>
    </main>
  );
}

export default Main;
