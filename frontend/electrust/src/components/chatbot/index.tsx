import React from "react";

const ChatbotIframe = () => {
    return (
        <div style={
            {
                display: 'fixed',
                bottom: '20px',
                right: '20px',
                width: '100%',
                height: '85vh',
                minHeight: 'fit-content',
                padding: '20px',
                overflow: 'hidden',
            }
        }>
            <div>
                <h1 className="text-4xl font-bold font-russo-one text-mikadoYellow text-center mb-4">Chat with Electrust Bot</h1>
            </div>
            <iframe src="https://copilotstudio.microsoft.com/environments/Default-af2c0734-cb42-464f-b6bf-2a241b6ada56/bots/cr319_electrustQnABot/webchat?__version__=2" 
            frameBorder="0" 
            style={{ 
                margin: 'auto',
                width: '80%', 
                height: '80%',
                overflow: 'hidden',
                borderRadius: '10px',
                boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
                 }}>
            </iframe>
            <div className="mt-4 mb-4">
                <p className="text-center">Powered by Microsoft Azure Bot Service</p>
            </div>
        </div>
    )
}

export default ChatbotIframe;