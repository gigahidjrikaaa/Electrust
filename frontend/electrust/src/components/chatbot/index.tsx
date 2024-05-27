import React from "react";

const ChatbotIframe = () => {
    return (
        <div style={
            {
                display: 'fixed',
                bottom: '20px',
                right: '20px',
                width: '300px',
                height: '500px%',
            }
        }>
            <iframe src="https://copilotstudio.microsoft.com/environments/Default-af2c0734-cb42-464f-b6bf-2a241b6ada56/bots/cr319_electrustQnABot/webchat?__version__=2" 
            frameBorder="0" 
            style={{ 
                width: '100%', 
                height: '100%',
                overflow: 'hidden',
                 }}>
            </iframe>
        </div>
    )
}

export default ChatbotIframe;