let context = {};

const chatMessageTemplate = (message, from) => `
    <div class="from-${from}">
        <div class="message-inner">
            <p>${message}</p>
        </div>
    </div>
`;
