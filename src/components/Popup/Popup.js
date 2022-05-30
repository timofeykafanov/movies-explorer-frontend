import './Popup.css';

function Popup(props) {
  function handleClick() {
    props.closePopup();
  }

  return (
    <div className={`popup ${props.isOpen ? '' : 'popup_hidden'}`}>
      <div className='popup__container'>
        <button className='popup__close' type='button' onClick={handleClick} />
        <div className='popup__icon' />
        <p className='popup__text'>Данные успешо изменены!</p>
      </div>
    </div>
  )
}

export default Popup;