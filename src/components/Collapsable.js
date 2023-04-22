import { useState } from "react";

const Collapsible = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (

        <div>

            <div className="chat" onClick={() => setIsOpen((!isOpen))}>Chat</div>
            {isOpen &&
                <div className="content">
                    <div className="user1">
                        <div className="user_photo1"></div>
                        <p> Lorem ipsum...</p>
                    </div>
                    <div className="user2">
                        <div className="user_photo2"></div>
                        <p> Lorem ipsum...</p>
                    </div>
                    <input className="text" />
                    <button className="send_btn">Send</button>

                </div>
            }
        </div>

    );
}

export default Collapsible;