
export default function Coffee() {
  return (
    <>
      <a className="coffee-button" target="_blank" href="https://www.buymeacoffee.com/bydavid">
        <img className="coffee-image" src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg" alt="Buy me a coffee" />
        <span className="cofee-text">Buy me a coffee</span>
      </a>
      <style jsx>{`
      .coffee-button {
        text-decoration: none;
        display: inline-flex;
        color: #fff;
        background-color: #FFDD00;
        border-radius: 5px;
        border: 1px solid transparent;
        padding: 8px 15px;
        font-size: 2rem;
        letter-spacing: 0.6px;
        box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5);
        transition: 0.3s all linear;
        font-family: cursive;     
      }

      .coffee-button:hover, .coffee-button:hover, .coffee-button:hover {
        text-decoration: none;
        box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5);
        opacity: 0.85;
        color: #fff;
      }

      .coffee-image {
        height: 25px;
        width: 25px;
        margin-bottom: 1px;
        box-shadow: none;
        border: none;
        vertical-align: middle;
      }

      .cofee-text {
        margin-left: 15px;
        font-size: 15px;
        vertical-align: middle;
      }
    `}</style>
    </>
  );
}
