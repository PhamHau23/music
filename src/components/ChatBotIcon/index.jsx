import classNames from "classnames/bind";
import styles from "./ChatBot.module.scss";
import { AiChatbotIcon } from "~/icon";
import { useState } from "react";
import ChatBotContainer from "~components/ChatBotContainer";

const c = classNames.bind(styles)

function ChatBotIcon(){
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(true)
    }

    return (
        <>
            <div className={c("chatbotButton")} style={open ? {display: 'none'} : {display: 'block'}}>
                <div onClick={() => handleToggle()}> <AiChatbotIcon /> </div>
            </div>
            {open && <ChatBotContainer setOpen={setOpen}/>}
        </>
    )
}

export default ChatBotIcon;