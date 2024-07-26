import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addNote, deleteNote } from "../redux/slices/articlesSlices";
import { motion } from "framer-motion";
import TemporaryMessage from "./TemporaryMessage";

export default function NoteModal({ isShow, onClose, note, articleLink }) {
  const [isDisplay, setIsDisplay] = useState(false);
  const [text, setText] = useState(note || "");
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("info");
  const dispatch = useDispatch();

  useEffect(() => {
    setIsDisplay(isShow);
  }, [isShow]);

  useEffect(() => {
    setText(note || "");
  }, [note]);

  const handleClose = () => {
    setIsDisplay(false);
    if (onClose) {
      onClose();
    }
  };

  const handleClickOutside = (event) => {
    if (event.target.id === "modal-background") {
      handleClose();
    }
  };

  const handleSave = () => {
    if (text.trim() === "") {
      setMessage("Note cannot be empty!");
      setMessageType("error");
    } else {
      dispatch(
        addNote({
          link: articleLink,
          text: text,
        })
      );
      setMessage("Note saved successfully!");
      setMessageType("success");
    }
  };

  return (
    <div>
      {isDisplay && (
        <div
          id="modal-background"
          className="fixed z-10 top-0 left-0 bg-black bg-opacity-40 w-screen h-full flex items-center justify-center"
          onClick={handleClickOutside}
        >
          <div className="relative w-2/3 h-[500px] bg-white rounded-2xl p-5">
            <div>
              <textarea
                className="w-full min-h-[400px] resize-none bg-slate-100 rounded-md p-2"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <div className="flex gap-3 justify-center mt-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={handleClose}
                className="bg-red-300 px-4 py-2 rounded-md"
              >
                Close
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={handleSave}
                className="bg-green-300 px-4 py-2 rounded-md"
              >
                Save
              </motion.button>
              {note !== "" && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  onClick={() => {
                    dispatch(deleteNote(articleLink));
                    setMessage("Note deleted successfully!");
                    setMessageType("error");
                  }}
                  className="bg-slate-200 px-4 py-2 rounded-md"
                >
                  Delete
                </motion.button>
              )}
            </div>
            {message && <TemporaryMessage text={message} type={messageType} />}
          </div>
        </div>
      )}
    </div>
  );
}

NoteModal.propTypes = {
  isShow: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  note: PropTypes.string,
  articleLink: PropTypes.string.isRequired,
};
