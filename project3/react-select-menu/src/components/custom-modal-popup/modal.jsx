
import PropTypes from prop-PropTypes;

Modal.propTypes = {
    id:PropTypes.string.isRequired,
    header:PropTypes.element.isRequired,
    body:PropTypes.element.isRequired,
    footer:PropTypes.element.isRequired,
  };

export default function Modal({ id, header, body, footer, onClose }) {
    return (
      <div id={id || "Modal"} className="modal">
        <div className="modal-content">
          <div className="header">
            <span onClick={onClose} className="close-modal-icon">&times;</span>
            <span>{header}</span>
          </div>
          <div className="body">
              <div>
                <p>This is our Modal Body {body}</p>
              </div>
          </div>
          <div className="footer">{footer ? footer : <h2>Footer</h2>}</div>
        </div>
      </div>
    );
  }