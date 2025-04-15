// file gọi api phía client
import axios from 'axios';
const api = import.meta.env.VITE_CHAT_BOT_URL;

async function chatbotApi(message) {
    try {
        const activity = {
            type: 'message',
            from: { id: localStorage.getItem('_id') },
            conversation: { id: localStorage.getItem('_id') },
            text: message,
            channelId: 'webchat',
            serviceUrl: api
        };

        const response = await axios.post(`${api}`, activity, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        console.log("Received Response:", response.data)

        return response.data;
    } catch (error) {
        console.error('Error fetching chatbot response:', error);
        throw error;
    }
}

export default chatbotApi;