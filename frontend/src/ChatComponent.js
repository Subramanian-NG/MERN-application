export default function ChatComponentFunc({ selectedUserData }) {
  return (
    <div>
      <div className="box">
        <textarea></textarea>
        <p>Send message to {selectedUserData.email}</p>
      </div>
    </div>
  );
}
