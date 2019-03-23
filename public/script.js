let context = {};

const chatMessageTemplate = (message, from) => `
    <div class="from-${from}">
        <div class="message-inner">
            <p>${message}</p>
        </div>
    </div>
`;

const insertTemplateInChat = template => {
  const div = document.createElement("div");
  div.innerHTML = template;

  const chat = document.getElementById("chat");
  chat.appendChild(div);
};
