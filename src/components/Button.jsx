const Button = ({ text, className, id }) => {
  return (
    <a 
      onClick={(e) => {
        e.preventDefault(); // prevent default anchor behavior (reload screen on click)

        const target = document.getElementById('counter');
        if (target && id) {
          const offset = window.innerHeight * 0.15; // 15% of the viewport height

          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          
          window.scrollTo({
            top: top,
            behavior: 'smooth'
          });
        }
      }}
    className={`${className ?? ""} cta-wrapper`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  )
}

export default Button