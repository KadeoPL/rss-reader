import { NoteText } from "iconsax-react";
import { motion } from "framer-motion";
import { useState } from "react";
import NoteModal from "./NoteModal";
import { useSelector } from "react-redux";
import { getNote } from "../redux/slices/articlesSlices";
import PropTypes from "prop-types";

export default function AddNoteButton({ article }) {
  const [modalOpen, setModalOpen] = useState(false);
  const note = useSelector(getNote(article.link));

  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div
          className="flex gap-1 items-center cursor-pointer"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          <NoteText size={16} />
          {note !== "" ? "Edit note" : "Add note"}
        </div>
      </motion.div>
      <div>
        <NoteModal
          isShow={modalOpen}
          note={note}
          articleLink={article.link}
          onClose={() => setModalOpen(false)}
        />
      </div>
    </div>
  );
}

AddNoteButton.propTypes = {
  article: PropTypes.shape({
    link: PropTypes.string.isRequired,
  }).isRequired,
};
