
function Chat() {
    return (
        <div className="bg-white w-full max-w-md h-full max-h-screen md:h-[600px] md:w-[400px] shadow-lg rounded-lg overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Chat</h2>
          </div>
          <div className="p-4 flex-1 overflow-y-auto">
            {/* Chat messages will go here */}
          </div>
          <div className="p-4 border-t border-gray-200">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
    );
}
export default Chat;