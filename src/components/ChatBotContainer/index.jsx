import classNames from "classnames/bind";
import styles from "./ChatBotContainer.module.scss";
import chatbotApi from "~/services/chatbotApi";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessage, resetData } from "~/redux/slices/messageSlice";

const c = classNames.bind(styles)
function ChatBotContainer({setOpen}) {
    const inputRef = useRef(null)
    const [userMessage, setUserMessage] = useState(null)
    const dispatch = useDispatch()
    const {message} = useSelector((state) => state.message)
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await chatbotApi(userMessage);
                dispatch(setMessage({text: response.reply, from: 'bot'}))
            } catch (error) {
                console.error("Error fetching data:", error);
                // Handle error appropriately
            }
        }
        fetchData();
    }, [userMessage])

    const handleClose = () => {
        setOpen(false)
    }

    const handleSendMessage = () => {
        const message = inputRef.current.value
        inputRef.current.value = ''
        if (message) {
            setUserMessage(message)
            dispatch(setMessage({text: message, from: 'user'}))
        }
    }

    console.log(message)

    return (
        <div className={c("chatbotContainer")}>
            <div className={c("chatbotHeader")}>
                <div className={c("headerTitle")}>Chat Bot</div>
                <button className={c("closeButton")} onClick={handleClose}>Close chat</button>
            </div>

            <div className={c("chatbotBody")}>
                <div className={c("message")}>
                    <div className={c("botMessage")}>
                        <div className={c("botMessageContent")}>
                            Chào bạn, tôi có thể giúp gì cho bạn?
                        </div>
                        <span className={c("time")}>{time}</span>
                    </div>
                    {
                        message.map((msg, index) => (
                            msg.text && <div key={index} className={c("userMessage", msg.from === 'user' ? 'userMessage' : 'botMessage')}>
                                <div className={c("userMessageContent", msg.from === 'user' ? 'userMessageContent' : 'botMessageContent')}>
                                    <p>
                                        {msg.text}
                                    </p>
                                </div>
                                <span className={c("time")}>{time}</span>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className={c("chatbotFooter")}>
                <input type="text" placeholder="Type a message..." ref={inputRef}/>
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    )
}

export default ChatBotContainer;