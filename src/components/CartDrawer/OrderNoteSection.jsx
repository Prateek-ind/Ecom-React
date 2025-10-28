const OrderNoteSection = ({ note, setNote, isEditing, setIsEditing }) => {
  const handleSave = () => {
    if (note.trim() !== "") {
      setIsEditing(false);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setNote("");
    setIsEditing(false);
  };

  return (
    <div className="mt-4">
      {!isEditing && !note && (
        <button
          className="text-sm font-thin text-gray-700 "
          onClick={() => setIsEditing(true)}
        >
          Add order note.
        </button>
      )}

      {isEditing && (
        <div className=" flex flex-col gap-2 mt-4">
          <textarea
            className="w-full border border-gray-200 outline-none text-sm font-thin px-4 py-2"
            name="order-note"
            id="order-note"
            placeholder="Add your note..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <div className="flex gap-4">
            <button
              className="px-4 py-1 bg-[#63ce36] text-white"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="px-4 py-1 bg-white text-[#63ce36]"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {!isEditing && note && (
        <div className="flex gap-2 items-center text-gray-700">
          <p>Order Note : </p>
          <p className=" border border-gray-200 outline-none text-sm font-thin px-4 py-2">
            {note}
          </p>
          <button
            className="px-4 py-1 bg-[#63ce36] text-white "
            onClick={handleEdit}
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderNoteSection;
